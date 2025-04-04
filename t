You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
component.tsx
"use client";
import { useEffect, useRef } from "react";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Utility function to combine class names
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// BackgroundGradientAnimation Component
export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart);
    document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, [gradientBackgroundStart, gradientBackgroundEnd, firstColor, secondColor, thirdColor, fourthColor, fifthColor, pointerColor, size, blendingValue]);

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) return;
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    }
    move();
  }, [tgX, tgY, curX, curY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      className={cn(
        "h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("", className)}>{children}</div>
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`,
            `animate-first`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-second`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-third`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-fourth`,
            `opacity-70`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
            `animate-fifth`,
            `opacity-100`
          )}
        ></div>

        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
              `opacity-70`
            )}
          ></div>
        )}
      </div>
    </div>
  );
};

// SplashCursor Component: Renders a small splash at the cursor position on mouse move.
const SplashCursor = () => {
  const [splashes, setSplashes] = useState<{ id: number; x: number; y: number }[]>([]);

  const addSplash = (x: number, y: number) => {
    const id = Date.now();
    setSplashes((prev) => [...prev, { id, x, y }]);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      addSplash(e.clientX, e.clientY);
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const removeSplash = (id: number) => {
    setSplashes((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      <AnimatePresence>
        {splashes.map((splash) => (
          <motion.div
            key={splash.id}
            initial={{ opacity: 1, scale: 0.5 }}
            animate={{ opacity: 0, scale: 3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onAnimationComplete={() => removeSplash(splash.id)}
            style={{
              position: "absolute",
              left: splash.x,
              top: splash.y,
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.5)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
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
            ☁️
          </motion.div>
        );
      })}
    </div>
  );
};

// CloudPetalRain Component: Shows the cloud rain effect after 1 second of inactivity.
const CloudPetalRain = () => {
  const [showRain, setShowRain] = useState(false);
  const timerRef = useRef<number | null>(null);

  const handleMouseMove = () => {
    setShowRain(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setShowRain(true), 1000);
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

// LaughingEmoji Component: A single laughing emoji that animates then vanishes.
const LaughingEmoji = ({ id, x, y, onComplete }: { id: number; x: number; y: number; onComplete: (id: number) => void; }) => {
  return (
    <motion.div
      className="absolute text-3xl pointer-events-none select-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 1, scale: 0.5, y: 0 }}
      animate={{ opacity: 0, scale: 2, y: -50 }}
      transition={{ duration: 1, ease: "easeOut" }}
      onAnimationComplete={() => onComplete(id)}
    >
      😂
    </motion.div>
  );
};

// LaughingEmojis Component: Generates a random number of laughing emojis at the click location.
const LaughingEmojis = () => {
  const [emojis, setEmojis] = useState<{ id: number; x: number; y: number }[]>([]);

  const removeEmoji = (id: number) => {
    setEmojis((prev) => prev.filter((emoji) => emoji.id !== id));
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
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
        <line x1="200" y1="80" x2="220" y2="80" stroke="#fff" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="400" y1="80" x2="420" y2="80" stroke="#fff" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="600" y1="80" x2="620" y2="80" stroke="#fff" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="310" y1="110" x2="310" y2="180" stroke="#fff" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="510" y1="110" x2="510" y2="180" stroke="#fff" strokeWidth="2" markerEnd="url(#arrow)" />
      </svg>
    </div>
  );
};

// Portfolio Component
const Portfolio = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => setShowSplash(false);

  return (
    <BackgroundGradientAnimation>
      <AnimatePresence>
        {showSplash && <SplashScreen key="splash" onFinish={handleSplashFinish} />}
      </AnimatePresence>

      {!showSplash && (
        <>
          <CloudPetalRain />
          <SplashCursor />
          <LaughingEmojis />

          <header className="bg-gradient-to-r from-blue-800 to-purple-700 py-12 relative z-10">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center px-4">
              <motion.img
                src="/profile.jpg" // Ensure your profile image is located at public/profile.jpg
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

          <section id="about" className="py-12 px-4 relative z-10">
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

          <section id="education" className="py-12 bg-gray-800 px-4 relative z-10">
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

          <section id="experience" className="py-12 px-4 relative z-10">
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

          <section id="publications" className="py-12 bg-gray-800 px-4 relative z-10">
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

          <section id="projects" className="py-12 px-4 relative z-10">
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

          <section id="technologies" className="py-12 bg-gray-800 px-4 relative z-10">
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

          <section id="blog" className="py-12 bg-gray-800 px-4 relative z-10">
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

          <section id="flowchart" className="py-12 px-4 bg-gray-900 relative z-10">
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

          <section id="contact" className="py-12 px-4 relative z-10">
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

          <footer className="py-6 bg-gray-900 text-center relative z-10">
            <p className="text-gray-500">© 2025 Nitish Kumar. All rights reserved.</p>
          </footer>
        </>
      )}
    </BackgroundGradientAnimation>
  );
};

export default Portfolio;

export { SplashCursor };


demo.tsx
import { SplashCursor } from "@/components/ui/splash-cursor"

export function NoiseDemo() {
  return (
    <SplashCursor />
  )
}
```

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them
