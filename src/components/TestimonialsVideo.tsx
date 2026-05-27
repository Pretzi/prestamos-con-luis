export default function TestimonialsVideo() {
  return (
    <section className="intro-video" aria-label="Testimonios reales de clientes via WhatsApp">
      <div className="container">
        <p className="intro-video__label">Lo que dicen nuestros clientes</p>
        <video
          className="intro-video__player"
          src="/assets/testimonials.mp4"
          controls
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/background.png"
        />
      </div>
    </section>
  );
}
