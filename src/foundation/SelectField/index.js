import { useEffect, useState } from 'react';
import './index.css';

function SelectField({options, value, onChange, labelText, id}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(value || labelText);
  const [val, setVal] = useState(value);

  const onItemClick = (e, item) => {
    e.stopPropagation();
    e.preventDefault();
    setSelected(item);
    setVal(item);
  };

  useEffect(() => {
    setMenuOpen(false);
    if (onChange) {
      onChange(val);
    }
  }, [selected]);

  const onMainButtonClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setMenuOpen(!menuOpen);
  }

  const onLabelClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setMenuOpen(true);
  }

  const windowClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('click', windowClick);
    return () => {
      window.removeEventListener('click', windowClick);
    }
  }, []);

  const isActiveClass = menuOpen ? 'active' : '';

  return (
    <>
      <div className={`select ${isActiveClass}`}>
        <label htmlFor={id} onClick={(e) => onLabelClick(e)} aria-label={labelText}>{labelText}</label>
        <input id={id} type="hidden" value={selected} />
        <div className="select-holder">
          <button id={`${id}-button`} onClick={(e) => onMainButtonClick(e)}>{selected}</button>
          <ul>
            {menuOpen && options?.map((item, i) => (
              <li key={item} value={item}>
                <button id={`${id}-${i}`} onClick={(e) => onItemClick(e, item)}>{item}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SelectField;
