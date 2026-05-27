import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import IntroVideo from '@/components/IntroVideo';
import Testimonials from '@/components/Testimonials';
import TestimonialsVideo from '@/components/TestimonialsVideo';
import Problem from '@/components/Problem';
import Eligibility from '@/components/Eligibility';
import Process from '@/components/Process';
import WhyLuis from '@/components/WhyLuis';
import NoFees from '@/components/NoFees';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <IntroVideo />
      <Testimonials />
      <TestimonialsVideo />
      <main>
        <Problem />
        <Eligibility />
        <Process />
        <WhyLuis />
        <NoFees />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
