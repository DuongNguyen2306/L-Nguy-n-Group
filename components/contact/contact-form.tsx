"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground text-balance">Gửi Tin Nhắn</h2>
        <p className="mt-2 text-muted-foreground text-pretty">
          Điền thông tin vào form bên dưới và chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất
        </p>
      </div>

      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Họ và tên *</Label>
            <Input
              id="name"
              name="name"
              placeholder="Nguyễn Văn A"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Số điện thoại *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="0901 234 567"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Tiêu đề *</Label>
            <Input
              id="subject"
              name="subject"
              placeholder="Tôi muốn tư vấn về dự án..."
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Nội dung *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Nhập nội dung tin nhắn của bạn..."
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Gửi tin nhắn
          </Button>

          <p className="text-xs text-muted-foreground">
            Bằng việc gửi form này, bạn đồng ý với{" "}
            <a href="#" className="text-primary hover:underline">
              Chính sách bảo mật
            </a>{" "}
            của chúng tôi
          </p>
        </form>
      </Card>
    </div>
  )
}
