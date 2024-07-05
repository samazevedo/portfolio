precision mediump float;

uniform mat4 viewMatrix;
uniform vec3 cameraPosition;

uniform sampler2D uTexture;
in vec2 vUv;
in vec3 vColor; // color intensity
uniform vec3 uColor;

out vec4 fragColor;


void main() {

    vec2 uv = gl_PointCoord;
    // float distanceToCenter = distance(uv, vec2(0.5));
    float distanceToCenter = length(uv - vec2(0.7));
    if(distanceToCenter > 0.5){
        discard;
    }

    // fragColor = vec4(vec3(distanceToCenter),1.0);
    fragColor = vec4(vColor * uColor , .3);
}