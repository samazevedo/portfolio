precision mediump float;
precision mediump int;

// standar attributes 
in vec3 position;
in vec2 uv;
// output to the fragment shader
out vec2 vUv;

// stardard uniforms used for transforming the vertices
uniform mat4 modelViewmatrix;
uniform mat4 projectionMatrix;


void main(){
    vUv = uv;

    gl_Position = projectionMatrix * modelViewmatrix * vec4(position, 1.0);

}