precision mediump float;

// input from the vertex shader
in vec2 vUv;
// uniforms
uniform mat4 viewMatrix;
uniform vec3 cameraPosition;

uniform sampler2D uTexture; // assuming a texture is applied
uniform vec3 uColor;
uniform float uTime; // uniform for time-based effects

// output color 
out vec4 fragColor;


// create hexagonal pattern
float hexagon(vec2 p){
    p = abs(p);
    return max(dot(p, vec2(0.8660254, 1.5)), p.y) - .07;
}

void main() {
    // texture color
    // vec2 uv = vUv;
    vec2 uv = vUv * 30.0;
    float h = hexagon(fract(uv-0.5) - 0.5);
    // vec3 color = texture(uTexture, uv).rgb;
    vec3 color = uColor;
    vec3 col = mix(vec3(0.1), color, smoothstep(0.0,0.01,h));

    fragColor = vec4(col, .5);

}