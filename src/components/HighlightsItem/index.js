import './index.css';

function HighlightsItem({img, title, price, description}) {
  return (
    <>
      <div className="highlights-item">
        {img.src && (
          <div className="highlights-item-img">
            <img src={img?.src || ''} alt={img?.alt || ''} />
          </div>
        )}
        <div className="highlights-item-heading">
          {title && <h3>{title}</h3>}
          {price && <span className="highlights-item-price">{price}</span>}
        </div>
        {description && <p className="highlights-item-description">{description}</p>}
        <p className="highlights-item-link">
          <a href="#">Order a delivery</a>
        </p>
      </div>
    </>
  );
}

export default HighlightsItem;
