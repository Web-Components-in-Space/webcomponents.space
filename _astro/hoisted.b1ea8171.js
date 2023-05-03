import"./Header.astro_astro_type_script_index_0_lang.eec05685.js";let r=document.getElementById("shader"),e=r?.getContext("webgl"),l=new Date().getTime()/1e3;r.width=window.innerWidth,r.height=window.innerHeight,e.viewport(0,0,r.width,r.height);let u=`
  attribute vec2 position;
  void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
  `,f=`
  precision mediump float;
  uniform vec2 resolution;
  uniform float time;

  vec3 glitchyColor(float value) {
  return vec3(
  value * (0.5 + 0.5 * sin(time * 4.0)),
  value * (0.5 + 0.5 * sin(time * 3.0 + 2.0)),
  value * (0.5 + 0.5 * sin(time * 2.0 + 4.0))
  );
}

  void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  float t = time * 0.5;

  float wave1 = sin(uv.x * 20.0 + t * 4.0);
  float wave2 = sin(uv.y * 30.0 + t * 3.0);
  float wave3 = sin((uv.x + uv.y) * 15.0 + t * 2.0);
  float waveSum = wave1 + wave2 + wave3;

  float finalValue = step(0.9, waveSum);

  vec3 bgColor = vec3(0.1, 0.1, 0.1);
  vec3 fgColor = glitchyColor(finalValue);

  gl_FragColor = vec4(mix(bgColor, fgColor, smoothstep(0.1, 0.9, finalValue)), 1.0);
}
  `;function i(t,a,m){let s=t.createShader(a);return t.shaderSource(s,m),t.compileShader(s),t.getShaderParameter(s,t.COMPILE_STATUS)?s:(console.error("An error occurred compiling the shaders:",t.getShaderInfoLog(s)),t.deleteShader(s),null)}let h=i(e,e.VERTEX_SHADER,u),g=i(e,e.FRAGMENT_SHADER,f),o=e.createProgram();e.attachShader(o,h),e.attachShader(o,g),e.linkProgram(o),e.getProgramParameter(o,e.LINK_STATUS)||console.error("Unable to initialize the shader program:",e.getProgramInfoLog(o)),e.useProgram(o);let v=e.getUniformLocation(o,"time"),n=e.getAttribLocation(o,"position"),d=e.getUniformLocation(o,"resolution"),S=e.createBuffer();function c(){let t=new Date().getTime()/1e3-l;e.uniform1f(v,t),e.drawArrays(e.TRIANGLE_STRIP,0,4),requestAnimationFrame(c)}e.bindBuffer(e.ARRAY_BUFFER,S),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(n),e.vertexAttribPointer(n,2,e.FLOAT,!1,0,0),e.uniform2f(d,r.width,r.height),c();