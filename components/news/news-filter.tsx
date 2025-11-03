"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function NewsFilter() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "Tất cả" },
    { id: "company", label: "Tin công ty" },
    { id: "projects", label: "Dự án" },
    { id: "awards", label: "Giải thưởng" },
    { id: "events", label: "Sự kiện" },
    { id: "media", label: "Truyền thông" },
  ]

  return (
    <section className="border-b bg-background py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
