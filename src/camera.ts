import * as THREE from 'three';

export class Camera {
    createCamera(): THREE.PerspectiveCamera {
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        return camera;
    }

    resizeCamera(camera: THREE.PerspectiveCamera) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }
}
