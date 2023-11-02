			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
			
			const container = document.getElementById( 'canvas' );
			
			
			
			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
			const controls = new OrbitControls(camera, renderer.domElement);
			controls.enableDamping = true;

			// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })

			const objLoader = new OBJLoader()
			objLoader.load(
    		'tinker-3.obj',
    		(object) => {
        		// (object.children[0] as THREE.Mesh).material = material
        		// object.traverse(function (child) {
        	//     if ((child as THREE.Mesh).isMesh) {
        	//         (child as THREE.Mesh).material = material
        	//     }
        	// })
        	scene.add(object)
    		},
    		(xhr) => {
        	console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    		},
    		(error) => {
        	console.log(error)
    		}
			)
			

			camera.position.z = 5;

			function animate() {
    		requestAnimationFrame(animate)

    		controls.update()

    		render()
			}

			function render() {
    		renderer.render(scene, camera)
			}

			animate()