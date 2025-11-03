"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function ProjectsFilter() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "Tất cả" },
    { id: "apartment", label: "Căn hộ" },
    { id: "townhouse", label: "Nhà phố" },
    { id: "villa", label: "Biệt thự" },
    { id: "urban", label: "Khu đô thị" },
  ]

  const statuses = [
    { id: "all-status", label: "Tất cả trạng thái" },
    { id: "selling", label: "Đang bán" },
    { id: "upcoming", label: "Sắp mở bán" },
    { id: "completed", label: "Đã hoàn thành" },
  ]

  return (
    <section className="border-b bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="space-y-6">
          {/* Type Filter */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Loại hình dự án</h3>
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

          {/* Status Filter */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Trạng thái</h3>
            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <Button key={status.id} variant="outline" size="sm">
                  {status.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
