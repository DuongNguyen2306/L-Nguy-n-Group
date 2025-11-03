import { Card } from "@/components/ui/card"
import { Award, Trophy, Star, Medal } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      year: "2024",
      title: "500+ Khách Hàng Tin Tưởng",
      organization: "Lê Nguyên Group",
    },
    {
      icon: Award,
      year: "2024",
      title: "Tỷ Lệ Hài Lòng 98%",
      organization: "Khảo sát khách hàng",
    },
    {
      icon: Star,
      year: "2023",
      title: "Đối Tác Uy Tín",
      organization: "Các chủ đầu tư lớn",
    },
    {
      icon: Medal,
      year: "2023",
      title: "Dịch Vụ Tư Vấn Xuất Sắc",
      organization: "Hiệp hội BĐS TP.HCM",
    },
    {
      icon: Trophy,
      year: "2022",
      title: "Top Tư Vấn Khu Đông",
      organization: "Vietnam Property",
    },
    {
      icon: Award,
      year: "2022",
      title: "Đơn Vị Đáng Tin Cậy",
      organization: "Khách hàng bình chọn",
    },
  ]

  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">Thành Tựu & Ghi Nhận</h2>
          <p className="mt-4 text-muted-foreground md:text-lg text-pretty">Những ghi nhận từ khách hàng và đối tác</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 text-sm font-semibold text-primary">{achievement.year}</div>
                    <h3 className="mb-2 font-semibold text-foreground text-balance">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.organization}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
