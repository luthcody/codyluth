import React, { Component } from 'react';
//import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';
//import { OBJLoader } from 'three-obj-mtl-loader';

import './Example.css';
import * as model from './wave_v15.glb';

class Example extends Component {
  componentDidMount() {
    // var scene = new Scene();
    // var camera = new PerspectiveCamera( 75, 940/705, 0.01, 1000 );

    // var renderer = new WebGLRenderer();
    // renderer.setSize( 940, 705 );
    // this.mount.appendChild( renderer.domElement );

    // var sceneModel;
    // var loader = new OBJLoader();
    // loader.load( model, function ( gltf ) {
    //   sceneModel = gltf.scene;
    //   scene.add(sceneModel);
    // }, undefined, function (error) {
    //   console.error("Broken");
    // });

    // camera.position.z = 0.1;

    // var animate = function () {
    //   requestAnimationFrame( animate );
    //   if (sceneModel) sceneModel.rotation.y += 0.01;
    //   renderer.render( scene, camera );
    // };

    // animate();
  };
  
  render() {
    return (
      <div className="threejswindow">
        {/* <div ref={ref => (this.mount = ref)} /> */}
      </div>
    );
  }
}

export default Example;
