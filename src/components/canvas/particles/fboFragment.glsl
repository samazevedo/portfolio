precision highp float;

uniform sampler2D uTexture;
uniform vec3 uMouse;
uniform float uTime;

in vec2 vUv; 
in vec3 vColor;
out vec4 fragColor;

void main(){
    vec2 uv = gl_PointCoord;
    float distanceToCenter = distance(uv, vec2(0.5));

    if(distanceToCenter > 0.5)
        discard;
    // fragColor = vec4( vec3(distanceToCenter), 0.3);
    fragColor = vec4( vColor, 0.9);
}
