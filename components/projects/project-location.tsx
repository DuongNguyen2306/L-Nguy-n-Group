import { Card } from "@/components/ui/card"
import { MapPin, Train, ShoppingBag, GraduationCap, Hospital } from "lucide-react"

interface ProjectLocationProps {
  location: string
}

export function ProjectLocation({ location }: ProjectLocationProps) {
  const nearbyPlaces = [
    { icon: Train, name: "Metro Bến Thành", distance: "500m", time: "5 phút đi bộ" },
    { icon: ShoppingBag, name: "Vincom Center", distance: "1.2km", time: "3 phút lái xe" },
    { icon: GraduationCap, name: "Trường Quốc tế", distance: "800m", time: "10 phút đi bộ" },
    { icon: Hospital, name: "Bệnh viện Đa khoa", distance: "2km", time: "5 phút lái xe" },
  ]

  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">Vị Trí & Kết Nối</h2>
          <p className="mt-4 text-muted-foreground md:text-lg text-pretty">
            Tọa lạc tại vị trí đắc địa với kết nối giao thông thuận tiện
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <Card className="overflow-hidden">
            <div className="aspect-video bg-muted">
              <img src="/placeholder.svg?key=m4p1c" alt="Project location map" className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">Địa chỉ</h3>
                  <p className="text-muted-foreground">{location}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Nearby Places */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-foreground">Tiện ích lân cận</h3>
            <div className="space-y-4">
              {nearbyPlaces.map((place, index) => {
                const Icon = place.icon
                return (
                  <Card key={index} className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{place.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {place.distance} • {place.time}
                        </p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
