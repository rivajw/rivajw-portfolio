import { useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import SceneInit from "../public/SceneInit.js";

import styles from "../styles/Home.module.css";

const Model = () => {
  useEffect(() => {
    const test = new SceneInit("canvasId", "canvasEl");
    test.initialize();
    test.animate();

    // test.scene.background = new THREE.Color(0xffffff);

    let loadedModel;
    const glftLoader = new GLTFLoader();
    glftLoader.load("./model/vintage_terminal/scene.gltf", (gltfScene) => {
      loadedModel = gltfScene;
      gltfScene.scene.rotation.y = 6;
      // gltfScene.scene.position.y = -10;
      // gltfScene.scene.scale.set(0.4, 0.4, 0.4);
      gltfScene.scene.scale.set(10, 10, 10);
      test.scene.add(gltfScene.scene);
    });
    const animate = () => {
      if (loadedModel) {
        // loadedModel.scene.rotation.x += 0.01;
        loadedModel.scene.rotation.y += 0.005;
        // loadedModel.scene.rotation.z += 0.01;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);
  return (
    <div id="canvasEl" className={styles.canvasEl}>
      <canvas id="canvasId" className={styles.canvasId}>
      </canvas>
    </div>
  );
};

export default Model;
