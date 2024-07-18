precision mediump float;

// default uniforms
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 normalMatrix;
uniform vec3 cameraPosition;

uniform sampler2D uTexture;
uniform vec2 uResolution;

in vec3 position;
in  vec3 normal;
in vec2 uv;
in vec2 ref;

out vec2 vUv;
out vec3 vNormal;
out vec3 vPosition;
out vec3 vColor;


void main() {
    vUv = uv;
    vNormal = normal;
    vPosition = position;

    // FINAL POSITION
    vec4 modelPosition =  modelMatrix * vec4(position,1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    // PICTURE
    // float pictureIntensity = texture(uTexture, uv).r;
    float pictureIntensity = texture(uTexture,  uv).r;
    // send pictureintensity to fragment
    vColor = vec3(pow(pictureIntensity,2.0));

    // POINT SIZE
    gl_PointSize = .005 *  pictureIntensity * uResolution.y;
    gl_PointSize *= (1.0 / -viewPosition.z);

}