import './index.css';
import About1 from '../../assets/images/about1.jpg';
import About2 from '../../assets/images/about2.jpg';

function About() {
  return (
    <>
      <div className='about'>
        <div className='about-wrapper'>
          <div className="about-content">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediteranian restaurant, focused on traditional recipes served with a modern twist.</p>
          </div>
          <div className='about-images'>
            <div>
              <img src={About2} alt="restaurant" />
            </div>
            <div>
              <img src={About1} alt="cooking" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
