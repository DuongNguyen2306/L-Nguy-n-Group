"use client"

import Link from "next/link"
import { Building2, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Building2 className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">Lê Nguyên Group</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Trang chủ
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Giới thiệu
          </Link>
          <Link href="/projects" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Dự án
          </Link>
          <Link href="/news" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Tin tức
          </Link>
          <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Liên hệ
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Button size="sm">Nhận tư vấn</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Trang chủ
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Giới thiệu
            </Link>
            <Link href="/projects" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Dự án
            </Link>
            <Link href="/news" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Tin tức
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Liên hệ
            </Link>
            <div className="pt-2">
              <Button size="sm" className="w-full">
                Nhận tư vấn
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
