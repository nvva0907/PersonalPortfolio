
import { useTheme } from '@/lib/theme-provider';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';


const HeroBackground = () => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Colors based on theme
  const getDarkThemeColor = () => new THREE.Color(0x0f172a); // Dark blue
  const getLightThemeColor = () => new THREE.Color(0xf8fafc); // Light gray
  const getParticleColor = () => theme === 'dark' ? 0x4f46e5 : 0x3b82f6; // Indigo/Blue

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Background color based on theme
    scene.background = theme === 'dark' ? getDarkThemeColor() : getLightThemeColor();

    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create particles
    const createParticles = () => {
      if (particlesRef.current) {
        scene.remove(particlesRef.current);
      }

      const particleCount = 2000;
      const particleGeometry = new THREE.BufferGeometry();
      const particlePositions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        particlePositions[i] = (Math.random() - 0.5) * 20;
        particlePositions[i + 1] = (Math.random() - 0.5) * 20;
        particlePositions[i + 2] = (Math.random() - 0.5) * 20;
      }

      particleGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(particlePositions, 3)
      );

      const particleMaterial = new THREE.PointsMaterial({
        color: getParticleColor(),
        size: 0.05,
        transparent: true,
        opacity: 0.8,
      });

      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);
      particlesRef.current = particles;
    };

    createParticles();

    // Animation loop
    const animate = () => {
      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.001;
        particlesRef.current.rotation.y += 0.001;
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  // Update scene when theme changes
  useEffect(() => {
    if (!sceneRef.current || !particlesRef.current) return;
    
    // Update background color
    sceneRef.current.background = theme === 'dark' ? getDarkThemeColor() : getLightThemeColor();
    
    // Update particle color
    if (particlesRef.current.material instanceof THREE.PointsMaterial) {
      particlesRef.current.material.color.set(getParticleColor());
    }
  }, [theme]);

  return <div ref={containerRef} className="absolute inset-0 -z-10" />;
};

export default HeroBackground;
