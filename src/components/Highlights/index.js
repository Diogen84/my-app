import HighlightsItem from '../HighlightsItem';
import './index.css';
import Salad from '../../assets/images/greek salad.jpg';
import Bruchetta from '../../assets/images/bruschetta.jpg';
import LemonDessert from '../../assets/images/lemon dessert.jpg';

function Highlights() {
  return (
    <>
      <div className="highlights">
        <div className="highlights-wrapper">
          <div className="highlights-header">
            <h2>Specials</h2>
            <button className="btn">Online menu</button>
          </div>
          <div className="highlights-list">
            <HighlightsItem
              img={{
                src: Salad,
                alt: ''
              }}
              title={'Greek salad'}
              price={'$12.99'}
              description={'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'}
            />
            <HighlightsItem
              img={{
                src: Bruchetta,
                alt: ''
              }}
              title={'Bruchetta'}
              price={'$5.99'}
              description={'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'}
            />
            <HighlightsItem
              img={{
                src: LemonDessert,
                alt: ''
              }}
              title={'Lemon Dessert'}
              price={'$5.00'}
              description={'This comes straight from grandma\'s recipe book, every last ingridient has been sourced and is as authentic as can be imagined.'}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Highlights;
