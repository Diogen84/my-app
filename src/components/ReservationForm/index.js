import { useEffect, useState } from 'react';
import SelectField from '../../foundation/SelectField';
import './index.css';
import InputField from '../../foundation/InputField';
import CheckboxField from '../../foundation/CheckboxField';
import ErrorField from '../../foundation/ErrorField';

function ReservationForm({availableTimes, dispatch}) {
  const [formSubmitClicked, setFormSubmitClicked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formState, setFormState] = useState({
    fullName: '',
    guests: 0,
    type: '',
    orderInAdvance: false,
    date: '',
    time: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    guests: '',
    date: '',
    time: ''
  });

  useEffect(() => {
    setErrors({
      fullName: !formState.fullName ? 'Please enter your full name' : '',
      guests: formState.guests <=0 || formState.guests > 10 ? 'Please select correct number of guests.' : '',
      date: !formState.date ? 'Please select the date' : '',
      time: !formState.time ? 'Please select the time after the date selection' : ''
    });
  }, [formState]);

  useEffect(() => {
    const isErrors = !!(Object.values(errors).filter((item) => item?.length > 0)?.length);
    setIsError(isErrors);
  }, [errors]);

  useEffect(() => {
    if (dispatch) {
      dispatch({ type: 'init' });
    }
  }, []);

  const onChange = (value) => {
    setFormState({
      ...formState,
      ...value
    });
  };

  const onChangeDate = (value) => {
    dispatch({type: 'update'});
    setFormState({
      ...formState,
      ...value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitClicked(true);
    const isNotValid = !!Object.values(errors).filter((item) => item?.length > 0)?.length;
    if (isNotValid) {
      console.log('form invalid');
    } else {
      console.log('form submitted');
    }
  };

  return (
    <>
      <form className="reservation-form">
        <div className="reservation-form-holder">
          <div>
            <div className="reservation-form-row">
              <div className="reservation-form-col">
                <InputField
                  type='text'
                  id="fullname"
                  labelText="Full name:"
                  value={formState.fullName}
                  onChange={(value) => onChange({ fullName: value })}
                />
                {formSubmitClicked && <ErrorField msg={errors.fullName} />}
              </div>
              <div className="reservation-form-col">
                <InputField
                  type='number'
                  min="1"
                  max="10"
                  id="guests"
                  labelText="Number of guests:"
                  value={formState.guests}
                  onChange={(value) => onChange({ guests: value })}
                />
                {formSubmitClicked && <ErrorField msg={errors.guests} />}
              </div>
            </div>
            <div className="reservation-form-row">
              <div className="reservation-form-col">
                <InputField
                  type="date"
                  id="res-date"
                  labelText="Choose date:"
                  value={formState.date}
                  onChange={(value) => onChangeDate({ date: value })}
                />
                {formSubmitClicked && <ErrorField msg={errors.date} />}
              </div>
              <div className="reservation-form-col">
                <SelectField
                  id="res-time"
                  labelText="Choose time:"
                  options={availableTimes || []}
                  value={formState.time}
                  onChange={(value) => onChange({ time: value })}
                />
                {formSubmitClicked && <ErrorField msg={errors.time} />}
              </div>
            </div>
            <div className="reservation-form-row">
              <div className="reservation-form-col">
                <SelectField
                  id="occasion"
                  labelText="Occasion:"
                  options={['Birthday', 'Engagement', 'Annivarsary']}
                  value={formState.type}
                  onChange={(value) => onChange({ type: value })}
                />
                {formSubmitClicked && <ErrorField msg={errors.type} />}
              </div>
              <div className="reservation-form-col">
                <CheckboxField
                  id="check"
                  labelText="Order in advance"
                  value={formState.orderInAdvance}
                  onChange={(value) => onChange({ orderInAdvance: value })}
                />
              </div>
            </div>
          </div>
          <div className="reservation-form-submit">
            <input
              data-testid="submit"
              disabled={isError && formSubmitClicked}
              type="submit"
              className="btn full-width"
              value="Make Your reservation"
              onClick={(e) => onSubmit(e)}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default ReservationForm;
