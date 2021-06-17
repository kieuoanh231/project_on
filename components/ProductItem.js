import Link from "next/link";

const Product = ({product}) => {
  return (
    <div className="product-tab-block mt-80 box">
      <div className="container">
        <div className="main-tab">
          <div className="product-tabs box-content clearfix">
            <div className="page-title toggled">
              {/* <h3>Our Products</h3> */}
              <div className="single-column">
                <div className="product-layout col-xs-4">
                  <div className="product-thumb transition">
                    <div className="image">
                      <Link href="#">
                        <>
                          <img
                            src={product.images[0].url}
                            alt="Zip-Front Jacket"
                            title="Zip-Front Jacket"
                            className="img-responsive"
                          />
                          <img
                            className="img-responsive hover-img"
                            src={product.images[1].url}
                            title="Zip-Front Jacket"
                            alt="Zip-Front Jacket"
                          />
                        </>
                      </Link>
                      {/* <div className="sale-text">
                        <span className="section-sale">-20%</span>
                      </div> */}
                      <button
                        type="button"
                        className="addcart"
                        title="Add to Cart"
                      >
                        Add to Cart
                      </button>
                    </div>
                    <div className="thumb-description clearfix">
                      <div className="caption">
                        <h4 className="product-title">
                          <Link href="#">{product.title}</Link>
                        </h4>
                        <p className="price">$ {product.price}</p>
                        <div className="rating">
                          {/* <span className="fa fa-stack" aria-hidden="true">
                            <i className="fas fa-star" aria-hidden="true"></i>
                          </span>
                          <span className="fa fa-stack" aria-hidden="true">
                            <i className="fas fa-star" aria-hidden="true"></i>
                          </span>
                          <span className="fa fa-stack" aria-hidden="true">
                            <i className="fas fa-star" aria-hidden="true"></i>
                          </span>
                          <span className="fa fa-stack" aria-hidden="true">
                            <i className="fas fa-star" aria-hidden="true"></i>
                          </span>
                          <span className="fa fa-stack" aria-hidden="true">
                            <i className="fas fa-star" aria-hidden="true"></i>
                          </span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <button type="submit" className="btn btn-primary">
          Load more
        </button> */}
      </div>
    </div>
  );
};

export default Product;