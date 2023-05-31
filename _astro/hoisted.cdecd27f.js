let i,e,s,l,c,u;import"./Header.astro_astro_type_script_index_0_lang.eec05685.js";function f(){i=document.getElementById("shader"),e=i?.getContext("webgl"),u=new Date().getTime()/1e3,i.width=window.innerWidth,i.height=window.innerHeight,e.viewport(0,0,i.width,i.height);let t=`
          attribute vec2 position;
          void main() {
              gl_Position = vec4(position, 0.0, 1.0);
            }
          `,r=`
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
  `,o=m(e,e.VERTEX_SHADER,t),a=m(e,e.FRAGMENT_SHADER,r),n=e.createProgram();e.attachShader(n,o),e.attachShader(n,a),e.linkProgram(n),e.getProgramParameter(n,e.LINK_STATUS)||console.error("Unable to initialize the shader program:",e.getProgramInfoLog(n)),e.useProgram(n),s=e.getUniformLocation(n,"time"),l=e.getAttribLocation(n,"position"),c=e.getUniformLocation(n,"resolution");let g=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(l),e.vertexAttribPointer(l,2,e.FLOAT,!1,0,0),e.uniform2f(c,i.width,i.height)}function d(){let t=new Date().getTime()/1e3-u;e.uniform1f(s,t),e.drawArrays(e.TRIANGLE_STRIP,0,4),requestAnimationFrame(d)}function m(t,r,o){let a=t.createShader(r);return t.shaderSource(a,o),t.compileShader(a),t.getShaderParameter(a,t.COMPILE_STATUS)?a:(console.error("An error occurred compiling the shaders:",t.getShaderInfoLog(a)),t.deleteShader(a),null)}f(),d(),window.addEventListener("resize",()=>{f()});