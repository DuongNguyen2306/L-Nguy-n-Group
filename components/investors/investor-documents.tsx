import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"

export function InvestorDocuments() {
  const documents = [
    {
      category: "Báo cáo tài chính",
      items: [
        { name: "Báo cáo tài chính Q4/2023", date: "15/01/2024", size: "2.5 MB" },
        { name: "Báo cáo tài chính Q3/2023", date: "15/10/2023", size: "2.3 MB" },
        { name: "Báo cáo tài chính Q2/2023", date: "15/07/2023", size: "2.4 MB" },
      ],
    },
    {
      category: "Báo cáo thường niên",
      items: [
        { name: "Báo cáo thường niên 2023", date: "31/03/2024", size: "8.5 MB" },
        { name: "Báo cáo thường niên 2022", date: "31/03/2023", size: "7.8 MB" },
      ],
    },
    {
      category: "Công bố thông tin",
      items: [
        { name: "Nghị quyết ĐHĐCĐ 2024", date: "20/04/2024", size: "1.2 MB" },
        { name: "Thông báo chia cổ tức 2023", date: "15/03/2024", size: "850 KB" },
        { name: "Báo cáo quản trị công ty 2023", date: "10/03/2024", size: "3.2 MB" },
      ],
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">Tài Liệu Nhà Đầu Tư</h2>
          <p className="mt-4 text-muted-foreground md:text-lg text-pretty">
            Báo cáo tài chính và tài liệu công bố thông tin
          </p>
        </div>

        <div className="space-y-8">
          {documents.map((category, index) => (
            <div key={index}>
              <h3 className="mb-4 text-xl font-semibold text-foreground">{category.category}</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((doc, docIndex) => (
                  <Card key={docIndex} className="p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <FileText className="h-8 w-8 text-primary" />
                      <Button variant="ghost" size="icon">
                        <Download className="h-5 w-5" />
                      </Button>
                    </div>
                    <h4 className="mb-2 font-semibold text-foreground text-balance">{doc.name}</h4>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{doc.date}</span>
                      <span>{doc.size}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
