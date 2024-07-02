precision mediump float;

// input from the vertex shader
in vec2 vUv;
// uniforms
uniform sampler2D uTexture; // assuming a texture is applied
uniform float uTime; // uniform for time-based effects

// output color 
out vec4 fragColor;

void main() {
    // texture color
    vec4 color = texture(uTexture, vUv);

    // modulate the texture color  w the lighting intensity
    fragColor = color;

}