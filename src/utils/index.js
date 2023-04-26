export const saveBookingToLocalStorage = (booking) => {
  const currentState = JSON.parse(localStorage.getItem('bookings')) || [];
  currentState.push(booking);
  localStorage.setItem('bookings', JSON.stringify(currentState));
}
