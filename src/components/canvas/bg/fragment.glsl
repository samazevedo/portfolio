precision highp float;

// input from the vertex shader
in vec2 vUv;
in vec3 vNormal;
in vec3 vPosition;

// uniforms
uniform vec3 uColor;
uniform float uTime; // uniform for time-based effects
uniform vec2 uResolution;
uniform vec3 uMouse;
uniform vec3 lightPosition;
uniform float metalness;
uniform float roughness;
uniform vec3 cameraPosition;



// output color 
out vec4 fragColor;


float random (in vec2 _st){
    return fract(sin(dot(_st.xy, vec2(12.9898,78.233)))* 43758.5453123);
}

float noise (in vec2 _st) {
    vec2 i = floor(_st);
    vec2 f = fract(_st);

    // 4 corners in 2d of tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(1.0,1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f * f *f);
    return mix(a,b,u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

// Fractal Brownian Motion

#define NUM_OCTAVES 8
float fbm (in vec2 _st) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);

    // rotate to reduce axial bias
    mat2 rot = mat2(cos(.5), sin(1.0), -sin(.7), cos(.50));

    for (int i = 0; i < NUM_OCTAVES; ++i){
        v += a * noise(_st);
        _st = rot * _st * 3.0 + shift;
        a *= 0.5;
    }
    return v;
}


void main() {

    vec2 st = gl_FragCoord.xy / uResolution.xy * 10.0;
    vec3 color = vec3(0.0);
  
    // Base FBM noise
    vec2  q = vec2(0.0);
    q.x = fbm(st + 0.10 * uTime);
    q.y = fbm(st + vec2(1.0));

    vec2 r = vec2(0.0);
    r.x = fbm(st + 1.0 * q + vec2(1.7, .2) + 0.15 * uTime  );
    r.y = fbm(st + 1.0 * q + vec2(0.3,2.8) + 0.126 * uTime );

    float f = fbm(st + r );
    // // Define the two colors
    vec3 darkPurpleGray = vec3(0.2, 0.1, 0.2); // Dark purple-gray
    vec3 darkBlue = vec3(0.1, 0.1, 0.4);       // Dark blue
    vec3 orange = vec3(1.0,0.522, 0.322);
    vec3 greenT = vec3(0.208, 1.0, 0.412);

    // // Use noise value 'f' to blend between the two colors
    color = mix(darkPurpleGray, darkBlue, clamp(f * 1.0, 0.0, 1.0));

    // // color = mix(vec3(0.9,0.01,0.1),vec3(.25,0.21,0.2), clamp((f)*1.0,0.0,1.0));



    fragColor = vec4( color *f *f ,1.);
}
