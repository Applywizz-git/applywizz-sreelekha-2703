import { resumeData } from "@/data/resume";

const Footer = () => (
  <footer className="py-8 border-t border-border/50" role="contentinfo">
    <div className="container mx-auto px-6 text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()}{" "}
        <span style={{ color: "#3b82f6" }}>{resumeData.name}</span>. All rights
        reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
