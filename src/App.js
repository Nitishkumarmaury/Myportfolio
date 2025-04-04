import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// SplashScreen Component: Reveals your name letter by letter.
const SplashScreen = ({ onFinish }) => {
  const name = "Nitish Kumar";
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // delay between each letter
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const totalDuration = name.length * 0.3 + 1.5; // reveal time + extra pause
    const timer = setTimeout(() => onFinish(), totalDuration * 1000);
    return () => clearTimeout(timer);
  }, [name.length, onFinish]);

  return (
    <motion.div
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div
        className="flex space-x-1 select-none"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ fontFamily: "'Cursive', sans-serif" }}
      >
        {name.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-600"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

// CloudPetals Component: Renders falling cloud emojis.
const CloudPetals = () => {
  const clouds = Array.from({ length: 10 }, (_, i) => i);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {clouds.map((_, index) => {
        const randomX = Math.random() * width;
        const randomDelay = Math.random() * 0.5;
        const randomDuration = 3 + Math.random() * 2;
        const randomRotation = Math.random() * 360;
        return (
          <motion.div
            key={index}
            className="absolute text-3xl"
            style={{ left: randomX }}
            initial={{ y: -50, opacity: 0, rotate: randomRotation }}
            animate={{
              y: "110vh",
              opacity: [0, 1, 1, 0],
              rotate: randomRotation + 360,
            }}
            transition={{
              duration: randomDuration,
              ease: "easeIn",
              delay: randomDelay,
            }}
          >
            
          </motion.div>
        );
      })}
    </div>
  );
};

