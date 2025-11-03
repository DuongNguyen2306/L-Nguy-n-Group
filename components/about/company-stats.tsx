import { Building2, Users, Award, TrendingUp } from "lucide-react"

export function CompanyStats() {
  const stats = [
    {
      icon: Building2,
      value: "100+",
      label: "Sản phẩm đã tư vấn",
    },
    {
      icon: Users,
      value: "500+",
      label: "Khách hàng tin tưởng",
    },
    {
      icon: Award,
      value: "100%",
      label: "Cam kết uy tín",
    },
    {
      icon: TrendingUp,
      value: "5+",
      label: "Năm kinh nghiệm",
    },
  ]

  return (
    <section className="border-b bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <Icon className="h-10 w-10 text-primary mb-4" />
                <div className="text-3xl font-bold text-foreground md:text-4xl">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground md:text-base">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
