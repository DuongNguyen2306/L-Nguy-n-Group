import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectGallery } from "@/components/projects/project-gallery"
import { ProjectInfo } from "@/components/projects/project-info"
import { ProjectAmenities } from "@/components/projects/project-amenities"
import { ProjectLocation } from "@/components/projects/project-location"
import { ProjectFloorPlans } from "@/components/projects/project-floor-plans"
import { ContactFormSection } from "@/components/contact-form-section"

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  // In a real app, fetch project data based on id
  const project = {
    id,
    name: "Safira Khang Điền",
    location: "Quận 9, TP.HCM",
    type: "Căn hộ cao cấp",
    status: "Đang bán",
    price: "Từ 2.5 tỷ",
    description:
      "Safira Khang Điền là dự án căn hộ cao cấp nằm tại vị trí đắc địa Quận 9, TP.HCM. Với thiết kế hiện đại, tiện ích đầy đủ và không gian sống xanh, Safira hứa hẹn mang đến cuộc sống lý tưởng cho cư dân.",
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProjectGallery projectName={project.name} />
        <ProjectInfo project={project} />
        <ProjectAmenities />
        <ProjectFloorPlans />
        <ProjectLocation location={project.location} />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  )
}
