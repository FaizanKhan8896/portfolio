'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  varying vec2 vUv;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    
    float dist = distance(uv, uMouse);
    float mouseInfluence = smoothstep(0.5, 0.0, dist);
    
    float n1 = snoise(uv * 3.0 + uTime * 0.1);
    float n2 = snoise(uv * 2.0 - uTime * 0.15 + vec2(n1 * 0.5));
    float n3 = snoise(uv * 4.0 + uTime * 0.05 + vec2(n2 * 0.3));
    
    float finalNoise = (n1 + n2 + n3) / 3.0;
    
    // Add extra brightness around the mouse
    finalNoise += mouseInfluence * 0.3;
    
    // Elegant Midnight Blue / Cyan theme
    vec3 color1 = vec3(0.01, 0.01, 0.02); // Deep space black with a hint of blue
    vec3 color2 = vec3(0.02, 0.05, 0.1);  // Very dark navy
    vec3 color3 = vec3(0.05, 0.15, 0.3);  // Ocean blue
    vec3 color4 = vec3(0.1, 0.4, 0.6);    // Cyan / Bright blue highlight
    
    // Smooth blending
    vec3 finalColor = mix(color1, color2, smoothstep(-1.0, -0.3, finalNoise));
    finalColor = mix(finalColor, color3, smoothstep(-0.3, 0.3, finalNoise));
    finalColor = mix(finalColor, color4, smoothstep(0.3, 1.0, finalNoise));
    
    // Subtle grain
    float grain = fract(sin(dot(uv.xy, vec2(12.9898,78.233))) * 43758.5453) * 0.04;
    finalColor += grain;
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export function FluidBackground() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();
  
  const mouseTarget = useRef(new THREE.Vector2(-1, -1));
  const currentMouse = useRef(new THREE.Vector2(-1, -1));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
      uMouse: { value: new THREE.Vector2(-1, -1) }
    }),
    [size]
  );

  useFrame((state) => {
    const { clock, pointer } = state;
    
    mouseTarget.current.set((pointer.x + 1) / 2, (pointer.y + 1) / 2);
    currentMouse.current.lerp(mouseTarget.current, 0.05);

    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = clock.getElapsedTime();
      material.uniforms.uMouse.value.copy(currentMouse.current);
      material.uniforms.uResolution.value.set(size.width, size.height);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}
