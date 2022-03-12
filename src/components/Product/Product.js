import "./Product.css";
import "../../helper.css";

export default function Product({
  title,
  price,
  gender,
  image,
  brand,
  category
}) {
  return (

    <>
      <div className="container left-content-border">
        <div className="right-content">
          <div className="cards">
              <div className="card">
                  <div className="slider">
                      <img src={image} alt="" className="product-image" />
                      {/* <div className="slide"></div> */}
                      {/* <div class="slide"></div>
                      <div class="slide"></div> */}
                  </div>
                  <div className="card-info">
                      <h3 className="card-category">{brand}</h3>
                      <h4>{gender}</h4>
                      <p>{category}</p>
                      <p className="card-title">{title}</p>
                      <p className="card-price">{price}</p>
                      <div className="wishlist-wrapper">
                          <button className="wishlist"> Add to bag </button>
                      </div>
                  </div>
              </div>
            </div>
            </div>
          </div>
    </>
  );
}
