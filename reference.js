			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
			
			const container = document.getElementById( 'canvas' );
			
			const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: container });
			renderer.setPixelRatio( window.devicePixelRatio );
			renderer.setSize( canvas.clientWidth, canvas.clientWidth );
			scene.background = new THREE.Color( 0xffffff );

			document.body.appendChild( renderer.domElement );

			const geometry = new THREE.BoxGeometry( 1, 1, 1 );
			const material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );
			
			
			camera.position.z = 5;

			function animate() {
				requestAnimationFrame( animate );
				
				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();