import { Card } from "@/components/ui/card"

export function CompanyHistory() {
  const milestones = [
    {
      year: "2019",
      title: "Thành lập công ty",
      description:
        "Lê Nguyên Group được thành lập với sứ mệnh mang đến dịch vụ tư vấn BĐS chuyên nghiệp tại TP Thủ Đức",
    },
    {
      year: "2020",
      title: "Mở rộng mạng lưới",
      description: "Xây dựng mối quan hệ với các chủ đầu tư uy tín, mở rộng danh mục sản phẩm đa dạng",
    },
    {
      year: "2022",
      title: "Văn phòng chính thức",
      description: "Khai trương văn phòng tại 299 Liên Phường, TP Thủ Đức, tạo điểm đến tin cậy cho khách hàng",
    },
    {
      year: "2024",
      title: "Phát triển bền vững",
      description: "Đạt mốc 500+ khách hàng tin tưởng, cam kết đồng hành dài lâu với mỗi giao dịch",
    },
    {
      year: "2025",
      title: "Tầm nhìn mới",
      description: "Tiếp tục mở rộng dịch vụ, nâng cao chất lượng tư vấn, trở thành đối tác tin cậy hàng đầu khu vực",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">Hành Trình Phát Triển</h2>
          <p className="mt-4 text-muted-foreground md:text-lg text-pretty">
            Từ những bước đi đầu tiên đến đối tác tin cậy của khách hàng
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-border md:left-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 h-4 w-4 rounded-full bg-primary md:left-1/2 md:-translate-x-1/2" />

                <div className="ml-20 flex-1 md:ml-0 md:px-8">
                  <Card className="p-6">
                    <div className="mb-2 text-2xl font-bold text-primary">{milestone.year}</div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground">{milestone.title}</h3>
                    <p className="text-muted-foreground text-pretty">{milestone.description}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
