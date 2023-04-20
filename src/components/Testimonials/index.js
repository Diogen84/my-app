import TestimonialItem from '../TestimonialItem';
import './index.css';
import UserPhoto from '../../assets/images/user.jpg';

function Testimonials() {
  return (
    <>
      <div className='testimonials'>
        <div className='testimonials-wrapper'>
          <h2>Testimonials</h2>
          <div className='testimonials-list'>
            <TestimonialItem
              rating={4}
              image={{
                src: UserPhoto,
                alt: 'user'
              }}
              name={'Name'}
              surname={'Surname'}
              review={'Review'}
            />
            <TestimonialItem
              rating={4}
              image={{
                src: UserPhoto,
                alt: 'user'
              }}
              name={'Name'}
              surname={'Surname'}
              review={'Review'}
            />
            <TestimonialItem
              rating={5}
              image={{
                src: UserPhoto,
                alt: 'user'
              }}
              name={'Name'}
              surname={'Surname'}
              review={'Review'}
            />
            <TestimonialItem
              rating={5}
              image={{
                src: UserPhoto,
                alt: 'user'
              }}
              name={'Name'}
              surname={'Surname'}
              review={'Review'}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
