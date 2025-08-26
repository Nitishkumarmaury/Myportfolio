// Utility functions for generating particle positions
export const pointsInner = Array.from({ length: 2500 }, (_, i) => {
  const angle = (i / 2500) * Math.PI * 2;
  const radius = 2 + Math.random() * 1;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  const z = (Math.random() - 0.5) * 0.5;
  
  return {
    idx: i,
    position: [x, y, z],
    color: `hsl(${Math.random() * 360}, 70%, 60%)`,
  };
});

export const pointsOuter = Array.from({ length: 1500 }, (_, i) => {
  const angle = (i / 1500) * Math.PI * 2;
  const radius = 4 + Math.random() * 2;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  const z = (Math.random() - 0.5) * 1;
  
  return {
    idx: i + 2500,
    position: [x, y, z],
    color: `hsl(${180 + Math.random() * 180}, 70%, 60%)`,
  };
});
