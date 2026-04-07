import { motion } from "framer-motion";
import { Database, BarChart3, PieChart, TrendingUp, Cpu, Server, Network, Table, Sigma, Layers, GitBranch, Share2 } from "lucide-react";

const icons = [
  Database, BarChart3, PieChart, TrendingUp, Cpu, Server, 
  Network, Table, Sigma, Layers, GitBranch, Share2
];

const colors = [
  "rgba(59, 130, 246, 1)", // Blue
  "rgba(14, 165, 233, 1)", // Sky
  "rgba(139, 92, 246, 1)", // Violet
  "rgba(6, 182, 212, 1)",  // Cyan
  "rgba(249, 168, 212, 1)", // Pink (subtle)
];

export const FloatingBubbles = () => {
  const bubbleCount = 10;
  const iconCount = 12;
  const particleCount = 20;
  
  const bubbles = Array.from({ length: bubbleCount }, (_, i) => ({
    id: `b-${i}`,
    size: Math.random() * (120 - 40) + 40,
    left: Math.random() * 100,
    delay: Math.random() * 20,
    duration: Math.random() * (25 - 15) + 15,
    color: colors[Math.floor(Math.random() * colors.length)],
    opacity: Math.random() * 0.1 + 0.05,
  }));

  const floatIcons = Array.from({ length: iconCount }, (_, i) => ({
    id: `i-${i}`,
    Icon: icons[i % icons.length],
    size: Math.random() * (32 - 20) + 20,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * (30 - 20) + 20,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));

  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: `p-${i}`,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * (15 - 8) + 8,
    size: Math.random() * (3 - 1) + 1,
  }));

  return (
    <div className="bubbles-container">
      {/* Abstract Colorful Bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
            backgroundColor: bubble.color.replace("1)", `${bubble.opacity})`),
            border: `1px solid ${bubble.color.replace("1)", "0.1)")}`,
            boxShadow: `0 0 20px ${bubble.color.replace("1)", "0.05)")}`,
          }}
        />
      ))}

      {/* Floating Data Icons (Data Architecture) */}
      {floatIcons.map(({ id, Icon, size, left, top, delay, duration, color }) => (
        <motion.div
            key={id}
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: [0, 0.4, 0.4, 0],
                y: [0, -100, -200],
                x: [0, Math.random() * 40 - 20, Math.random() * 40 - 20],
                rotate: [0, 180, 360]
            }}
            transition={{
                delay,
                duration,
                repeat: Infinity,
                ease: "linear"
            }}
            className="absolute pointer-events-none"
            style={{ left: `${left}%`, top: `110vh` }}
        >
            <Icon size={size} style={{ color, opacity: 0.3 }} />
        </motion.div>
      ))}

      {/* Static Hovering/Floating Icons for depth */}
      {floatIcons.slice(0, 6).map(({ id, Icon, size, left, top, color }, i) => (
        <motion.div
            key={`s-${id}`}
            animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, 0]
            }}
            transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className="absolute pointer-events-none opacity-[0.15]"
            style={{ left: `${left}%`, top: `${top}%` }}
        >
            <Icon size={size + 10} style={{ color }} />
        </motion.div>
      ))}

      {/* Data Stream Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="data-particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            background: colors[Math.floor(Math.random() * colors.length)],
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
};
