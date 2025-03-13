
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { useTheme } from "@/lib/theme-provider";

interface HeroBackgroundProps {
  isVisible: boolean;
}

export default function HeroGlobeBackground({ isVisible }: HeroBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [sceneSetup, setSceneSetup] = useState<{
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    renderer?: THREE.WebGLRenderer;
    globe?: THREE.Mesh;
    animationId?: number;
  }>({});

  // Get theme colors
  const isDark = theme === "dark";
  const bgColor = isDark ? "#09090b" : "#ffffff";
  const particleColor = isDark ? "#ffffff" : "#09090b";
  const globeColor = isDark ? "#69675f" : "#e2e8f0";

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Create globe
    const globeGeometry = new THREE.SphereGeometry(2, 64, 64);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: globeColor,
      wireframe: true,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      if (!globe || !renderer || !scene || !camera) return;
      
      const animationId = requestAnimationFrame(animate);
      
      // Rotate globe
      globe.rotation.y += 0.005;
      globe.rotation.x += 0.002;
      
      renderer.render(scene, camera);
      
      return animationId;
    };

    const animationId = animate();

    setSceneSetup({ scene, camera, renderer, globe, animationId });

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener("resize", handleResize);
      if (containerRef.current && renderer) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [theme]);

  // Update colors when theme changes
  useEffect(() => {
    if (sceneSetup.globe) {
      (sceneSetup.globe.material as THREE.MeshBasicMaterial).color.set(globeColor);
    }
    if (sceneSetup.renderer) {
      sceneSetup.renderer.setClearColor(bgColor, 0);
    }
  }, [theme, globeColor, bgColor]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10"
      aria-hidden="true"
    />
  );
}
