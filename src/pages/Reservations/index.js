import Hero from "../../components/Hero";
import table from '../../assets/images/table.jpg';
import ReservationForm from "../../components/ReservationForm";
import { useReducer } from "react";

function initializeTimes() {
  return {
    times: []
  };
}

function updateTimes(state, action) {
  switch (action.type) {
    case 'update':
      return {
        ...state,
        times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']// action.payload
      };
    case 'init':
      return {
        ...state,
        times: []
      };
    default:
      throw new Error();
  }
}

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

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <>
      <Hero {...heroData} />
      <ReservationForm
        availableTimes={state.times}
        dispatch={dispatch}
      />
    </>
  );
}

export default Reservations;