// CloudPetalRain Component: Triggers the cloud rain after 1 second of mouse inactivity.
const CloudPetalRain = () => {
  const [showRain, setShowRain] = useState(false);
  const timerRef = useRef(null);

  const handleMouseMove = () => {
    setShowRain(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setShowRain(true), 1000);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return <AnimatePresence>{showRain && <CloudPetals />}</AnimatePresence>;
};

// SplashCursor Component: Implements a splash cursor effect.
// This is a simplified version using Framer Motion.
// On mouse move, a circle appears at the cursor and quickly fades and scales.

function SplashCursor({
  // Add whatever props you like for customization
  SIM_RESOLUTION = 128,
  DYE_RESOLUTION = 1440,
  CAPTURE_RESOLUTION = 512,
  DENSITY_DISSIPATION = 3.5,
  VELOCITY_DISSIPATION = 2,
  PRESSURE = 0.1,
  PRESSURE_ITERATIONS = 20,
  CURL = 3,
  SPLAT_RADIUS = 0.2,
  SPLAT_FORCE = 6000,
  SHADING = true,
  COLOR_UPDATE_SPEED = 10,
  BACK_COLOR = { r: 0.5, g: 0, b: 0 },
  TRANSPARENT = true,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function pointerPrototype() {
      this.id = -1;
      this.texcoordX = 0;
      this.texcoordY = 0;
      this.prevTexcoordX = 0;
      this.prevTexcoordY = 0;
      this.deltaX = 0;
      this.deltaY = 0;
      this.down = false;
      this.moved = false;
      this.color = [0, 0, 0];
    }

    let config = {
      SIM_RESOLUTION,
      DYE_RESOLUTION,
      CAPTURE_RESOLUTION,
      DENSITY_DISSIPATION,
      VELOCITY_DISSIPATION,
      PRESSURE,
      PRESSURE_ITERATIONS,
      CURL,
      SPLAT_RADIUS,
      SPLAT_FORCE,
      SHADING,
      COLOR_UPDATE_SPEED,
      PAUSED: false,
      BACK_COLOR,
      TRANSPARENT,
    };

    let pointers = [new pointerPrototype()];

    const { gl, ext } = getWebGLContext(canvas);
    if (!ext.supportLinearFiltering) {
      config.DYE_RESOLUTION = 256;
      config.SHADING = false;
    }

    function getWebGLContext(canvas) {
      const params = {
        alpha: true,
        depth: false,
        stencil: false,
        antialias: false,
        preserveDrawingBuffer: false,
      };
      let gl = canvas.getContext("webgl2", params);
      const isWebGL2 = !!gl;
      if (!isWebGL2)
        gl =
          canvas.getContext("webgl", params) ||
          canvas.getContext("experimental-webgl", params);
      let halfFloat;
      let supportLinearFiltering;
      if (isWebGL2) {
        gl.getExtension("EXT_color_buffer_float");
        supportLinearFiltering = gl.getExtension("OES_texture_float_linear");
      } else {
        halfFloat = gl.getExtension("OES_texture_half_float");
        supportLinearFiltering = gl.getExtension(
          "OES_texture_half_float_linear"
        );
      }
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      const halfFloatTexType = isWebGL2
        ? gl.HALF_FLOAT
        : halfFloat && halfFloat.HALF_FLOAT_OES;
      let formatRGBA;
      let formatRG;
      let formatR;

      if (isWebGL2) {
        formatRGBA = getSupportedFormat(
          gl,
          gl.RGBA16F,
          gl.RGBA,
          halfFloatTexType
        );
        formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType);
        formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType);
      } else {
        formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
        formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
        formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
      }

      return {
        gl,
        ext: {
          formatRGBA,
          formatRG,
          formatR,
          halfFloatTexType,
          supportLinearFiltering,
        },
      };
    }

    function getSupportedFormat(gl, internalFormat, format, type) {
      if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
        switch (internalFormat) {
          case gl.R16F:
            return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
          case gl.RG16F:
            return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
          default:
            return null;
        }
      }
      return {
        internalFormat,
        format,
      };
    }

    function supportRenderTextureFormat(gl, internalFormat, format, type) {
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        internalFormat,
        4,
        4,
        0,
        format,
        type,
        null
      );
      const fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        texture,
        0
      );
      const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
      return status === gl.FRAMEBUFFER_COMPLETE;
    }

    class Material {
      constructor(vertexShader, fragmentShaderSource) {
        this.vertexShader = vertexShader;
        this.fragmentShaderSource = fragmentShaderSource;
        this.programs = [];
        this.activeProgram = null;
        this.uniforms = [];
      }
      setKeywords(keywords) {
        let hash = 0;
        for (let i = 0; i < keywords.length; i++) hash += hashCode(keywords[i]);
        let program = this.programs[hash];
        if (program == null) {
          let fragmentShader = compileShader(
            gl.FRAGMENT_SHADER,
            this.fragmentShaderSource,
            keywords
          );
          program = createProgram(this.vertexShader, fragmentShader);
          this.programs[hash] = program;
        }
        if (program === this.activeProgram) return;
        this.uniforms = getUniforms(program);
        this.activeProgram = program;
      }
      bind() {
        gl.useProgram(this.activeProgram);
      }
    }

    class Program {
      constructor(vertexShader, fragmentShader) {
        this.uniforms = {};
        this.program = createProgram(vertexShader, fragmentShader);
        this.uniforms = getUniforms(this.program);
      }
      bind() {
        gl.useProgram(this.program);
      }
    }

    function createProgram(vertexShader, fragmentShader) {
      let program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS))
        console.trace(gl.getProgramInfoLog(program));
      return program;
    }

    function getUniforms(program) {
      let uniforms = [];
      let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
      for (let i = 0; i < uniformCount; i++) {
        let uniformName = gl.getActiveUniform(program, i).name;
        uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
      }
      return uniforms;
    }

    function compileShader(type, source, keywords) {
      source = addKeywords(source, keywords);
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
        console.trace(gl.getShaderInfoLog(shader));
      return shader;
    }

    function addKeywords(source, keywords) {
      if (!keywords) return source;
      let keywordsString = "";
      keywords.forEach((keyword) => {
        keywordsString += "#define " + keyword + "";
      });
      return keywordsString + source;
    }

    const baseVertexShader = compileShader(
      gl.VERTEX_SHADER,
      `
        precision highp float;
        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform vec2 texelSize;

        void main () {
            vUv = aPosition * 0.5 + 0.5;
            vL = vUv - vec2(texelSize.x, 0.0);
            vR = vUv + vec2(texelSize.x, 0.0);
            vT = vUv + vec2(0.0, texelSize.y);
            vB = vUv - vec2(0.0, texelSize.y);
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
      `
    );

    const copyShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
      `
    );

    const clearShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
     `
    );

    const displayShaderSource = `
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;

      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
              vec3 lc = texture2D(uTexture, vL).rgb;
              vec3 rc = texture2D(uTexture, vR).rgb;
              vec3 tc = texture2D(uTexture, vT).rgb;
              vec3 bc = texture2D(uTexture, vB).rgb;

              float dx = length(rc) - length(lc);
              float dy = length(tc) - length(bc);

              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);

              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              c *= diffuse;
          #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `;

    const splatShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uTarget;
        uniform float aspectRatio;
        uniform vec3 color;
        uniform vec2 point;
        uniform float radius;

        void main () {
            vec2 p = vUv - point.xy;
            p.x *= aspectRatio;
            vec3 splat = exp(-dot(p, p) / radius) * color;
            vec3 base = texture2D(uTarget, vUv).xyz;
            gl_FragColor = vec4(base + splat, 1.0);
        }
      `
    );

    const advectionShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform vec2 dyeTexelSize;
        uniform float dt;
        uniform float dissipation;

        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
            vec2 st = uv / tsize - 0.5;
            vec2 iuv = floor(st);
            vec2 fuv = fract(st);

            vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
            vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
            vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
            vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

            return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
        }

        void main () {
            #ifdef MANUAL_FILTERING
                vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
                vec4 result = bilerp(uSource, coord, dyeTexelSize);
            #else
                vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
                vec4 result = texture2D(uSource, coord);
            #endif
            float decay = 1.0 + dissipation * dt;
            gl_FragColor = result / decay;
        }
      `,
      ext.supportLinearFiltering ? null : ["MANUAL_FILTERING"]
    );

    const divergenceShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).x;
            float R = texture2D(uVelocity, vR).x;
            float T = texture2D(uVelocity, vT).y;
            float B = texture2D(uVelocity, vB).y;

            vec2 C = texture2D(uVelocity, vUv).xy;
            if (vL.x < 0.0) { L = -C.x; }
            if (vR.x > 1.0) { R = -C.x; }
            if (vT.y > 1.0) { T = -C.y; }
            if (vB.y < 0.0) { B = -C.y; }

            float div = 0.5 * (R - L + T - B);
            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }
      `
    );

    const curlShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).y;
            float R = texture2D(uVelocity, vR).y;
            float T = texture2D(uVelocity, vT).x;
            float B = texture2D(uVelocity, vB).x;
            float vorticity = R - L - T + B;
            gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
        }
      `
    );

    const vorticityShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;
        uniform sampler2D uCurl;
        uniform float curl;
        uniform float dt;

        void main () {
            float L = texture2D(uCurl, vL).x;
            float R = texture2D(uCurl, vR).x;
            float T = texture2D(uCurl, vT).x;
            float B = texture2D(uCurl, vB).x;
            float C = texture2D(uCurl, vUv).x;

            vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
            force /= length(force) + 0.0001;
            force *= curl * C;
            force.y *= -1.0;

            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity += force * dt;
            velocity = min(max(velocity, -1000.0), 1000.0);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `
    );

    const pressureShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            float C = texture2D(uPressure, vUv).x;
            float divergence = texture2D(uDivergence, vUv).x;
            float pressure = (L + R + B + T - divergence) * 0.25;
            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
        }
      `
    );

    const gradientSubtractShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity.xy -= vec2(R - L, T - B);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `
    );

    const blit = (() => {
      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]),
        gl.STATIC_DRAW
      );
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(
        gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array([0, 1, 2, 0, 2, 3]),
        gl.STATIC_DRAW
      );
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(0);
      return (target, clear = false) => {
        if (target == null) {
          gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
          gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        } else {
          gl.viewport(0, 0, target.width, target.height);
          gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
        }
        if (clear) {
          gl.clearColor(0.0, 0.0, 0.0, 1.0);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
      };
    })();

    let dye, velocity, divergence, curl, pressure;

    const copyProgram = new Program(baseVertexShader, copyShader);
    const clearProgram = new Program(baseVertexShader, clearShader);
    const splatProgram = new Program(baseVertexShader, splatShader);
    const advectionProgram = new Program(baseVertexShader, advectionShader);
    const divergenceProgram = new Program(baseVertexShader, divergenceShader);
    const curlProgram = new Program(baseVertexShader, curlShader);
    const vorticityProgram = new Program(baseVertexShader, vorticityShader);
    const pressureProgram = new Program(baseVertexShader, pressureShader);
    const gradienSubtractProgram = new Program(
      baseVertexShader,
      gradientSubtractShader
    );
    const displayMaterial = new Material(baseVertexShader, displayShaderSource);

    function initFramebuffers() {
      let simRes = getResolution(config.SIM_RESOLUTION);
      let dyeRes = getResolution(config.DYE_RESOLUTION);
      const texType = ext.halfFloatTexType;
      const rgba = ext.formatRGBA;
      const rg = ext.formatRG;
      const r = ext.formatR;
      const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;
      gl.disable(gl.BLEND);

      if (!dye)
        dye = createDoubleFBO(
          dyeRes.width,
          dyeRes.height,
          rgba.internalFormat,
          rgba.format,
          texType,
          filtering
        );
      else
        dye = resizeDoubleFBO(
          dye,
          dyeRes.width,
          dyeRes.height,
          rgba.internalFormat,
          rgba.format,
          texType,
          filtering
        );

      if (!velocity)
        velocity = createDoubleFBO(
          simRes.width,
          simRes.height,
          rg.internalFormat,
          rg.format,
          texType,
          filtering
        );
      else
        velocity = resizeDoubleFBO(
          velocity,
          simRes.width,
          simRes.height,
          rg.internalFormat,
          rg.format,
          texType,
          filtering
        );

      divergence = createFBO(
        simRes.width,
        simRes.height,
        r.internalFormat,
        r.format,
        texType,
        gl.NEAREST
      );
      curl = createFBO(
        simRes.width,
        simRes.height,
        r.internalFormat,
        r.format,
        texType,
        gl.NEAREST
      );
      pressure = createDoubleFBO(
        simRes.width,
        simRes.height,
        r.internalFormat,
        r.format,
        texType,
        gl.NEAREST
      );
    }

    function createFBO(w, h, internalFormat, format, type, param) {
      gl.activeTexture(gl.TEXTURE0);
      let texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        internalFormat,
        w,
        h,
        0,
        format,
        type,
        null
      );

      let fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        texture,
        0
      );
      gl.viewport(0, 0, w, h);
      gl.clear(gl.COLOR_BUFFER_BIT);

      let texelSizeX = 1.0 / w;
      let texelSizeY = 1.0 / h;
      return {
        texture,
        fbo,
        width: w,
        height: h,
        texelSizeX,
        texelSizeY,
        attach(id) {
          gl.activeTexture(gl.TEXTURE0 + id);
          gl.bindTexture(gl.TEXTURE_2D, texture);
          return id;
        },
      };
    }

    function createDoubleFBO(w, h, internalFormat, format, type, param) {
      let fbo1 = createFBO(w, h, internalFormat, format, type, param);
      let fbo2 = createFBO(w, h, internalFormat, format, type, param);
      return {
        width: w,
        height: h,
        texelSizeX: fbo1.texelSizeX,
        texelSizeY: fbo1.texelSizeY,
        get read() {
          return fbo1;
        },
        set read(value) {
          fbo1 = value;
        },
        get write() {
          return fbo2;
        },
        set write(value) {
          fbo2 = value;
        },
        swap() {
          let temp = fbo1;
          fbo1 = fbo2;
          fbo2 = temp;
        },
      };
    }

    function resizeFBO(target, w, h, internalFormat, format, type, param) {
      let newFBO = createFBO(w, h, internalFormat, format, type, param);
      copyProgram.bind();
      gl.uniform1i(copyProgram.uniforms.uTexture, target.attach(0));
      blit(newFBO);
      return newFBO;
    }

    function resizeDoubleFBO(
      target,
      w,
      h,
      internalFormat,
      format,
      type,
      param
    ) {
      if (target.width === w && target.height === h) return target;
      target.read = resizeFBO(
        target.read,
        w,
        h,
        internalFormat,
        format,
        type,
        param
      );
      target.write = createFBO(w, h, internalFormat, format, type, param);
      target.width = w;
      target.height = h;
      target.texelSizeX = 1.0 / w;
      target.texelSizeY = 1.0 / h;
      return target;
    }

    function updateKeywords() {
      let displayKeywords = [];
      if (config.SHADING) displayKeywords.push("SHADING");
      displayMaterial.setKeywords(displayKeywords);
    }

    updateKeywords();
    initFramebuffers();
    let lastUpdateTime = Date.now();
    let colorUpdateTimer = 0.0;

    function updateFrame() {
      const dt = calcDeltaTime();
      if (resizeCanvas()) initFramebuffers();
      updateColors(dt);
      applyInputs();
      step(dt);
      render(null);
      requestAnimationFrame(updateFrame);
    }

    function calcDeltaTime() {
      let now = Date.now();
      let dt = (now - lastUpdateTime) / 1000;
      dt = Math.min(dt, 0.016666);
      lastUpdateTime = now;
      return dt;
    }

    function resizeCanvas() {
      let width = scaleByPixelRatio(canvas.clientWidth);
      let height = scaleByPixelRatio(canvas.clientHeight);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        return true;
      }
      return false;
    }

    function updateColors(dt) {
      colorUpdateTimer += dt * config.COLOR_UPDATE_SPEED;
      if (colorUpdateTimer >= 1) {
        colorUpdateTimer = wrap(colorUpdateTimer, 0, 1);
        pointers.forEach((p) => {
          p.color = generateColor();
        });
      }
    }

    function applyInputs() {
      pointers.forEach((p) => {
        if (p.moved) {
          p.moved = false;
          splatPointer(p);
        }
      });
    }

    function step(dt) {
      gl.disable(gl.BLEND);
      // Curl
      curlProgram.bind();
      gl.uniform2f(
        curlProgram.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY
      );
      gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
      blit(curl);

      // Vorticity
      vorticityProgram.bind();
      gl.uniform2f(
        vorticityProgram.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY
      );
      gl.uniform1i(
        vorticityProgram.uniforms.uVelocity,
        velocity.read.attach(0)
      );
      gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1));
      gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
      gl.uniform1f(vorticityProgram.uniforms.dt, dt);
      blit(velocity.write);
      velocity.swap();

      // Divergence
      divergenceProgram.bind();
      gl.uniform2f(
        divergenceProgram.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY
      );
      gl.uniform1i(
        divergenceProgram.uniforms.uVelocity,
        velocity.read.attach(0)
      );
      blit(divergence);

      // Clear pressure
      clearProgram.bind();
      gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));
      gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE);
      blit(pressure.write);
      pressure.swap();

      // Pressure
      pressureProgram.bind();
      gl.uniform2f(
        pressureProgram.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY
      );
      gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
      for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
        gl.uniform1i(
          pressureProgram.uniforms.uPressure,
          pressure.read.attach(1)
        );
        blit(pressure.write);
        pressure.swap();
      }

      // Gradient Subtract
      gradienSubtractProgram.bind();
      gl.uniform2f(
        gradienSubtractProgram.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY
      );
      gl.uniform1i(
        gradienSubtractProgram.uniforms.uPressure,
        pressure.read.attach(0)
      );
      gl.uniform1i(
        gradienSubtractProgram.uniforms.uVelocity,
        velocity.read.attach(1)
      );
      blit(velocity.write);
      velocity.swap();

      // Advection
      advectionProgram.bind();
      gl.uniform2f(
        advectionProgram.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY
      );
      if (!ext.supportLinearFiltering)
        gl.uniform2f(
          advectionProgram.uniforms.dyeTexelSize,
          velocity.texelSizeX,
          velocity.texelSizeY
        );
      let velocityId = velocity.read.attach(0);
      gl.uniform1i(advectionProgram.uniforms.uVelocity, velocityId);
      gl.uniform1i(advectionProgram.uniforms.uSource, velocityId);
      gl.uniform1f(advectionProgram.uniforms.dt, dt);
      gl.uniform1f(
        advectionProgram.uniforms.dissipation,
        config.VELOCITY_DISSIPATION
      );
      blit(velocity.write);
      velocity.swap();

      if (!ext.supportLinearFiltering)
        gl.uniform2f(
          advectionProgram.uniforms.dyeTexelSize,
          dye.texelSizeX,
          dye.texelSizeY
        );
      gl.uniform1i(
        advectionProgram.uniforms.uVelocity,
        velocity.read.attach(0)
      );
      gl.uniform1i(advectionProgram.uniforms.uSource, dye.read.attach(1));
      gl.uniform1f(
        advectionProgram.uniforms.dissipation,
        config.DENSITY_DISSIPATION
      );
      blit(dye.write);
      dye.swap();
    }

    function render(target) {
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      gl.enable(gl.BLEND);
      drawDisplay(target);
    }

    function drawDisplay(target) {
      let width = target == null ? gl.drawingBufferWidth : target.width;
      let height = target == null ? gl.drawingBufferHeight : target.height;
      displayMaterial.bind();
      if (config.SHADING)
        gl.uniform2f(
          displayMaterial.uniforms.texelSize,
          1.0 / width,
          1.0 / height
        );
      gl.uniform1i(displayMaterial.uniforms.uTexture, dye.read.attach(0));
      blit(target);
    }

    function splatPointer(pointer) {
      let dx = pointer.deltaX * config.SPLAT_FORCE;
      let dy = pointer.deltaY * config.SPLAT_FORCE;
      splat(pointer.texcoordX, pointer.texcoordY, dx, dy, pointer.color);
    }

    function clickSplat(pointer) {
      const color = generateColor();
      color.r *= 10.0;
      color.g *= 10.0;
      color.b *= 10.0;
      let dx = 10 * (Math.random() - 0.5);
      let dy = 30 * (Math.random() - 0.5);
      splat(pointer.texcoordX, pointer.texcoordY, dx, dy, color);
    }

    function splat(x, y, dx, dy, color) {
      splatProgram.bind();
      gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
      gl.uniform1f(
        splatProgram.uniforms.aspectRatio,
        canvas.width / canvas.height
      );
      gl.uniform2f(splatProgram.uniforms.point, x, y);
      gl.uniform3f(splatProgram.uniforms.color, dx, dy, 0.0);
      gl.uniform1f(
        splatProgram.uniforms.radius,
        correctRadius(config.SPLAT_RADIUS / 100.0)
      );
      blit(velocity.write);
      velocity.swap();

      gl.uniform1i(splatProgram.uniforms.uTarget, dye.read.attach(0));
      gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b);
      blit(dye.write);
      dye.swap();
    }

    function correctRadius(radius) {
      let aspectRatio = canvas.width / canvas.height;
      if (aspectRatio > 1) radius *= aspectRatio;
      return radius;
    }

    function updatePointerDownData(pointer, id, posX, posY) {
      pointer.id = id;
      pointer.down = true;
      pointer.moved = false;
      pointer.texcoordX = posX / canvas.width;
      pointer.texcoordY = 1.0 - posY / canvas.height;
      pointer.prevTexcoordX = pointer.texcoordX;
      pointer.prevTexcoordY = pointer.texcoordY;
      pointer.deltaX = 0;
      pointer.deltaY = 0;
      pointer.color = generateColor();
    }

    function updatePointerMoveData(pointer, posX, posY, color) {
      pointer.prevTexcoordX = pointer.texcoordX;
      pointer.prevTexcoordY = pointer.texcoordY;
      pointer.texcoordX = posX / canvas.width;
      pointer.texcoordY = 1.0 - posY / canvas.height;
      pointer.deltaX = correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX);
      pointer.deltaY = correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY);
      pointer.moved =
        Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;
      pointer.color = color;
    }

    function updatePointerUpData(pointer) {
      pointer.down = false;
    }

    function correctDeltaX(delta) {
      let aspectRatio = canvas.width / canvas.height;
      if (aspectRatio < 1) delta *= aspectRatio;
      return delta;
    }

    function correctDeltaY(delta) {
      let aspectRatio = canvas.width / canvas.height;
      if (aspectRatio > 1) delta /= aspectRatio;
      return delta;
    }

    function generateColor() {
      let c = HSVtoRGB(Math.random(), 1.0, 1.0);
      c.r *= 0.15;
      c.g *= 0.15;
      c.b *= 0.15;
      return c;
    }

    function HSVtoRGB(h, s, v) {
      let r, g, b, i, f, p, q, t;
      i = Math.floor(h * 6);
      f = h * 6 - i;
      p = v * (1 - s);
      q = v * (1 - f * s);
      t = v * (1 - (1 - f) * s);
      switch (i % 6) {
        case 0:
          r = v;
          g = t;
          b = p;
          break;
        case 1:
          r = q;
          g = v;
          b = p;
          break;
        case 2:
          r = p;
          g = v;
          b = t;
          break;
        case 3:
          r = p;
          g = q;
          b = v;
          break;
        case 4:
          r = t;
          g = p;
          b = v;
          break;
        case 5:
          r = v;
          g = p;
          b = q;
          break;
        default:
          break;
      }
      return { r, g, b };
    }

    function wrap(value, min, max) {
      const range = max - min;
      if (range === 0) return min;
      return ((value - min) % range) + min;
    }

    function getResolution(resolution) {
      let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
      if (aspectRatio < 1) aspectRatio = 1.0 / aspectRatio;
      const min = Math.round(resolution);
      const max = Math.round(resolution * aspectRatio);
      if (gl.drawingBufferWidth > gl.drawingBufferHeight)
        return { width: max, height: min };
      else return { width: min, height: max };
    }

    function scaleByPixelRatio(input) {
      const pixelRatio = window.devicePixelRatio || 1;
      return Math.floor(input * pixelRatio);
    }

    function hashCode(s) {
      if (s.length === 0) return 0;
      let hash = 0;
      for (let i = 0; i < s.length; i++) {
        hash = (hash << 5) - hash + s.charCodeAt(i);
        hash |= 0;
      }
      return hash;
    }

    window.addEventListener("mousedown", (e) => {
      let pointer = pointers[0];
      let posX = scaleByPixelRatio(e.clientX);
      let posY = scaleByPixelRatio(e.clientY);
      updatePointerDownData(pointer, -1, posX, posY);
      clickSplat(pointer);
    });

    document.body.addEventListener(
      "mousemove",
      function handleFirstMouseMove(e) {
        let pointer = pointers[0];
        let posX = scaleByPixelRatio(e.clientX);
        let posY = scaleByPixelRatio(e.clientY);
        let color = generateColor();
        updateFrame(); // start animation loop
        updatePointerMoveData(pointer, posX, posY, color);
        document.body.removeEventListener("mousemove", handleFirstMouseMove);
      }
    );

    window.addEventListener("mousemove", (e) => {
      let pointer = pointers[0];
      let posX = scaleByPixelRatio(e.clientX);
      let posY = scaleByPixelRatio(e.clientY);
      let color = pointer.color;
      updatePointerMoveData(pointer, posX, posY, color);
    });

    document.body.addEventListener(
      "touchstart",
      function handleFirstTouchStart(e) {
        const touches = e.targetTouches;
        let pointer = pointers[0];
        for (let i = 0; i < touches.length; i++) {
          let posX = scaleByPixelRatio(touches[i].clientX);
          let posY = scaleByPixelRatio(touches[i].clientY);
          updateFrame(); // start animation loop
          updatePointerDownData(pointer, touches[i].identifier, posX, posY);
        }
        document.body.removeEventListener("touchstart", handleFirstTouchStart);
      }
    );

    window.addEventListener("touchstart", (e) => {
      const touches = e.targetTouches;
      let pointer = pointers[0];
      for (let i = 0; i < touches.length; i++) {
        let posX = scaleByPixelRatio(touches[i].clientX);
        let posY = scaleByPixelRatio(touches[i].clientY);
        updatePointerDownData(pointer, touches[i].identifier, posX, posY);
      }
    });

    window.addEventListener(
      "touchmove",
      (e) => {
        const touches = e.targetTouches;
        let pointer = pointers[0];
        for (let i = 0; i < touches.length; i++) {
          let posX = scaleByPixelRatio(touches[i].clientX);
          let posY = scaleByPixelRatio(touches[i].clientY);
          updatePointerMoveData(pointer, posX, posY, pointer.color);
        }
      },
      false
    );

    window.addEventListener("touchend", (e) => {
      const touches = e.changedTouches;
      let pointer = pointers[0];
      for (let i = 0; i < touches.length; i++) {
        updatePointerUpData(pointer);
      }
    });

    updateFrame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    SIM_RESOLUTION,
    DYE_RESOLUTION,
    CAPTURE_RESOLUTION,
    DENSITY_DISSIPATION,
    VELOCITY_DISSIPATION,
    PRESSURE,
    PRESSURE_ITERATIONS,
    CURL,
    SPLAT_RADIUS,
    SPLAT_FORCE,
    SHADING,
    COLOR_UPDATE_SPEED,
    BACK_COLOR,
    TRANSPARENT,
  ]);

  return (
    <div className="fixed top-0 left-0 z-50 pointer-events-none">
      <canvas ref={canvasRef} id="fluid" className="w-screen h-screen" />
    </div>
  );
}


// LaughingEmoji Component: A single laughing emoji that animates then vanishes.
const LaughingEmoji = ({ id, x, y, onComplete }) => {
  return (
    <motion.div
      className="absolute text-3xl pointer-events-none select-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 1, scale: 0.5, y: 0 }}
      animate={{ opacity: 0, scale: 2, y: -50 }}
      transition={{ duration: 1, ease: "easeOut" }}
      onAnimationComplete={() => onComplete(id)}
    >
      
    </motion.div>
  );
};

// LaughingEmojis Component: Generates a random number of laughing emojis at the click location.
const LaughingEmojis = () => {
  const [emojis, setEmojis] = useState([]);

  const removeEmoji = (id) => {
    setEmojis((prev) => prev.filter((emoji) => emoji.id !== id));
  };

  useEffect(() => {
    const handleClick = (e) => {
      // Generate a random number of emojis between 3 and 8
      const count = Math.floor(Math.random() * 6) + 3;
      const newEmojis = Array.from({ length: count }, (_, i) => ({
        id: Date.now() + i,
        x: e.clientX + Math.random() * 30 - 15,
        y: e.clientY + Math.random() * 30 - 15,
      }));
      setEmojis((prev) => [...prev, ...newEmojis]);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <AnimatePresence>
      {emojis.map((emoji) => (
        <LaughingEmoji key={emoji.id} {...emoji} onComplete={removeEmoji} />
      ))}
    </AnimatePresence>
  );
};

// Flowchart Component: Displays an SVG flowchart of your success steps.
const Flowchart = () => {
  const steps = [
    { id: 1, title: "Set Vision & Goals", x: 20, y: 50 },
    { id: 2, title: "Pursue Education", x: 220, y: 50 },
    { id: 3, title: "Gain Experience", x: 420, y: 50 },
    { id: 4, title: "Lead Projects", x: 620, y: 50 },
    { id: 5, title: "Open Source", x: 820, y: 50 },
    { id: 6, title: "Build Network", x: 220, y: 180 },
    { id: 7, title: "Launch Portfolio", x: 420, y: 180 },
    { id: 8, title: "Achieve Success", x: 620, y: 180 },
  ];

  const arrowMarker = (
    <marker
      id="arrow"
      markerWidth="10"
      markerHeight="10"
      refX="5"
      refY="3"
      orient="auto"
      markerUnits="strokeWidth"
    >
      <path d="M0,0 L0,6 L9,3 z" fill="#fff" />
    </marker>
  );

  return (
    <div className="overflow-x-auto py-8">
      <svg width="1000" height="300" viewBox="0 0 1000 300">
        <defs>{arrowMarker}</defs>
        {steps.map((step) => (
          <g key={step.id}>
            <rect
              x={step.x}
              y={step.y}
              width="180"
              height="60"
              fill="#4B5563"
              stroke="#9CA3AF"
              rx="8"
              ry="8"
            />
            <text
              x={step.x + 90}
              y={step.y + 35}
              fill="#fff"
              fontSize="14"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              {step.title}
            </text>
          </g>
        ))}
        {/* Draw connecting arrows */}
        <line x1="200" y1="80" x2="220" y2="80" stroke="#fff" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="400" y1="80" x2="420" y2="80" stroke="#fff" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="600" y1="80" x2="620" y2="80" stroke="#fff" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="310" y1="110" x2="310" y2="180" stroke="#fff" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="510" y1="110" x2="510" y2="180" stroke="#fff" strokeWidth="2" markerEnd="url(#arrow)" />
      </svg>
    </div>
  );
};

const Portfolio = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => setShowSplash(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans relative overflow-hidden">
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && <SplashScreen key="splash" onFinish={handleSplashFinish} />}
      </AnimatePresence>

      {/* Main Content */}
      {!showSplash && (
        <>
          {/* Cloud Rain Effect */}
          <CloudPetalRain />
          {/* Splash Cursor Effect */}
          <SplashCursor />
          {/* Random Laughing Emojis on Click */}
          <LaughingEmojis />

          {/* Hero Section */}
          <header className="bg-gradient-to-r from-blue-800 to-purple-700 py-12">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center px-4">
              <motion.img
                src="/profile.jpg" // Uses the image at C:\Users\Nitish Maurya\my-portfolio\public\profile.jpg
                alt="Nitish Kumar"
                className="w-32 h-32 rounded-full border-4 border-white mb-4 shadow-xl"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
              <motion.h1
                className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-600"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
              >
                Nitish Kumar
              </motion.h1>
              <motion.p
                className="text-2xl mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
              >
                Cloud Engineer | AWS | DevOps
              </motion.p>
              <motion.p
                className="text-lg text-gray-300 mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              >
                Ghazipur, Uttar Pradesh
              </motion.p>
              <div className="flex space-x-6 mt-4">
                <a href="https://github.com/Nitishkumarmaury" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-3xl hover:text-gray-300 transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/nitish-kumar-a1a6b8249/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-3xl hover:text-blue-400 transition-colors" />
                </a>
                <a href="mailto:nitishmaurya6580@gmail.com">
                  <FaEnvelope className="text-3xl hover:text-red-400 transition-colors" />
                </a>
                <a href="https://www.example.com/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-full transition-colors">
                    Resume
                  </button>
                </a>
              </div>
              <motion.div
                className="mt-2 text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                <p>Phone: 9555179269</p>
              </motion.div>
            </div>
          </header>

          {/* Profile Summary */}
          <section id="about" className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-4xl font-bold text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Profile Summary
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
              >
                BE Computer Science student specializing in Cloud Computing and founder of Plantgen.
                Proven project leader skilled in defining project scope, managing resources, and delivering high-quality outcomes.
              </motion.p>
            </div>
          </section>

          {/* Education */}
          <section id="education" className="py-12 bg-gray-800 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-4xl font-bold text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Education
              </motion.h2>
              <div className="bg-gray-700 p-6 rounded shadow">
                <h3 className="text-2xl font-bold">
                  Chandigarh University, BE in Computer Science Engineering
                </h3>
                <p className="mt-2"><strong>Specialization:</strong> Cloud Computing</p>
                <p className="mt-2"><strong>CGPA:</strong> 5.6</p>
                <p className="mt-2">
                  <strong>Coursework:</strong> Cloud Computing Architecture, AWS Cloud Technical Essentials, Principles of Virtualization
                </p>
                <p className="mt-2 text-gray-400">Sept 2022 – May 2026</p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-4xl font-bold text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Experience
              </motion.h2>
              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded shadow mb-6">
                  <h3 className="text-2xl font-bold">
                    New India Vibrant Hackathon (SSIP Gujarat) – Project Leader
                  </h3>
                  <p className="text-gray-400">Sept 2022 – May 2026</p>
                  <ul className="list-disc ml-6 mt-2 text-gray-300">
                    <li>Led a team to develop a GPS-based security device for mining vehicles.</li>
                    <li>Integrated ESP32, Raspberry Pi, and infrared technology.</li>
                    <li>Implemented real-time monitoring with number plate scanning.</li>
                    <li>Notified ground station upon boundary breach.</li>
                    <li>Won first prize and secured funding of two lakh.</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded shadow">
                  <h3 className="text-2xl font-bold">
                    Smart India Hackathon (SIH2023) – Project Leader
                  </h3>
                  <p className="text-gray-400">SIH2023</p>
                  <ul className="list-disc ml-6 mt-2 text-gray-300">
                    <li>Developed a thermal imaging system for improved driver visibility.</li>
                    <li>Enhanced road safety by detecting obstacles in fog.</li>
                    <li>Led a multidisciplinary team to timely project delivery.</li>
                    <li>Secured first prize of 1 lakh for the solution.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Publications */}
          <section id="publications" className="py-12 bg-gray-800 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-4xl font-bold text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Publications
              </motion.h2>
              <div className="bg-gray-700 p-6 rounded shadow">
                <h3 className="text-2xl font-bold">
                  Automated Plants Water System For Road Dividers
                </h3>
                <p className="mt-2"><strong>Role:</strong> Project Leader (Aug 2023 – Dec 2023)</p>
                <p className="mt-2">Collaborated with Dr. Navneet Kaur and team members</p>
                <p className="mt-2"><strong>Patent Application:</strong> No. 202311064721 (26 Sep 2023)</p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-4xl font-bold text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Projects
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <motion.div
                  className="bg-gray-800 p-4 rounded shadow hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl font-bold mb-2">Thermal Visual & Vehicle Tracking</h3>
                  <p className="text-gray-400 mb-2">
                    Developed a thermal imaging system to enhance visibility in fog.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-gray-800 p-4 rounded shadow hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                >
                  <h3 className="text-2xl font-bold mb-2">Speed Limit Detection</h3>
                  <p className="text-gray-400 mb-2">
                    Integrated a GPS-based speed detection system with real-time alerts.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-gray-800 p-4 rounded shadow hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <h3 className="text-2xl font-bold mb-2">Illegal Mines Detection</h3>
                  <p className="text-gray-400 mb-2">
                    Built a platform using satellite data and sensors to detect unauthorized mining.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-gray-800 p-4 rounded shadow hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1 }}
                >
                  <h3 className="text-2xl font-bold mb-2">Accident Detection Model</h3>
                  <p className="text-gray-400 mb-2">
                    Designed an AI-powered model to detect accidents and trigger emergency alerts.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-gray-800 p-4 rounded shadow hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                >
                  <h3 className="text-2xl font-bold mb-2">Autonomous Farming Rover</h3>
                  <p className="text-gray-400 mb-2">
                    Created a rover with sensors and AI to support smart agriculture practices.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-gray-800 p-4 rounded shadow hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3 }}
                >
                  <h3 className="text-2xl font-bold mb-2">Voice-Enabled Telegram Bot</h3>
                  <p className="text-gray-400 mb-2">
                    Developed a Telegram bot utilizing speech recognition for interactive communication.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-gray-800 p-4 rounded shadow hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4 }}
                >
                  <h3 className="text-2xl font-bold mb-2">Plantgen Website</h3>
                  <p className="text-gray-400 mb-2">
                    Developed a responsive website to showcase eco-friendly plant products.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-gray-800 p-4 rounded shadow hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                >
                  <h3 className="text-2xl font-bold mb-2">Robotic Car for Roborace</h3>
                  <p className="text-gray-400 mb-2">
                    Designed and programmed a robotic car with autonomous navigation for competitive racing.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Technologies & Tools */}
          <section id="technologies" className="py-12 bg-gray-800 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-4xl font-bold text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Technologies & Tools
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-700 rounded shadow">
                  <h3 className="text-2xl font-semibold mb-2">Programming Languages</h3>
                  <p>Python, C, C++</p>
                </div>
                <div className="p-4 bg-gray-700 rounded shadow">
                  <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
                  <p>HTML, CSS, JavaScript, WordPress</p>
                </div>
                <div className="p-4 bg-gray-700 rounded shadow">
                  <h3 className="text-2xl font-semibold mb-2">Cloud Platforms</h3>
                  <p>AWS (EC2, S3, Lambda), Firebase</p>
                </div>
                <div className="p-4 bg-gray-700 rounded shadow">
                  <h3 className="text-2xl font-semibold mb-2">APIs & Integrations</h3>
                  <p>OpenAI API, Google Cloud API</p>
                </div>
              </div>
            </div>
          </section>

          {/* Blog & Open Source */}
          <section id="blog" className="py-12 bg-gray-800 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-4xl font-bold text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Blog & Open Source Contributions
              </motion.h2>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded shadow">
                  <h3 className="text-2xl font-bold">Understanding AWS Lambda</h3>
                  <p className="text-gray-400">
                    Best practices for designing serverless architecture on AWS.
                  </p>
                  <a href="#" className="text-blue-400 hover:underline">
                    Read More
                  </a>
                </div>
                <div className="bg-gray-700 p-4 rounded shadow">
                  <h3 className="text-2xl font-bold">Open Source Contributions</h3>
                  <p className="text-gray-400">
                    My work on various open source projects on GitHub.
                  </p>
                  <a href="#" className="text-blue-400 hover:underline">
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* My Success Flowchart */}
          <section id="flowchart" className="py-12 px-4 bg-gray-900">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-4xl font-bold text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                My Success Flowchart
              </motion.h2>
              <Flowchart />
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-12 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2
                className="text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Get In Touch
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
              >
                Have a project in mind or just want to say hello? Reach out!
              </motion.p>
              <a
                href="mailto:nitishmaurya6580@gmail.com"
                className="inline-block bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white py-3 px-8 rounded-full font-semibold shadow-xl transition-colors"
              >
                Contact Me
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-6 bg-gray-900 text-center">
            <p className="text-gray-500">© 2025 Nitish Kumar. All rights reserved.</p>
          </footer>
        </>
      )}
    </div>
  );
};

export default Portfolio;
