export default function IntroVideo() {
  return (
    <section className="intro-video" aria-label="Resumen del servicio en video">
      <div className="container">
        <p className="intro-video__label">Así de sencillo es el trámite</p>
        <video
          className="intro-video__player"
          src="/assets/intro.mp4"
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
