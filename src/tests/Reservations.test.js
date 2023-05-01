import { render, queryByAttribute, waitFor } from "@testing-library/react";
import Reservations, { initializeTimes, updateTimes } from "../pages/Reservations/index.js";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../api/api";

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));
jest.mock('../api/api', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn()
}));
const getById = queryByAttribute.bind(null, 'id');

beforeEach(() => {
  // Mock the fetchAPI function to return some dummy data
  // fetchAPI.mockReturnValue(['10:00', '11:00', '12:00', '01:00', '17:00']);
  const mockFetchAPIResponse = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  //fetchAPI.mockResolvedValueOnce(mockFetchAPIResponse);
  fetchAPI.mockReturnValue(mockFetchAPIResponse);
});

afterEach(() => {
  // Reset the mocks
  jest.resetAllMocks();
});

describe("Reservations test", () => {

  test('Renders the Form fullname input', () => {
    const { container } = render(<Reservations />);
    const fullnameElement = getById(container, 'fullname');
    expect(fullnameElement).toBeInTheDocument();
  });

  test('check reducer behavior', async () => {
    const mockDate = new Date('2022-05-01T12:00:00Z');
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(<Reservations />);
    const val = initializeTimes();
    expect(val).toStrictEqual({times: []});
    const val2 = await updateTimes({times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']}, { type: 'update' });
    expect(val2).toStrictEqual({times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']});
  });
});
