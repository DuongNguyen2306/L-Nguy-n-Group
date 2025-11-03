import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Home, Calendar, DollarSign, Building2, Users } from "lucide-react"

interface ProjectInfoProps {
  project: {
    name: string
    location: string
    type: string
    status: string
    price: string
    description: string
  }
}

export function ProjectInfo({ project }: ProjectInfoProps) {
  const specs = [
    { icon: MapPin, label: "Vị trí", value: project.location },
    { icon: Home, label: "Loại hình", value: project.type },
    { icon: Building2, label: "Quy mô", value: "1,200 căn hộ" },
    { icon: Users, label: "Chủ đầu tư", value: "Khang Điền" },
    { icon: Calendar, label: "Bàn giao", value: "Q4/2025" },
    { icon: DollarSign, label: "Giá bán", value: project.price },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span
                className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                  project.status === "Đang bán" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                }`}
              >
                {project.status}
              </span>
            </div>

            <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">{project.name}</h1>

            <p className="mb-8 text-lg text-muted-foreground leading-relaxed text-pretty">{project.description}</p>

            <div className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Tổng quan dự án</h2>
              <p className="text-muted-foreground leading-relaxed">
                Safira Khang Điền là dự án căn hộ cao cấp được phát triển bởi Công ty Cổ phần Đầu tư và Kinh doanh Nhà
                Khang Điền. Dự án tọa lạc tại vị trí đắc địa thuộc Quận 9, TP.HCM, nơi đang là trung tâm phát triển mới
                của thành phố với hạ tầng giao thông hoàn thiện và tiện ích đầy đủ.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Với tổng diện tích hơn 10 hecta, Safira Khang Điền bao gồm 1,200 căn hộ cao cấp với đa dạng diện tích từ
                50m² đến 120m², phù hợp với nhu cầu của nhiều gia đình. Dự án được thiết kế theo phong cách hiện đại,
                tối ưu hóa không gian sống và ánh sáng tự nhiên.
              </p>
            </div>
          </div>

          {/* Specs Card */}
          <div>
            <Card className="sticky top-20 p-6">
              <h3 className="mb-6 text-xl font-semibold text-foreground">Thông tin dự án</h3>
              <div className="space-y-4">
                {specs.map((spec, index) => {
                  const Icon = spec.icon
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <Icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground">{spec.label}</div>
                        <div className="font-medium text-foreground">{spec.value}</div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 space-y-3">
                <Button className="w-full" size="lg">
                  Đăng ký tư vấn
                </Button>
                <Button variant="outline" className="w-full bg-transparent" size="lg">
                  Tải brochure
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
