import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactMap } from "@/components/contact/contact-map"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] bg-gradient-to-br from-primary to-accent">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?key=c0nt4ct')] bg-cover bg-center opacity-20" />
          <div className="container relative mx-auto flex h-full items-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold text-white md:text-5xl text-balance">Liên Hệ Với Chúng Tôi</h1>
              <p className="mt-4 text-lg text-white/90 text-pretty">Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn</p>
            </div>
          </div>
        </section>

        <ContactInfo />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <ContactForm />
              <ContactMap />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
