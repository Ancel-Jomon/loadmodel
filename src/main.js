import * as THREE from "three";
//import * as fbx2gltf from "fbx2gltf"
import { GLTFLoader, OrbitControls } from "three/examples/jsm/Addons.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const h = window.innerHeight;
const w = window.innerWidth;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);

document.body.appendChild(renderer.domElement);
const fov = 75;
const asratio = w / h;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, asratio, near, far);
camera.position.z = 3;
camera.position.y=2

const scene = new THREE.Scene();
const controls = new OrbitControls(camera, renderer.domElement);

scene.background = new THREE.Color("rgb(255, 255, 255)");

// const light = new THREE.PointLight(0xffffff, 50);
// light.position.set(0.8, 1.4, 1.0);
// scene.add(light);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const dirlight=new THREE.DirectionalLight("rgb(255, 255, 255)",1)
scene.add(dirlight)


const gltfloader = new GLTFLoader();


gltfloader.load("assets/bian.glb",(gltf)=>{scene.add(gltf.scene)})

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}
animate();
