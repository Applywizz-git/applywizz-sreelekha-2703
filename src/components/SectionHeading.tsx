const SectionHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="text-center mb-16" data-aos="fade-up">
    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
    )}
    <div
      className="w-16 h-0.5 mx-auto mt-6"
      style={{ background: "linear-gradient(90deg, #C6A85B, #E7D39F, #B8963A)" }}
      aria-hidden="true"
    />
  </div>
);

export default SectionHeading;
