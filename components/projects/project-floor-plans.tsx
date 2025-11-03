import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProjectFloorPlans() {
  const floorPlans = [
    {
      name: "Căn hộ 1 phòng ngủ",
      area: "50m²",
      bedrooms: 1,
      bathrooms: 1,
      price: "Từ 2.5 tỷ",
      image: "/placeholder.svg?key=fp1br",
    },
    {
      name: "Căn hộ 2 phòng ngủ",
      area: "75m²",
      bedrooms: 2,
      bathrooms: 2,
      price: "Từ 3.5 tỷ",
      image: "/placeholder.svg?key=fp2br",
    },
    {
      name: "Căn hộ 3 phòng ngủ",
      area: "100m²",
      bedrooms: 3,
      bathrooms: 2,
      price: "Từ 4.8 tỷ",
      image: "/placeholder.svg?key=fp3br",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">Mặt Bằng Căn Hộ</h2>
          <p className="mt-4 text-muted-foreground md:text-lg text-pretty">
            Đa dạng diện tích và thiết kế phù hợp với mọi nhu cầu
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {floorPlans.map((plan, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-square overflow-hidden bg-muted">
                <img src={plan.image || "/placeholder.svg"} alt={plan.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">{plan.name}</h3>
                <div className="mb-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Diện tích:</span>
                    <span className="font-medium text-foreground">{plan.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phòng ngủ:</span>
                    <span className="font-medium text-foreground">{plan.bedrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phòng tắm:</span>
                    <span className="font-medium text-foreground">{plan.bathrooms}</span>
                  </div>
                </div>
                <div className="mb-4 border-t pt-4">
                  <div className="text-sm text-muted-foreground">Giá bán</div>
                  <div className="text-xl font-bold text-primary">{plan.price}</div>
                </div>
                <Button className="w-full">Xem chi tiết</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
