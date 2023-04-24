import { useEffect, useRef } from 'react';
import './index.css';

function InputField({type, value, onChange, labelText, id, ...attr}) {
  const ref = useRef(null);

  const onInputChange = () => {
    const isNumber = type === 'number';

    if (onChange && ref?.current) {
      const val = ref?.current?.value;
      const updatedVal = isNumber ? parseInt(val || 0, 10) : val;
      ref.current.value = isNumber ? updatedVal : val;
      onChange(updatedVal);
    }
  };

  useEffect(() => {
    if (ref?.current) {
      ref.current.value = value;
    }
  }, []);

  return (
    <>
      <div className='input'>
        <label htmlFor={id}>{labelText}</label>
        <input type={type} ref={ref} onChange={onInputChange} id={id} {...attr} />
      </div>
    </>
  );
}

export default InputField;
