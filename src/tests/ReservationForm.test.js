import { render, fireEvent, queryByAttribute, screen } from "@testing-library/react";
import ReservationForm from "../components/ReservationForm/index.js";
import { fetchAPI } from "../api/api";
import { useNavigate } from "react-router-dom";

const getById = queryByAttribute.bind(null, 'id');

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('../api/api', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

beforeEach(() => {
  // Mock the fetchAPI function to return some dummy data
  fetchAPI.mockReturnValue(['10:00', '11:00', '12:00', '01:00', '17:00']);
  const mockNavigate = jest.fn();
  useNavigate.mockReturnValue(mockNavigate);
});

afterEach(() => {
  // Reset the mocks
  jest.resetAllMocks();
});

describe("ReservationForm test", () => {
  const mockData = ['10:00', '11:00', '12:00', '01:00', '17:00'];
  const mockDispatch = jest.fn(() => mockData);

  beforeEach(() => {
    // Mock the fetchAPI function to return some dummy data
    fetchAPI.mockReturnValue(mockData);
  });

  afterEach(() => {
    // Reset the mocks
    jest.resetAllMocks();
    localStorage.clear();
  });

  test('form got error', async () => {
    render(<ReservationForm
      availableTimes={mockData}
      dispatch={mockDispatch}
      submitForm={jest.fn(() => true)}
    />);
    const consoleSpy = jest.spyOn(console, 'log');

    const reservationForm = await screen.findByTestId('reservation-form');
    expect(reservationForm).toBeInTheDocument();

    // Submit form
    const submitButton = screen.getByTestId('submit');
    fireEvent.click(submitButton);

    expect(consoleSpy).toHaveBeenCalledWith('form invalid');
    consoleSpy.mockRestore();
  });

  test('form got submitted', async () => {
    const { container } = render(<ReservationForm
      availableTimes={mockData}
      dispatch={mockDispatch}
      submitForm={jest.fn(() => true)}
    />);
    const reservationForm = await screen.findByTestId('reservation-form');
    expect(reservationForm).toBeInTheDocument();

    const fullNameInput = screen.getByTestId('fullname');
    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });

    const guestsInput = screen.getByTestId('guests');
    fireEvent.change(guestsInput, { target: { value: 5 } });

    const dateButton = getById(container, 'res-time-button');
    fireEvent.click(dateButton);
    const dateTime = getById(container, 'res-time-4');
    fireEvent.click(dateTime);

    const dateInput = screen.getByTestId('res-date');
    fireEvent.change(dateInput, { target: { value: '2023-04-27' } });

    // Submit form
    const submitButton = screen.getByTestId('submit');
    fireEvent.click(submitButton);
    const storedBookings = JSON.parse(localStorage.getItem('bookings'));
    expect(storedBookings).toEqual([
      {
        fullName: 'John Doe',
        guests: 5,
        type: '',
        orderInAdvance: false,
        date: '2023-04-27',
        time: '17:00'
      }
    ]);
  });
});
