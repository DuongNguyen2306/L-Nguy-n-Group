import { Card } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

export function MissionVision() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">Sứ Mệnh & Tầm Nhìn</h2>
          <p className="mt-4 text-muted-foreground md:text-lg text-pretty">
            Định hướng phát triển và giá trị cốt lõi của Lê Nguyên Group
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="p-8">
            <Target className="h-12 w-12 text-primary mb-4" />
            <h3 className="mb-4 text-2xl font-semibold text-foreground">Sứ Mệnh</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Cung cấp dịch vụ tư vấn bất động sản chuyên nghiệp, minh bạch và tận tâm, giúp khách hàng tìm được sản
              phẩm phù hợp nhất với nhu cầu và khả năng tài chính.
            </p>
          </Card>

          <Card className="p-8">
            <Eye className="h-12 w-12 text-primary mb-4" />
            <h3 className="mb-4 text-2xl font-semibold text-foreground">Tầm Nhìn</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Trở thành đơn vị tư vấn bất động sản được tin tưởng hàng đầu tại khu vực Đông Sài Gòn, nơi khách hàng luôn
              tìm đến khi có nhu cầu về nhà đất.
            </p>
          </Card>

          <Card className="p-8">
            <Heart className="h-12 w-12 text-primary mb-4" />
            <h3 className="mb-4 text-2xl font-semibold text-foreground">Giá Trị Cốt Lõi</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>Nhiệt tâm trong tư vấn</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>Uy tín và minh bạch</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>Gắn kết dài lâu</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>Đồng hành cùng khách hàng</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
