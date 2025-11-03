import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Home, Calendar } from "lucide-react"
import Link from "next/link"

export function ProjectsGrid() {
  const projects = [
    {
      id: "safira-khang-dien",
      name: "Safira Khang Điền",
      location: "Quận 9, TP.HCM",
      type: "Căn hộ cao cấp",
      status: "Đang bán",
      units: "1,200 căn",
      completion: "Q4/2025",
      price: "Từ 2.5 tỷ",
      image: "/placeholder.svg?key=s4f1r",
      description: "Khu căn hộ cao cấp với đầy đủ tiện ích hiện đại",
    },
    {
      id: "jamila-khang-dien",
      name: "Jamila Khang Điền",
      location: "Quận 9, TP.HCM",
      type: "Căn hộ",
      status: "Đang bán",
      units: "800 căn",
      completion: "Q2/2025",
      price: "Từ 2.2 tỷ",
      image: "/placeholder.svg?key=j4m1l",
      description: "Căn hộ thông minh với thiết kế tối ưu không gian",
    },
    {
      id: "lucasta-khang-dien",
      name: "Lucasta Khang Điền",
      location: "Quận 9, TP.HCM",
      type: "Nhà phố - Biệt thự",
      status: "Đã hoàn thành",
      units: "500 căn",
      completion: "Đã bàn giao",
      price: "Từ 5.5 tỷ",
      image: "/placeholder.svg?key=luc4s",
      description: "Khu nhà phố và biệt thự cao cấp trong khu đô thị xanh",
    },
    {
      id: "verosa-park-khang-dien",
      name: "Verosa Park Khang Điền",
      location: "Quận 9, TP.HCM",
      type: "Căn hộ resort",
      status: "Sắp mở bán",
      units: "1,500 căn",
      completion: "Q1/2026",
      price: "Từ 3.0 tỷ",
      image: "/placeholder.svg?key=v3r0s",
      description: "Căn hộ phong cách resort với công viên trung tâm rộng lớn",
    },
    {
      id: "palm-garden",
      name: "Palm Garden",
      location: "Quận 2, TP.HCM",
      type: "Căn hộ cao cấp",
      status: "Đã hoàn thành",
      units: "600 căn",
      completion: "Đã bàn giao",
      price: "Từ 3.5 tỷ",
      image: "/placeholder.svg?key=p4lm6",
      description: "Căn hộ cao cấp view sông Sài Gòn tuyệt đẹp",
    },
    {
      id: "stella-mega-city",
      name: "Stella Mega City",
      location: "Cần Thơ",
      type: "Khu đô thị",
      status: "Đang bán",
      units: "2,000 căn",
      completion: "Q3/2025",
      price: "Từ 1.8 tỷ",
      image: "/placeholder.svg?key=st3ll",
      description: "Khu đô thị hiện đại tại trung tâm miền Tây",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <p className="text-muted-foreground">
            Hiển thị <span className="font-semibold text-foreground">{projects.length}</span> dự án
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden transition-shadow hover:shadow-lg">
              <Link href={`/projects/${project.id}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute right-4 top-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        project.status === "Đang bán"
                          ? "bg-primary text-primary-foreground"
                          : project.status === "Sắp mở bán"
                            ? "bg-accent text-accent-foreground"
                            : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <Link href={`/projects/${project.id}`}>
                  <h3 className="mb-2 text-xl font-semibold text-foreground hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                </Link>

                <div className="mb-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    <span>
                      {project.type} • {project.units}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{project.completion}</span>
                  </div>
                </div>

                <p className="mb-4 text-sm text-muted-foreground line-clamp-2 text-pretty">{project.description}</p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">Giá từ</div>
                    <div className="text-lg font-bold text-primary">{project.price}</div>
                  </div>
                  <Button asChild size="sm">
                    <Link href={`/projects/${project.id}`}>Xem chi tiết</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
