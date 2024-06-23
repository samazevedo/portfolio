precision highp float;

uniform sampler2D uMatcap;
uniform vec3 uMouse;
uniform float uTime;


in vec2 vUv; 
in vec3 vNormal;

out vec4 fragColor;

void main(){

    vec3 normal = normalize(vNormal);
    vec2 uv = normal.xy * 0.5 + 0.5; // convert normal to UV coordinates
    vec3 matcapColor = texture(uMatcap, uv).rgb;

    fragColor = vec4( matcapColor, 1.0);
}
