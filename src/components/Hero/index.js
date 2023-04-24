import './index.css';

function Hero({title, subtitle, text, btnText, btnHandler, image}) {
  return (
    <>
      <div className="hero">
        <div className="hero-wrapper">
          <div className="hero-content">
            {title && <h2>{title}</h2>}
            {subtitle && <h3>{subtitle}</h3>}
            {text && <p>{text}</p>}
            {btnText && btnHandler && <button className="btn" onClick={btnHandler}>{btnText}</button>}
          </div>
          {image?.src && image?.alt && (
            <div className="hero-image">
              <img src={image.src} alt={image.alt} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Hero;
