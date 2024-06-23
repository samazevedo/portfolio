precision highp float;

in vec3 position;
in vec2 uv;

out vec2 vUv;
out vec3 vColor;
uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform vec2 uResolution;
uniform sampler2D uImageTexture;

void main(){
    vUv = uv;
    // Final Position 
    vec4 modelPostion = modelViewMatrix * vec4(position, 1.0);
    vec4 viewPosition = modelViewMatrix * modelPostion;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;


    // image texture
    float pictureIntensity = texture(uImageTexture, uv).r;

    // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    // // point size
    gl_PointSize = 1.5 * pictureIntensity * uResolution.y;
    gl_PointSize *= (1.0 / -viewPosition.z);

    // // out colors
    vColor = vec3(pow(pictureIntensity, 2.0));


}