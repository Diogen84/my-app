import { useEffect, useState } from 'react';
import './index.css';

function CheckboxField({value, onChange, labelText, id}) {
  const [checked, setChecked] = useState(false);
  const onInputChange = () => {
    setChecked(!checked);
    if (onChange) {
      onChange(!checked);
    }
  };

  useEffect(() => {
    setChecked(!!value);
  }, [value]);

  return (
    <>
      <div className="checkbox">
        <input type="checkbox" checked={checked} onChange={onInputChange} id={id} />
        <label htmlFor={id}>{labelText}</label>
      </div>
    </>
  );
}

export default CheckboxField;
