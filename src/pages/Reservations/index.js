import Hero from "../../components/Hero";
import table from '../../assets/images/table.jpg';
import ReservationForm from "../../components/ReservationForm";

function Reservations() {
  const heroData = {
    title: 'Reservation',
    subtitle: 'Book a table',
    text: 'We are a family owned Mediteranian restaurant, focused on traditional recipes served with a modern twist.',
    image: {
      src: table,
      alt: 'Book a table promo'
    }
  };
  return (
    <>
      <Hero {...heroData} />
      <ReservationForm />
    </>
  );
}

export default Reservations;
