precision mediump float;

// input from the vertex shader
in vec2 vUv;
// uniforms
uniform mat4 viewMatrix;
uniform vec3 cameraPosition;


uniform sampler2D uTexture; // assuming a texture is applied
uniform vec3 uColor;
uniform float uTime; // uniform for time-based effects
uniform vec2 uResolution;

// output color 
out vec4 fragColor;


void main() {

    // normalize UV coord
    vec2 uv = normalize(vUv * uResolution);

   // Create a time-based function to animate the color
    float r = sin(uTime + uv.x * 10.0) * 0.5 + 0.5;
    float g = sin(uTime + uv.y * 10.0) * 0.5 + 0.5;
    float b = sin(uTime + (uv.x + uv.y) * 10.0) * 0.5 + 0.5;

    // combine the RGB VALUES
    vec3 color = vec3(r,g,b);

    // vec3 color = texture(uTexture, uv).rgb; // use texture as color





    fragColor = vec4(color, .9);

}