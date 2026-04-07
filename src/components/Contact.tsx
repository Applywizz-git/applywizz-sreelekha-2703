import SectionHeading from "./SectionHeading";
import { resumeData } from "@/data/resume";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: resumeData.email, href: `mailto:${resumeData.email}` },
  { icon: Phone, label: "Phone", value: resumeData.phone, href: `tel:${resumeData.phone}` },
  { icon: MapPin, label: "Location", value: resumeData.location },
];

const Contact = () => (
  <section id="contact" className="section-padding bg-card/30" aria-label="Contact">
    <div className="container mx-auto px-6">
      <SectionHeading
        title="Get in Touch"
        subtitle="Feel free to reach out for opportunities, collaborations, or just a conversation."
      />

      <div
        className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {contactInfo.map((info) => (
          <div
            key={info.label}
            className="bg-card rounded-xl p-6 border border-border/50 text-center hover:border-primary/30 transition-colors group"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 transition-shadow group-hover:shadow-[0_0_20px_rgba(59, 130, 246, 0.25)]"
              style={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
            >
              <info.icon className="w-5 h-5" style={{ color: "#3b82f6" }} />
            </div>
            <p className="text-xs text-muted-foreground mb-2">{info.label}</p>
            {info.href ? (
              <a
                href={info.href}
                className="text-sm font-medium hover:text-primary transition-colors break-all gold-focus rounded"
                style={{ "--tw-ring-color": "#3b82f6" } as React.CSSProperties}
              >
                {info.value}
              </a>
            ) : (
              <p className="text-sm font-medium">{info.value}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
