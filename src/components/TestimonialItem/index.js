import './index.css';
import star from '../../assets/images/star.svg';

function TestimonialItem({rating, image, name, surname, review}) {
  return (
    <>
      <div className='testimonial-item'>
        <div className='testimonial-item-rating'>
          {[...Array(rating)].map((_, i) => (
            <img src={star} key={i} alt="start rating element" />
          ))}
        </div>
        <div className='testimonial-item-details'>
          <div className='testimonial-item-image'>
            <img src={image?.src} alt={image?.alt || ''} />
          </div>
          <div className='testimonial-item-name'>
            {name && <p>{name}</p>}
            {surname && <p>{surname}</p>}
          </div>
        </div>
        {review && <p className='testimonial-item-review'>{review}</p>}
      </div>
    </>
  );
}

export default TestimonialItem;
