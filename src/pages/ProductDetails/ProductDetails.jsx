import { useEffect, useState } from "react";
import { BiCart, BiHeart } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { getProductSpecific } from "../../services/Apis/productApi/ProductApi";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const getSpecificProduct = async () => {
    const data = await getProductSpecific(id);
    console.log(data.product);
    setProduct(data?.product);
  };

  useEffect(() => {
    getSpecificProduct();
  }, [id]);

  return (
    <section className="product-details">
      <div className="container-xl">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-2 images">
                {product?.images?.map((image, index) => (
                  <img
                    src={image.secure_url}
                    className="w-100"
                    alt={`product-image-${index}`}
                    key={index}
                  />
                ))}
              </div>
              <div className="col-8">
                <img
                  src={product?.imageCover?.secure_url}
                  className="w-100"
                  alt={product?.title}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product-data">
              <h3>{product?.title}</h3>
              <p className="text-muted"> {product?.category?.name}</p>
              <p className="text-muted">{product?.description}</p>
              <h4>${product?.price}</h4>
              <button className="cart">
                Add to cart <BiCart className="icon-cart" />
              </button>
              <BiHeart size={30} className="icon-wishlist" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
