import { render, queryByAttribute } from "@testing-library/react";
import Reservations, { initializeTimes, updateTimes } from "../pages/Reservations/index.js";

describe("Reservations test", () => {
  const getById = queryByAttribute.bind(null, 'id');
  const { container } = render(<Reservations />);

  test('Renders the Form fullname input', () => {
    const fullnameElement = getById(container, 'fullname');
    expect(fullnameElement).toBeInTheDocument();
  });

  test('check reducer behavior', () => {
    const val = initializeTimes();
    expect(val).toStrictEqual({times: []});
    const val2 = updateTimes({}, { type: 'update' });
    expect(val2).toStrictEqual({times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']});
  });
});
