// This is where stuff in our game will happen: 
var scene = new THREE.Scene();

// This is what sees the stuff:
var aspect_ratio = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspect_ratio, 1, 10000); 
camera.position.z = 400;
scene.add(camera);

// This will draw what the camera sees onto the screen: 
var renderer = new THREE.CanvasRenderer(); 
renderer.setSize(window.innerWidth, window.innerHeight); 
document.body.appendChild(renderer.domElement);


// Code for game begins here
var shape = new THREE.PlaneGeometry(300, 100);
var cover = new THREE.MeshNormalMaterial();
var ground = new THREE.Mesh(shape, cover);
scene.add(ground);
ground.position.set(-250, -250, -250);
//plane.material.color.setHex();


var clock = new THREE.Clock(); 

function animate() {
requestAnimationFrame(animate); 
var t = clock.getElapsedTime();

ground.rotation.set(t, 2*t, 0); 
renderer.render(scene, camera);

}
animate();

// Now, show what the camera sees on the screen: 
renderer.render(scene, camera);
