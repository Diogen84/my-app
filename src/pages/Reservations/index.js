import Hero from "../../components/Hero";
import table from '../../assets/images/table.jpg';
import ReservationForm from "../../components/ReservationForm";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../../api/api";

export function initializeTimes() {
  return {
    times: []
  };
}

export function updateTimes(state, action) {
  switch (action.type) {
    case 'update':
      return {
        ...state,
        times: fetchAPI(action.payload)
      };
    case 'init':
      return {
        ...state,
        times: fetchAPI(new Date())
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

  const submitForm = (data) => submitAPI(data);

  return (
    <>
        <Hero {...heroData} />
        <ReservationForm
          availableTimes={state.times}
          dispatch={dispatch}
          submitForm={submitForm}
        />
    </>
  );
}

export default Reservations;
