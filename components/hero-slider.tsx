"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "/modern-luxury-apartment-complex-with-pool.jpg",
    title: "🔥 Nhiệt Tâm – Uy Tín – Gắn Kết Dài Lâu 🔥",
    subtitle: "Lê Nguyên Group - Đối tác tin cậy của bạn",
    description: "Chuyên cung cấp đất nền, nhà phố và căn hộ tại khu vực Đông Sài Gòn",
  },
  {
    id: 2,
    image: "/contemporary-residential-towers-with-gardens.jpg",
    title: "Đất Nền Giá Tốt",
    subtitle: "Vị trí đẹp, pháp lý rõ ràng",
    description: "Đầu tư sinh lời bền vững tại TP Thủ Đức",
  },
  {
    id: 3,
    image: "/upscale-urban-development-with-green-spaces.jpg",
    title: "Nhà Phố & Căn Hộ",
    subtitle: "Thiết kế hiện đại, tiện nghi đầy đủ",
    description: "An cư lạc nghiệp cùng gia đình",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-muted">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl space-y-4 text-white">
                <h1 className="text-5xl font-bold leading-tight text-balance md:text-6xl">{slide.title}</h1>
                <p className="text-xl font-medium text-white/90">{slide.subtitle}</p>
                <p className="text-lg text-white/80 leading-relaxed">{slide.description}</p>
                <div className="flex gap-4 pt-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Xem chi tiết
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    Đăng ký tư vấn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}
