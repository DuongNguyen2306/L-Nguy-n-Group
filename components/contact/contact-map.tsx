import { Card } from "@/components/ui/card"

export function ContactMap() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground text-balance">Vị Trí Văn Phòng</h2>
        <p className="mt-2 text-muted-foreground text-pretty">Trụ sở chính của Khang Điền tại trung tâm TP.HCM</p>
      </div>

      <Card className="overflow-hidden">
        <div className="aspect-square bg-muted">
          <img src="/placeholder.svg?key=m4p2" alt="Office location map" className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">Trụ sở chính</h3>
          <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
            Tầng 10, Tòa nhà ABC
            <br />
            123 Đường XYZ, Phường 1, Quận 1
            <br />
            TP. Hồ Chí Minh, Việt Nam
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Điện thoại:</span>
              <span className="font-medium text-foreground">(028) 3636 6789</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Email:</span>
              <span className="font-medium text-foreground">info@khangdien.com</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
