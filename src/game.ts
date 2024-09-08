import * as THREE from 'three';
import { SceneBuilder } from './scene-builder';
import { Camera } from './camera';

export enum GameState {
    LOADING,
    PLAYING,
    PAUSED
}

export class Game {
    private renderer: THREE.WebGLRenderer;
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private state: GameState = GameState.LOADING;
    private needsUpdate = true;

    constructor() {
        this.renderer = new THREE.WebGLRenderer();
        this.scene = new SceneBuilder().createScene();
        this.camera = new Camera().createCamera();

        this.setRendererSize();
        this.autoResizeScene();
    }

    private setRendererSize() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
    }

    private autoResizeScene() {
        let resizeTimeout: ReturnType<typeof setTimeout>;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                new Camera().resizeCamera(this.camera);
                this.renderer.setSize(window.innerWidth, window.innerHeight);
            }, 200);
        });
    }

    private update = () => {
        if (this.needsUpdate) {
            this.renderer.render(this.scene, this.camera);
            console.log("UPDATE!!!")
        }
        
        requestAnimationFrame(this.update);
    }

    run() {
        this.state = GameState.PLAYING;
        this.update();
    }
}
