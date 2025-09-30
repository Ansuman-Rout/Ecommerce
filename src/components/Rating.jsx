const Rating = ({ product }) => {
    const { rate, count } = product.rating;
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.5;
    
    return (
      <div className="d-flex justify-content-center small text-warning mb-2">
        {[...Array(fullStars)].map((_, i) => (
          <i key={i} className="fa fa-star"></i>
        ))}
        {hasHalfStar && <i className="fa-solid fa-star-half-stroke"></i>}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <i key={fullStars + i + 1} className="fa-regular fa-star"></i>
        ))}
        <span className='text-dark mx-2'>{rate} ({count})</span>
      </div>
    );
  };
  
  export default Rating;
  