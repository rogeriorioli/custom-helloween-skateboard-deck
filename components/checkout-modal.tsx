"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, CreditCard, Truck, Shield } from "lucide-react"

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  selectedDesign: {
    id: number
    name: string
    image: string
  }
}

export default function CheckoutModal({ isOpen, onClose, selectedDesign }: CheckoutModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Order placed successfully! 🎃")
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-2 border-primary/30 shadow-[0_0_50px_rgba(0,255,0,0.3)]">
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary" style={{ fontFamily: "var(--font-creepster)" }}>
              Complete Order 🧟
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="mb-6 p-4 bg-muted/50 rounded-lg border border-border">
            <div className="flex items-center gap-4">
              <img
                src={selectedDesign.image || "/placeholder.svg"}
                alt={selectedDesign.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <p className="text-sm text-muted-foreground">Selected Deck:</p>
                <p className="text-xl font-bold text-foreground">{selectedDesign.name}</p>
                <p className="text-2xl font-bold text-primary mt-1">$299.90</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-foreground">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 bg-background border-border text-foreground"
                placeholder="Your name"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 bg-background border-border text-foreground"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <Label htmlFor="address" className="text-foreground">
                Delivery Address
              </Label>
              <Input
                id="address"
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="mt-1 bg-background border-border text-foreground"
                placeholder="Street, number, city, state"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CreditCard className="h-4 w-4 text-primary" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="h-4 w-4 text-accent" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-secondary" />
                <span>30-Day Warranty</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 border-muted-foreground text-muted-foreground hover:bg-muted bg-transparent"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,255,0,0.3)]"
              >
                Confirm Order
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  )
}
