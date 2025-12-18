import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    } catch (error) {
      console.warn("WebGL/Three.js initialization failed:", error);
      return;
    }

    // Reduced Motion Check
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const particleCount = 250; // Further reduced number of particles
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    const minRadius = 5;
    const maxRadius = 12;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      const angle = Math.random() * Math.PI * 2;
      const radius = minRadius + Math.random() * (maxRadius - minRadius);

      positions[i3] = Math.cos(angle) * radius;
      positions[i3 + 1] = Math.sin(angle) * radius;
      positions[i3 + 2] = (Math.random() - 0.5) * 15;

      velocities.push({
        x: (Math.random() - 0.5) * 0.015,
        y: (Math.random() - 0.5) * 0.015,
        z: (Math.random() - 0.5) * 0.015,
      });
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const canvas2 = document.createElement("canvas");
    canvas2.width = 32;
    canvas2.height = 32;
    const ctx = canvas2.getContext("2d");
    ctx.beginPath();
    // Create an oval shape (ellipse)
    // ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
    ctx.ellipse(16, 16, 16, 8, Math.PI / 4, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    const ovalTexture = new THREE.CanvasTexture(canvas2);
    ovalTexture.flipY = false;

    const material = new THREE.PointsMaterial({
      color: 0x3b82f6,
      size: 0.12, // Increased size slightly to make the oval shape visible
      map: ovalTexture,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // No longer need observer here since backgrounds are now exclusive to themes

    const mouse = { x: 0, y: 0 };

    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    const clock = new THREE.Clock();
    let animationId;

    const animate = () => {
      if (prefersReducedMotion) return; // Stop animation loop

      animationId = requestAnimationFrame(animate);

      const t = clock.getElapsedTime();

      points.rotation.z += 0.001;

      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      const pos = geometry.attributes.position;

      for (let i = 0; i < particleCount; i++) {
        let x = pos.getX(i);
        let y = pos.getY(i);
        let z = pos.getZ(i);

        const distFromCenter = Math.sqrt(x * x + y * y);

        if (distFromCenter < minRadius) {
          const angle = Math.atan2(y, x);
          const pushForce = (minRadius - distFromCenter) * 0.1;
          velocities[i].x += Math.cos(angle) * pushForce;
          velocities[i].y += Math.sin(angle) * pushForce;
        }

        if (distFromCenter > maxRadius) {
          const angle = Math.atan2(y, x);
          const pullForce = (distFromCenter - maxRadius) * 0.1;
          velocities[i].x -= Math.cos(angle) * pullForce;
          velocities[i].y -= Math.sin(angle) * pullForce;
        }

        velocities[i].x *= 0.99;
        velocities[i].y *= 0.99;
        velocities[i].z *= 0.99;

        x += velocities[i].x;
        y += velocities[i].y;
        z += velocities[i].z;

        pos.setX(i, x);
        pos.setY(i, y);
        pos.setZ(i, z);

        const newY = pos.getY(i) + Math.sin(t + i * 0.1) * 0.00055;
        pos.setY(i, newY);

        if (Math.abs(pos.getZ(i)) > 5) velocities[i].z *= -1;
      }

      pos.needsUpdate = true;

      renderer.render(scene, camera);
    };

    if (prefersReducedMotion) {
      renderer.render(scene, camera); // Render once static
    } else {
      animate();
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      ovalTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />
  );
}