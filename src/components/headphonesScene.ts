import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import type { HeadphonesScene } from "@/types";

export const createHeadphonesScene = (
  canvas: HTMLCanvasElement,
  color: string,
): HeadphonesScene => {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.45;
  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = pmrem.fromScene(new RoomEnvironment(), 0.04);
  scene.environment = environment.texture;
  const camera = new THREE.PerspectiveCamera(31, 1, 0.1, 50);
  camera.position.set(4.5, 2.4, 7.7);
  camera.lookAt(0, 0.5, 0);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x526852, 3));
  const key = new THREE.DirectionalLight(0xffffff, 5);
  key.position.set(-3, 6, 5);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xd6fa59, 2.5);
  rim.position.set(4, 1, -4);
  scene.add(rim);
  const fill = new THREE.DirectionalLight(0xcbd9ff, 2.5);
  fill.position.set(-5, 0, 2);
  scene.add(fill);
  const product = new THREE.Group();
  scene.add(product);
  const shell = new THREE.MeshStandardMaterial({
    color,
    metalness: 0.78,
    roughness: 0.28,
  });
  const bright = new THREE.MeshStandardMaterial({
    color: "#aab3ac",
    metalness: 0.92,
    roughness: 0.22,
  });
  const cushion = new THREE.MeshStandardMaterial({
    color: "#1d201e",
    metalness: 0.03,
    roughness: 0.94,
  });
  const seamMaterial = new THREE.MeshStandardMaterial({
    color: "#515851",
    metalness: 0.1,
    roughness: 0.8,
  });
  const black = new THREE.MeshStandardMaterial({
    color: "#101411",
    metalness: 0.1,
    roughness: 0.9,
  });
  const ledMaterial = new THREE.MeshStandardMaterial({
    color: "#d6fa59",
    emissive: "#b9e548",
    emissiveIntensity: 1.8,
  });
  const arc = (radius: number, offset: number) =>
    new THREE.CatmullRomCurve3(
      Array.from({ length: 40 }, (_, index) => {
        const theta = (Math.PI * index) / 39;
        return new THREE.Vector3(
          Math.cos(theta) * radius,
          Math.sin(theta) * 1.64 + offset,
          0,
        );
      }),
    );
  const headband = new THREE.Mesh(
    new THREE.TubeGeometry(arc(1.26, 0.21), 90, 0.115, 12, false),
    shell,
  );
  product.add(headband);
  const innerBand = new THREE.Mesh(
    new THREE.TubeGeometry(arc(1.2, 0.08), 90, 0.102, 12, false),
    cushion,
  );
  product.add(innerBand);
  for (const side of [-1, 1]) {
    const cup = new THREE.Group();
    cup.position.set(side * 1.22, -0.34, 0);
    cup.rotation.z = side * 0.08;
    product.add(cup);
    const frame = new THREE.Mesh(
      new RoundedBoxGeometry(0.22, 1.32, 0.96, 6, 0.24),
      shell,
    );
    cup.add(frame);
    const rimMesh = new THREE.Mesh(
      new RoundedBoxGeometry(0.06, 1.35, 0.99, 6, 0.23),
      bright,
    );
    rimMesh.position.x = side * 0.1;
    cup.add(rimMesh);
    const cover = new THREE.Mesh(
      new RoundedBoxGeometry(0.15, 1.3, 0.95, 6, 0.24),
      shell,
    );
    cover.position.x = side * 0.17;
    cup.add(cover);
    const padding = new THREE.Mesh(
      new RoundedBoxGeometry(0.34, 1.24, 0.92, 8, 0.26),
      cushion,
    );
    padding.position.x = -side * 0.19;
    cup.add(padding);
    const inner = new THREE.Mesh(
      new RoundedBoxGeometry(0.015, 0.85, 0.53, 6, 0.19),
      black,
    );
    inner.position.x = -side * 0.368;
    cup.add(inner);
    const seam = new THREE.Mesh(
      new RoundedBoxGeometry(0.018, 1.15, 0.82, 6, 0.24),
      seamMaterial,
    );
    seam.position.x = -side * 0.37;
    cup.add(seam);
    const cavity = new THREE.Mesh(
      new RoundedBoxGeometry(0.02, 0.9, 0.59, 6, 0.18),
      black,
    );
    cavity.position.x = -side * 0.385;
    cup.add(cavity);
    const arm = new THREE.Mesh(
      new RoundedBoxGeometry(0.13, 0.52, 0.14, 3, 0.05),
      bright,
    );
    arm.position.set(0, 0.78, 0);
    cup.add(arm);
    const pivot = new THREE.Mesh(
      new THREE.CylinderGeometry(0.13, 0.13, 0.12, 32),
      bright,
    );
    pivot.rotation.z = Math.PI / 2;
    pivot.position.set(side * 0.15, 0.48, 0);
    cup.add(pivot);
    for (let index = 0; index < 9; index++) {
      const hole = new THREE.Mesh(new THREE.SphereGeometry(0.014, 8, 8), black);
      hole.position.set(side * 0.254, -0.42, index * 0.037 - 0.15);
      cup.add(hole);
    }
    if (side === 1) {
      const orbit = new THREE.Mesh(
        new THREE.TorusGeometry(0.16, 0.012, 8, 48),
        bright,
      );
      orbit.rotation.y = Math.PI / 2;
      orbit.scale.y = 0.62;
      orbit.rotation.x = -0.5;
      orbit.position.x = 0.254;
      cup.add(orbit);
      const button = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.036, 0.14, 4, 10),
        bright,
      );
      button.position.set(0, -0.65, 0.18);
      button.rotation.x = Math.PI / 2;
      cup.add(button);
      const led = new THREE.Mesh(
        new THREE.SphereGeometry(0.024, 12, 12),
        ledMaterial,
      );
      led.position.set(0.2, -0.55, 0.22);
      cup.add(led);
    }
  }
  const initialRotation = { x: -0.06, y: -0.18, z: -0.18 };
  product.rotation.set(initialRotation.x, initialRotation.y, initialRotation.z);
  product.position.y = -0.12;
  const pointer = { x: 0, y: 0 };
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const onPointer = (event: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = (event.clientX - rect.left) / rect.width - 0.5;
    pointer.y = (event.clientY - rect.top) / rect.height - 0.5;
  };
  const onLeave = () => {
    pointer.x = 0;
    pointer.y = 0;
  };
  canvas.addEventListener("pointermove", onPointer);
  canvas.addEventListener("pointerleave", onLeave);
  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height, false);
    camera.aspect = rect.width / rect.height;
    camera.position.z = rect.width < 500 ? 9.3 : 7.7;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  };
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  resize();
  let frame = 0;
  let disposed = false;
  let visible = true;
  const intersection = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
  });
  intersection.observe(canvas);
  const animate = (time: number) => {
    if (disposed) return;
    if (visible) {
      const movement = reducedMotion.matches ? 0 : 1;
      product.rotation.y +=
        (initialRotation.y + pointer.x * 0.7 - product.rotation.y) * 0.04;
      product.rotation.x +=
        (initialRotation.x + pointer.y * 0.24 - product.rotation.x) * 0.04;
      product.position.y = -0.12 + Math.sin(time * 0.0008) * 0.075 * movement;
      product.rotation.z =
        initialRotation.z + Math.sin(time * 0.00045) * 0.025 * movement;
      renderer.render(scene, camera);
    }
    frame = requestAnimationFrame(animate);
  };
  frame = requestAnimationFrame(animate);
  return {
    setColor: (hex) => {
      shell.color.set(hex);
      renderer.render(scene, camera);
    },
    dispose: () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      intersection.disconnect();
      canvas.removeEventListener("pointermove", onPointer);
      canvas.removeEventListener("pointerleave", onLeave);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) object.geometry.dispose();
      });
      [shell, bright, cushion, seamMaterial, black, ledMaterial].forEach(
        (material) => material.dispose(),
      );
      environment.dispose();
      pmrem.dispose();
      renderer.dispose();
    },
  };
};
