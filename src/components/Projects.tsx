import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeading from "./SectionHeading";
import { resumeData } from "@/data/resume";
import { FolderOpen } from "lucide-react";

const Projects = () => (
  <section id="projects" className="section-padding" aria-label="Projects">
    <div className="container mx-auto px-6">
      <SectionHeading title="Projects" />

      <div data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {resumeData.projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-card rounded-xl p-6 border border-border/50 h-full relative overflow-hidden group hover:border-[#C6A85B]/40 transition-colors">
                {/* Subtle gold top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{
                    background:
                      "linear-gradient(90deg, #C6A85B, #E7D39F, #B8963A)",
                  }}
                  aria-hidden="true"
                />

                {/* Project Image */}
                {project.image && (
                  <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <FolderOpen className="w-5 h-5" style={{ color: "#C6A85B" }} />
                  <h3 className="text-base font-display font-bold leading-snug">
                    {project.title}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {project.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span
                        className="w-1 h-1 rounded-full mt-2 shrink-0"
                        style={{ backgroundColor: "#C6A85B" }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </section>
);

export default Projects;
