import { Card } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

export function StockInfo() {
  return (
    <section className="border-b bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="p-6">
            <div className="mb-2 text-sm text-muted-foreground">Mã chứng khoán</div>
            <div className="text-2xl font-bold text-foreground">KDH</div>
            <div className="mt-1 text-xs text-muted-foreground">HOSE</div>
          </Card>

          <Card className="p-6">
            <div className="mb-2 text-sm text-muted-foreground">Giá hiện tại</div>
            <div className="text-2xl font-bold text-foreground">32,500 VNĐ</div>
            <div className="mt-1 flex items-center gap-1 text-sm text-green-600">
              <TrendingUp className="h-4 w-4" />
              <span>+2.5% (+800)</span>
            </div>
          </Card>

          <Card className="p-6">
            <div className="mb-2 text-sm text-muted-foreground">Khối lượng</div>
            <div className="text-2xl font-bold text-foreground">1.2M</div>
            <div className="mt-1 text-xs text-muted-foreground">Cổ phiếu</div>
          </Card>

          <Card className="p-6">
            <div className="mb-2 text-sm text-muted-foreground">Vốn hóa</div>
            <div className="text-2xl font-bold text-foreground">8,500 tỷ</div>
            <div className="mt-1 text-xs text-muted-foreground">VNĐ</div>
          </Card>
        </div>
      </div>
    </section>
  )
}
