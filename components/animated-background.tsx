"use client"

import { useEffect, useState } from "react"

export default function AnimatedBackground() {
  const [bats, setBats] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const newBats = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }))
    setBats(newBats)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      <svg className="absolute top-0 left-0 w-48 h-48 opacity-20" viewBox="0 0 200 200">
        <path
          d="M0,0 L100,100 M0,50 L100,100 M0,100 L100,100 M50,0 L100,100 M100,0 L100,100"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-muted-foreground"
        />
        <circle cx="100" cy="100" r="3" fill="currentColor" className="text-muted-foreground" />
      </svg>

      <svg className="absolute top-0 right-0 w-48 h-48 opacity-20 scale-x-[-1]" viewBox="0 0 200 200">
        <path
          d="M0,0 L100,100 M0,50 L100,100 M0,100 L100,100 M50,0 L100,100 M100,0 L100,100"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-muted-foreground"
        />
        <circle cx="100" cy="100" r="3" fill="currentColor" className="text-muted-foreground" />
      </svg>

      {bats.map((bat) => (
        <div
          key={bat.id}
          className="absolute animate-float opacity-30"
          style={{
            left: `${bat.x}%`,
            top: `${bat.y}%`,
            animationDelay: `${bat.delay}s`,
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-muted-foreground">
            <path d="M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M12 4L20 12L12 20L4 12L12 4Z" />
          </svg>
        </div>
      ))}

      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-muted/30 to-transparent" />
    </div>
  )
}
