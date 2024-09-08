import * as THREE from 'three';

export class SceneBuilder {
    createScene(): THREE.Scene {
        const scene = new THREE.Scene();
        
        const cubeGeometry = new THREE.BoxGeometry();
        const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cubeObject = new THREE.Mesh(cubeGeometry, cubeMaterial);
        
        scene.add(cubeObject);
        return scene;
    }
}
