// import Main from "../Main";
// import * as THREE from 'three'
// import CANNON from 'cannon'


// export default class Floor2
// {
//     constructor()
//     {
//         this.main = new Main()
//         this.scene = this.main.scene
//         this.resources = this.main.resources

//         this.setGeometry()
//         this.setMaterial()
//         this.setMesh()

//         this.setShape()
//         this.setBody()
//     }

//     setGeometry()
//     {
//         this.geometry = new THREE.PlaneBufferGeometry(300, 300)
//     }

//     setMaterial()
//     {
//         this.material = new THREE.MeshStandardMaterial({
//                     color: '#ffffff',
//                     metalness: 0,
//                     roughness: 0.5
//                 })
//     }

//     setMesh()
//     {
//         this.mesh = new THREE.Mesh(this.geometry, this.material)
//         this.mesh.rotation.x = - Math.PI * 0.5
//         this.mesh.receiveShadow = true
//         this.mesh.position.y=0.2
//         this.mesh.position.x = -200
//         this.mesh.position.z = 300
//         this.scene.add(this.mesh)
//     }

//     setShape()
//     {
//         this.floorShape = new CANNON.Plane()
//     }

//     setBody()
//     {
//         this.floorBody = new CANNON.Body({
//             mass: 0,
//             shape: this.floorShape,
//         })
//         this.floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(-1, 0, 0), Math.PI * 0.5)
//         this.main.physics.world.addBody(this.floorBody)
//     }
// }