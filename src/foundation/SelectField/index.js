import { useEffect, useState } from 'react';
import './index.css';

function SelectField({options, value, onChange, labelText, id}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(labelText);

  const onItemClick = (e, item) => {
    e.stopPropagation();
    e.preventDefault();
    if (onChange) {
      setActiveItem(item);
      onChange(item);
      setMenuOpen(false);
    }
  };

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
    setActiveItem(value ? value : labelText);
    window.addEventListener('click', windowClick);
    return () => {
      window.removeEventListener('click', windowClick);
    }
  }, []);

  const isActiveClass = menuOpen ? 'active' : '';

  return (
    <>
      <div className={`select ${isActiveClass}`}>
        <label onClick={(e) => onLabelClick(e)}>{labelText}</label>
        <div className="select-holder">
          <button onClick={(e) => onMainButtonClick(e)}>{activeItem}</button>
          <ul>
            {menuOpen && options.map((item) => (
              <li key={item} value={item}>
                <button onClick={(e) => onItemClick(e, item)}>{item}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SelectField;
