import Link from "next/link"
import { ArrowRight, Home, Building, LandPlot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    id: "land",
    name: "Đất nền",
    icon: LandPlot,
    description: "Đất nền giá tốt, vị trí đẹp, pháp lý rõ ràng tại khu vực Đông Sài Gòn",
    image: "/residential-land-plot-with-clear-boundaries.jpg",
    count: "15+ dự án",
  },
  {
    id: "townhouse",
    name: "Nhà phố",
    icon: Home,
    description: "Nhà phố hiện đại, thiết kế thông minh, phù hợp an cư và kinh doanh",
    image: "/modern-townhouse-exterior.png",
    count: "20+ căn",
  },
  {
    id: "apartment",
    name: "Căn hộ",
    icon: Building,
    description: "Căn hộ cao cấp, tiện nghi đầy đủ, view đẹp tại các dự án uy tín",
    image: "/luxury-apartment-building.png",
    count: "30+ căn",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center space-y-2">
          <h2 className="text-4xl font-bold">Sản phẩm nổi bật</h2>
          <p className="text-lg text-muted-foreground">
            Khám phá các sản phẩm bất động sản chất lượng cao tại khu vực Đông Sài Gòn
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Card
                key={category.id}
                className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white mb-2">
                      <Icon className="h-6 w-6" />
                      <h3 className="text-2xl font-bold">{category.name}</h3>
                    </div>
                    <span className="text-sm text-white/90">{category.count}</span>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                  <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                    <Link href={`/projects?type=${category.id}`}>
                      Xem chi tiết
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/projects">
              Xem tất cả dự án
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
