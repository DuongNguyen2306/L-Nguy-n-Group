import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function InvestorContact() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">Liên Hệ Quan Hệ Cổ Đông</h2>
          <p className="mt-4 text-muted-foreground md:text-lg text-pretty">Chúng tôi luôn sẵn sàng hỗ trợ nhà đầu tư</p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="p-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">Email</h3>
                <p className="text-sm text-muted-foreground">ir@khangdien.com</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">Điện thoại</h3>
                <p className="text-sm text-muted-foreground">(028) 3636 6789</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">Địa chỉ</h3>
                <p className="text-sm text-muted-foreground">Tầng 10, Tòa nhà ABC, Quận 1, TP.HCM</p>
              </div>
            </div>

            <div className="mt-8 border-t pt-8">
              <h3 className="mb-4 text-center font-semibold text-foreground">Phòng Quan hệ Cổ đông</h3>
              <p className="text-center text-sm text-muted-foreground leading-relaxed">
                Giờ làm việc: Thứ 2 - Thứ 6, 8:00 - 17:00
                <br />
                Chúng tôi cam kết phản hồi mọi yêu cầu trong vòng 24 giờ làm việc
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
