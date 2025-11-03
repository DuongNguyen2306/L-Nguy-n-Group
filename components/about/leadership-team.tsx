import { Card } from "@/components/ui/card"

export function LeadershipTeam() {
  const leaders = [
    {
      name: "Lê Văn Nguyên",
      position: "Giám đốc điều hành",
      image: "/professional-asian-business-executive-portrait.jpg",
      bio: "Hơn 10 năm kinh nghiệm trong lĩnh vực bất động sản khu vực TP.HCM",
    },
    {
      name: "Nguyễn Thị Mai",
      position: "Trưởng phòng Tư vấn",
      image: "/asian-female-executive.png",
      bio: "Chuyên gia tư vấn với 8 năm kinh nghiệm, am hiểu thị trường Đông Sài Gòn",
    },
    {
      name: "Trần Minh Tuấn",
      position: "Chuyên viên Pháp lý",
      image: "/professional-asian-business-manager-portrait.jpg",
      bio: "Chuyên trách về thẩm định pháp lý và hỗ trợ thủ tục giao dịch",
    },
    {
      name: "Phạm Thu Hà",
      position: "Chuyên viên Tư vấn",
      image: "/testimonial-2.png",
      bio: "Tư vấn viên nhiệt tình với kinh nghiệm 5 năm trong lĩnh vực BĐS",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">Đội Ngũ Tư Vấn</h2>
          <p className="mt-4 text-muted-foreground md:text-lg text-pretty">
            Đội ngũ chuyên nghiệp, tận tâm và giàu kinh nghiệm
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">{leader.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{leader.position}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-pretty">{leader.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
