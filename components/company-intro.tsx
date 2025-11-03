import { Target, Eye, Award } from "lucide-react"

export function CompanyIntro() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-balance">Lê Nguyên Group - Gắn kết niềm tin, dựng xây giá trị</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Chuyên tư vấn và cung cấp các sản phẩm bất động sản chất lượng cao tại khu vực Đông Sài Gòn. Với phương châm
            "Nhiệt Tâm – Uy Tín – Gắn Kết Dài Lâu", chúng tôi cam kết mang đến cho khách hàng những sản phẩm tốt nhất
            với dịch vụ tận tâm.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Nhiệt Tâm</h3>
            <p className="text-muted-foreground leading-relaxed">
              Tận tâm tư vấn, đồng hành cùng khách hàng trong mọi giai đoạn từ tìm kiếm đến sở hữu bất động sản
            </p>
          </div>

          <div className="space-y-4 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Uy Tín</h3>
            <p className="text-muted-foreground leading-relaxed">
              Minh bạch thông tin, pháp lý rõ ràng, cam kết chất lượng sản phẩm và dịch vụ
            </p>
          </div>

          <div className="space-y-4 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Gắn Kết Dài Lâu</h3>
            <p className="text-muted-foreground leading-relaxed">
              Xây dựng mối quan hệ bền vững, hỗ trợ khách hàng ngay cả sau khi giao dịch hoàn tất
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
