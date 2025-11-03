"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectGalleryProps {
  projectName: string
}

export function ProjectGallery({ projectName }: ProjectGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    "/placeholder.svg?key=g4ll1",
    "/placeholder.svg?key=g4ll2",
    "/placeholder.svg?key=g4ll3",
    "/placeholder.svg?key=g4ll4",
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="relative h-[500px] bg-muted">
      <img
        src={images[currentImage] || "/placeholder.svg"}
        alt={`${projectName} - Image ${currentImage + 1}`}
        className="h-full w-full object-cover"
      />

      {/* Navigation Buttons */}
      <Button variant="secondary" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2" onClick={prevImage}>
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button variant="secondary" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2" onClick={nextImage}>
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Image Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white">
        {currentImage + 1} / {images.length}
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-16 w-16 overflow-hidden rounded border-2 transition-all ${
              currentImage === index ? "border-white" : "border-transparent opacity-60"
            }`}
          >
            <img
              src={img || "/placeholder.svg"}
              alt={`Thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  )
}
