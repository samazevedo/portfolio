precision highp float;

in vec3 position;
in vec2 uv;

out vec2 vUv;
out vec3 vColor;
uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform vec2 uResolution;
uniform sampler2D uTexture;
uniform sampler2D uDisplacement;

void main(){
    vUv = uv;

    // Final Position 
    // vec4 modelPostion = modelViewMatrix * vec4(position, 1.0);
    // vec4 viewPosition = modelViewMatrix * modelPostion;
    // vec4 projectedPosition = projectionMatrix * viewPosition;
    // gl_Position = projectedPosition;

    vec4 displacedPosition = texture(uDisplacement, uv);
    vec3 finalPosition = position + displacedPosition.xyz;
    vec4 modelPosition = modelViewMatrix * vec4(finalPosition, 1.0);
    vec4 viewPosition = modelViewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;



    // image texture
    float pictureIntensity = texture(uTexture, uv).r;
    // // point size
    gl_PointSize = 1.5 * pictureIntensity * uResolution.y;
    gl_PointSize *= (1.0 / -gl_Position.z);

    // // out colors
    vColor = vec3(pow(pictureIntensity, 3.0));


}