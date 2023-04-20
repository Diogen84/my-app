import './index.css';
import restauranfood from '../../assets/images/restauranfood.jpg';

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediteranian restaurant, focused on traditional recipes served with a modern twist.</p>
            <button className="btn">Reserve a table</button>
          </div>
          <div className="hero-image">
            <img src={restauranfood} alt="Little lemon promo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
