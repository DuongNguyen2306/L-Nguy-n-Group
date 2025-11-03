import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Điện thoại",
      details: ["Hotline: 0937 680 380"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@lenguyengroup.com"],
    },
    {
      icon: MapPin,
      title: "Địa chỉ",
      details: ["299 Liên Phường", "TP Thủ Đức, TP.HCM"],
    },
    {
      icon: Clock,
      title: "Giờ làm việc",
      details: ["Thứ 2 - Thứ 7: 8:00 - 18:00", "Chủ nhật: 8:00 - 12:00"],
    },
  ]

  return (
    <section className="border-b py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <Card key={index} className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">{method.title}</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  {method.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
