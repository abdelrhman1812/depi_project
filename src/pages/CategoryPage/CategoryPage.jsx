import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../assets/style/category.css";
import SingleProduct from "../../components/layouts/Products/SingleProduct";
import IsLoading from "../../components/shared/IsLoading/IsLoading";
import PageHeader from "../../components/shared/PageHeader/PageHeader";
import { getProductsByCategory } from "../../services/Apis/categoryApi/CategoryApi";

function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async (category) => {
    setIsLoading(true);
    try {
      const data = await getProductsByCategory(category);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts(category);
  }, [category]);

  return (
    <section className="category-page">
      <PageHeader title={category} />
      <div className="container-xl py-5">
        <div className="row g-4">
          {isLoading && <IsLoading />}

          {products?.slice(0, 8).map((product) => (
            <div key={product._id} className="col-sm-6 col-md-4 col-lg-3">
              <SingleProduct product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryPage;