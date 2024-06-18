precision highp float;

uniform sampler2D uTexture;
uniform vec3 uMouse;
uniform float uTime;

in vec2 vUv; 
out vec4 fragColor;

void main(){
    fragColor = vec4( vUv, 0.5+0.5 * sin(uTime), 0.3);
}
