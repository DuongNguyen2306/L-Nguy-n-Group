import { Card } from "@/components/ui/card"
import { TrendingUp, DollarSign, PieChart, BarChart3 } from "lucide-react"

export function FinancialHighlights() {
  const highlights = [
    {
      icon: DollarSign,
      label: "Doanh thu 2023",
      value: "12,500 tỷ VNĐ",
      change: "+18.5%",
      positive: true,
    },
    {
      icon: TrendingUp,
      label: "Lợi nhuận sau thuế",
      value: "2,800 tỷ VNĐ",
      change: "+22.3%",
      positive: true,
    },
    {
      icon: PieChart,
      label: "Tổng tài sản",
      value: "28,000 tỷ VNĐ",
      change: "+15.2%",
      positive: true,
    },
    {
      icon: BarChart3,
      label: "ROE",
      value: "18.5%",
      change: "+2.1%",
      positive: true,
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">Kết Quả Kinh Doanh</h2>
          <p className="mt-4 text-muted-foreground md:text-lg text-pretty">Tổng quan tài chính năm 2023</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="mb-1 text-sm text-muted-foreground">{item.label}</div>
                <div className="mb-2 text-2xl font-bold text-foreground">{item.value}</div>
                <div className={`text-sm font-medium ${item.positive ? "text-green-600" : "text-red-600"}`}>
                  {item.change} so với 2022
                </div>
              </Card>
            )
          })}
        </div>

        {/* Chart Placeholder */}
        <Card className="mt-8 p-6">
          <h3 className="mb-6 text-xl font-semibold text-foreground">Biểu đồ doanh thu & lợi nhuận</h3>
          <div className="aspect-[2/1] bg-muted rounded flex items-center justify-center">
            <p className="text-muted-foreground">Biểu đồ tài chính</p>
          </div>
        </Card>
      </div>
    </section>
  )
}
