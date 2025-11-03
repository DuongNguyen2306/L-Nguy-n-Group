import { Card } from "@/components/ui/card"
import { Waves, Dumbbell, ShoppingBag, GraduationCap, Trees, Shield, Car, Wifi } from "lucide-react"

export function ProjectAmenities() {
  const amenities = [
    { icon: Waves, name: "Hồ bơi", description: "Hồ bơi ngoài trời 4 mùa" },
    { icon: Dumbbell, name: "Gym & Yoga", description: "Phòng tập hiện đại" },
    { icon: ShoppingBag, name: "Trung tâm thương mại", description: "Khu mua sắm tiện lợi" },
    { icon: GraduationCap, name: "Khu vui chơi trẻ em", description: "Sân chơi an toàn" },
    { icon: Trees, name: "Công viên xanh", description: "Không gian xanh rộng lớn" },
    { icon: Shield, name: "An ninh 24/7", description: "Hệ thống bảo vệ chuyên nghiệp" },
    { icon: Car, name: "Bãi đỗ xe", description: "Hầm đỗ xe rộng rãi" },
    { icon: Wifi, name: "Smart Home", description: "Công nghệ nhà thông minh" },
  ]

  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">Tiện Ích Nội Khu</h2>
          <p className="mt-4 text-muted-foreground md:text-lg text-pretty">
            Hệ thống tiện ích đẳng cấp phục vụ mọi nhu cầu của cư dân
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <Card key={index} className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{amenity.name}</h3>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
