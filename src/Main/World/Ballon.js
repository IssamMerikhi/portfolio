import Main from "../Main";
import * as THREE from 'three'
import CANNON from 'cannon'

export default class Ballon
{
    constructor(position, diametre, texture, metalness)
    {
        this.main = new Main()
        this.scene = this.main.scene
        this.resources = this.main.resources
        this.diametre = diametre
        this.position = position
        this.metalness = metalness

        if (texture == "ballon")
        {
            this.resource = this.resources.items.ballon
        }

        else if (texture == "pokeball")
        {
            this.resource = this.resources.items.pokeball
        }

        else if (texture == "basketball")
        {
            this.resource = this.resources.items.basketball
        }

        else if (texture == "dbz1")
        {
            this.resource = this.resources.items.dbz1
        }
        
        this.createBall()
    }

    setMaterial()
    {

        
        this.material = new THREE.MeshStandardMaterial({ 
            metalness: this.metalness,
            roughness: 0.4,
            map: this.resource 
        })
        
        // if (texture == "ballon")
        // {
        //     this.material = new THREE.MeshStandardMaterial(
        //         {
        //             // metalness: 0.3,
        //             // roughness: 0.4,
        //             // color : 0xF7F3E7,
        //             map: this.resource
        //         })
        // }

        // if (texture == "pokeball")
        // {
        //     this.material = new THREE.MeshStandardMaterial(
        //         {
        //             metalness: 0.3,
        //             roughness: 0.4,
        //             map: this.resource
        //         })
        // }
    }


    setGeometry()
    {
        this.geometry = new THREE.SphereBufferGeometry(this.diametre, 20, 20)
    }





    setMesh()
    {
        this.meshBallon = new THREE.Mesh(this.geometry, this.material)
        this.meshBallon.rotation.x = - Math.PI * 0.5
        this.meshBallon.castShadow = true
        this.meshBallon.name = "ball"
        this.scene.add(this.meshBallon)
    }




    setShape()
    {
        this.shape = new CANNON.Sphere(this.diametre)

    }

    setBody()
    {
        this.body = new CANNON.Body({
                mass:0.8,
                shape:this.shape,
                linearDamping:0.1,
                
            })
            
        this.main.physics.world.addBody(this.body)


    }

    createBall()
    {
        this.setGeometry()
        this.setMaterial()
        this.setMesh()

        this.setShape()
        this.setBody()
        this.body.position = new CANNON.Vec3(this.position[0],this.position[1], this.position[2])
    }

    update()
    {
        this.meshBallon.position.copy(this.body.position)  
        
    }
}