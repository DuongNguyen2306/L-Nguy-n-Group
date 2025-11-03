import { Card } from "@/components/ui/card"

export function ShareholderStructure() {
  const shareholders = [
    { type: "Cổ đông lớn", percentage: 45.2, color: "bg-primary" },
    { type: "Cổ đông tổ chức", percentage: 28.5, color: "bg-accent" },
    { type: "Cổ đông cá nhân", percentage: 26.3, color: "bg-secondary" },
  ]

  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">Cơ Cấu Cổ Đông</h2>
          <p className="mt-4 text-muted-foreground md:text-lg text-pretty">
            Phân bổ sở hữu cổ phần tại ngày 31/12/2023
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="p-8">
            {/* Pie Chart Visualization */}
            <div className="mb-8 flex justify-center">
              <div className="relative h-64 w-64">
                <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="20" />
                  {/* Simplified pie chart representation */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="oklch(0.45 0.15 250)"
                    strokeWidth="20"
                    strokeDasharray="45.2 54.8"
                    strokeDashoffset="0"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground">100%</div>
                    <div className="text-sm text-muted-foreground">Cổ phần</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-4">
              {shareholders.map((shareholder, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`h-4 w-4 rounded ${shareholder.color}`} />
                    <span className="font-medium text-foreground">{shareholder.type}</span>
                  </div>
                  <span className="text-lg font-bold text-foreground">{shareholder.percentage}%</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t pt-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <div className="text-sm text-muted-foreground">Tổng số cổ phiếu</div>
                  <div className="text-xl font-bold text-foreground">261,500,000</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Cổ phiếu lưu hành</div>
                  <div className="text-xl font-bold text-foreground">261,500,000</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Cổ phiếu quỹ</div>
                  <div className="text-xl font-bold text-foreground">0</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
