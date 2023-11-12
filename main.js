import * as THREE from './node_modules/three/build/three.module.js';
import { OrbitControls } from './OrbitControls.js';
import { GLTFLoader } from './GLTFLoader.js';

// Your code here...
var scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd)
var camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 0.2, 3000);
camera.rotation.y = 45/180*Math.PI;
camera.position.x=-3
camera.position.y=3
camera.position.z=10

var renderer = new THREE.WebGLRenderer();
var controls = new OrbitControls(camera, renderer.domElement);
function render() {
    renderer.render( scene, camera );
}
controls.addEventListener('change',render)
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var ambientLight = new THREE.AmbientLight(0x404040, 100);
scene.add(ambientLight);

var directionalLight = new THREE.DirectionalLight(0xffffff,100);
directionalLight.position.set(0,1,0);
directionalLight.castShadow = true;
scene.add(directionalLight)

var light =new THREE.PointLight(0xc4c4c4, 10);
light.position.set(0,300,500)
scene.add(light)

var light2 = new THREE.PointLight(0xc4c4c4, 10);
light.position.set(500,100,0)
scene.add(light2);

var light3 = new THREE.PointLight(0xc4c4c4, 10);
light.position.set(0,100,-500)
scene.add(light3);


var light4 = new THREE.PointLight(0xc4c4c4, 10);
light.position.set(-500,300,500)
scene.add(light4);
// Position the camera
// camera.position.z = 5;

// Load the GLTF model
var loader = new GLTFLoader();
loader.load('scene.gltf', function(gltf) {
    scene.add(gltf.scene);
}, undefined, function(error) {
    console.error(error);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();