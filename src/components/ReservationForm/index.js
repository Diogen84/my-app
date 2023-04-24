import { useEffect, useState } from 'react';
import SelectField from '../../foundation/SelectField';
import './index.css';
import InputField from '../../foundation/InputField';
import CheckboxField from '../../foundation/CheckboxField';

function ReservationForm({availableTimes, dispatch}) {
  const [formState, setFormState] = useState({
    fullName: '',
    guests: 0,
    type: 'Occasion',
    orderInAdvance: false,
    date: '',
    time: ''
  });

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

  useEffect(() => {
    dispatch({ type: 'init' })
  }, []);

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
              </div>
              <div className="reservation-form-col">
                <InputField
                  type='number'
                  min="1"
                  max="10"
                  id="guests"
                  labelText="Number of guests"
                  value={formState.guests}
                  onChange={(value) => onChange({ guests: value })}
                />
              </div>
            </div>
            <div className="reservation-form-row">
              <div className="reservation-form-col">
                <SelectField
                  id="res-time"
                  labelText="Occasion"
                  options={['Occasion', 'Birthday', 'Engagement', 'Annivarsary']}
                  value={formState.type}
                  onChange={(value) => onChange({ type: value })}
                />
              </div>
              <div className="reservation-form-col">
                <SelectField
                  id="res-time"
                  labelText="Choose time"
                  options={availableTimes || []}
                  value={formState.time}
                  onChange={(value) => onChange({ time: value })}
                />
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
            <input type="submit" className="btn full-width" value="Make Your reservation" />
          </div>
        </div>
      </form>
    </>
  );
}

export default ReservationForm;