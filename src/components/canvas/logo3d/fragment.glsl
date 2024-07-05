precision mediump float;

// input from the vertex shader
in vec2 vUv;
// uniforms
uniform mat4 viewMatrix;
uniform vec3 cameraPosition;

uniform sampler2D uTexture; // assuming a texture is applied
uniform float uTime; // uniform for time-based effects

// output color 
out vec4 fragColor;

void main() {
    // texture color
    vec2 uv = vUv;
    uv.y += sin(uv.x * 10.0 + uTime * 2.0) * 0.1;
    uv.x += sin(uv.y * 10.0 + uTime * 2.0) * 0.1;
    vec3 color = texture(uTexture, uv).rgb;



    fragColor = vec4(color, 1.0);

}