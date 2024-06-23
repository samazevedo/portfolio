precision highp float;

in vec3 position;
in vec2 uv;
in vec3 normal;

out vec2 vUv;
out vec3 vNormal;


uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat3 normalMatrix;

void main(){
    vUv = uv;
    vNormal = normalize(normalMatrix * normal); // normal in camera space
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}