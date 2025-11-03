import { Card } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export function InvestorCalendar() {
  const events = [
    {
      date: "20/04/2024",
      title: "Đại hội đồng cổ đông thường niên 2024",
      type: "ĐHĐCĐ",
      status: "Sắp diễn ra",
    },
    {
      date: "15/04/2024",
      title: "Công bố báo cáo tài chính Q1/2024",
      type: "Báo cáo",
      status: "Sắp diễn ra",
    },
    {
      date: "31/03/2024",
      title: "Công bố báo cáo thường niên 2023",
      type: "Báo cáo",
      status: "Đã hoàn thành",
    },
    {
      date: "15/03/2024",
      title: "Chi trả cổ tức năm 2023",
      type: "Cổ tức",
      status: "Đã hoàn thành",
    },
  ]

  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">Lịch Sự Kiện</h2>
          <p className="mt-4 text-muted-foreground md:text-lg text-pretty">
            Các sự kiện quan trọng dành cho nhà đầu tư
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {events.map((event, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-3">
                    <span className="text-sm font-semibold text-primary">{event.date}</span>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      {event.type}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        event.status === "Sắp diễn ra" ? "bg-accent/10 text-accent" : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground">{event.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
