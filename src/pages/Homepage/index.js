import About from "../../components/About";
import Hero from "../../components/Hero";
import Highlights from "../../components/Highlights";
import Testimonials from "../../components/Testimonials";
import restauranfood from '../../assets/images/restauranfood.jpg';

function Homepage() {
  const heroData = {
    title: 'Little Lemon',
    subtitle: 'Chicago',
    text: 'We are a family owned Mediteranian restaurant, focused on traditional recipes served with a modern twist.',
    btnText: 'Reserve a table',
    image: {
      src: restauranfood,
      alt: 'Little lemon promo'
    }
  };

  return (
    <>
      <Hero {...heroData} />
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
}

export default Homepage;
