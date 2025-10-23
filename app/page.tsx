import SkateCustomizer from "@/components/skate-customizer"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <SkateCustomizer />
    </main>
  )
}
