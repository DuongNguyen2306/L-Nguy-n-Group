"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-balance">Nhận tư vấn miễn phí</h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Để lại thông tin, chuyên viên của chúng tôi sẽ liên hệ tư vấn chi tiết về các dự án phù hợp với nhu cầu
                của bạn.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Hotline</h3>
                  <p className="text-primary-foreground/90">0937 680 380</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-primary-foreground/90">info@lenguyengroup.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Địa chỉ</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    299 Liên Phường
                    <br />
                    TP Thủ Đức, TP.HCM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-background p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Họ và tên *
                </label>
                <Input
                  id="name"
                  placeholder="Nhập họ và tên"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Số điện thoại *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Nhập số điện thoại"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Nhập email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Nội dung
                </label>
                <Textarea
                  id="message"
                  placeholder="Nhập nội dung cần tư vấn"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Gửi thông tin
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
