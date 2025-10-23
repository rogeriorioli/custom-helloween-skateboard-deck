"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, ShoppingCart, Skull, Zap, Flame } from "lucide-react"
import CheckoutModal from "@/components/checkout-modal"

const defaultDesigns = [
  {
    id: 1,
    name: "Black Cat",
    image: "/black_cat.png",
  },
  {
    id: 2,
    name: "Dracula",
    image: "/dracula.png",
  },
  {
    id: 3,
    name: "Ghost Grip",
    image: "/ghost.png",
  },
  {
    id: 4,
    name: "Haunted Wheels",
    image: "/hunted.png",
  },
  {
    id: 5,
    name: "Dead Man's Pool",
    image: "/pool.png",
  },
  {
    id: 6,
    name: "Skull",
    image: "/skull.png",
  },
]

export default function SkateCustomizer() {
  const [selectedDesign, setSelectedDesign] = useState(defaultDesigns[0])
  const [customImage, setCustomImage] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setCustomImage(result)
        setSelectedDesign({
          id: 999,
          name: "Your Design",
          image: result,
        })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-8 md:mb-12">
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-primary drop-shadow-[0_0_20px_rgba(0,255,0,0.5)]"
          style={{ fontFamily: "var(--font-creepster)" }}
        >
          Build Your Cursed Deck 🧟
        </h1>
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-roboto)" }}
        >
          Choose your Halloween print, customize your deck and bring terror to the streets.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
        <div className="order-2 lg:order-1 flex justify-center">
          <Card className="p-6 md:p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/30 shadow-[0_0_30px_rgba(0,255,0,0.2)] w-full max-w-sm">
            <div className="relative aspect-[1/4] bg-muted/50 rounded-lg overflow-hidden h-[600px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-[150px] max-h-[600px]">
                  <div className="absolute inset-0 bg-gradient-to-b from-muted via-card to-muted rounded-[100px] shadow-2xl border-4 border-border overflow-hidden">
                    <img
                      src={selectedDesign.image || "/placeholder.svg"}
                      alt={selectedDesign.name}
                      className="w-full h-full object-cover opacity-90 transition-all duration-500"
                    />
                  </div>

                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Selected Design:</p>
              <p className="text-xl font-bold text-primary">{selectedDesign.name}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold text-foreground mb-3 text-center" style={{ fontFamily: "var(--font-creepster)" }}>
                Available Sizes
              </h3>
              <div className="flex justify-center gap-3 mb-2">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold border border-primary/30">8.0"</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold border border-primary/30">8.5"</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold border border-primary/30">9.0"</span>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Crafted with premium Canadian maple wood
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,255,0,0.3)] hover:shadow-[0_0_30px_rgba(0,255,0,0.5)] transition-all"
                onClick={() => setIsModalOpen(true)}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Buy Now
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="mr-2 h-5 w-5" />
                Your Design
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/svg+xml"
                className="hidden"
                onChange={handleFileUpload}
              />
            </div>
          </Card>
        </div>

        <div className="order-1 lg:order-2">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-secondary flex items-center gap-3"
            style={{ fontFamily: "var(--font-creepster)" }}
          >
            <Skull className="h-8 w-8" />
            Cursed Prints
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {defaultDesigns.map((design) => (
              <Card
                key={design.id}
                className={`cursor-pointer transition-all duration-300 overflow-hidden group hover:scale-105 ${selectedDesign.id === design.id
                  ? "ring-4 ring-primary shadow-[0_0_30px_rgba(0,255,0,0.4)]"
                  : "hover:ring-2 hover:ring-accent"
                  }`}
                onClick={() => setSelectedDesign(design)}
              >
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img
                    src={design.image || "/placeholder.svg"}
                    alt={design.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <p className="text-sm font-bold text-foreground">{design.name}</p>
                  </div>
                </div>
              </Card>
            ))}

            {customImage && (
              <Card
                className={`cursor-pointer transition-all duration-300 overflow-hidden group hover:scale-105 ${selectedDesign.id === 999
                  ? "ring-4 ring-primary shadow-[0_0_30px_rgba(0,255,0,0.4)]"
                  : "hover:ring-2 hover:ring-accent"
                  }`}
                onClick={() => setSelectedDesign({ id: 999, name: "Your Design", image: customImage })}
              >
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img
                    src={customImage || "/placeholder.svg"}
                    alt="Your Design"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-bold">
                    Yours
                  </div>
                </div>
              </Card>
            )}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="p-4 bg-card/60 backdrop-blur-sm border-primary/20 text-center">
              <Zap className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-sm font-bold text-foreground">Terror Guaranteed</p>
            </Card>
            <Card className="p-4 bg-card/60 backdrop-blur-sm border-secondary/20 text-center">
              <Skull className="h-8 w-8 mx-auto mb-2 text-secondary" />
              <p className="text-sm font-bold text-foreground">Punk Style</p>
            </Card>
            <Card className="p-4 bg-card/60 backdrop-blur-sm border-accent/20 text-center">
              <Flame className="h-8 w-8 mx-auto mb-2 text-accent" />
              <p className="text-sm font-bold text-foreground">High Quality</p>
            </Card>
          </div>
        </div>
      </div>

      <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedDesign={selectedDesign} />
    </div>
  )
}
