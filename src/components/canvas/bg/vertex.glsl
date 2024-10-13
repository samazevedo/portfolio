precision highp float;
precision highp int;

// standard attributes 
in vec3 position;
in vec2 uv;
in vec3 normal;

// output to the fragment shader
out vec2 vUv;
out vec3 vNormal;
out vec3 vPosition;

// standard uniforms for transforming vertices
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat3 normalMatrix;
uniform vec3 cameraPosition;

uniform sampler2D uTexture;
uniform vec2 uResolution;

void main(){
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;

    // FINAL POSITION
    vec4 modelPosition =  modelMatrix * vec4(position,1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
}
