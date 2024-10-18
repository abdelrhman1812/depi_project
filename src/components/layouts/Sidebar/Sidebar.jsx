import { useFormik } from "formik";
import useData from "../../../services/Hooks/useData";
import CheckboxItem from "./CheckboxItem";
import PriceFilter from "./PriceFilter";

const Sidebar = ({ getAllProducts, showSidBar, setIsLoading }) => {
  const { brands, categories, isLoading: dataLoading } = useData();

  const getValues = async (values) => {
    setIsLoading(true);
    try {
      await getAllProducts(values);
    } catch (error) {
      console.error("Error applying filter: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearFilter = async () => {
    const resetValues = {
      minPrice: 0,
      maxPrice: 2000,
      category: [],
      brand: [],
    };
    formik.resetForm({ values: resetValues });
    await getAllProducts(resetValues);
  };

  const formik = useFormik({
    initialValues: {
      minPrice: 0,
      maxPrice: 2000,
      category: [],
      brand: [],
    },
    onSubmit: getValues,
  });

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    const category = formik.values.category;
    if (checked) {
      formik.setFieldValue("category", [...category, value]);
    } else {
      formik.setFieldValue(
        "category",
        category.filter((item) => item !== value)
      );
    }
  };

  const handleBrandChange = (e) => {
    const { value, checked } = e.target;
    const brand = formik.values.brand;
    if (checked) {
      formik.setFieldValue("brand", [...brand, value]);
    } else {
      formik.setFieldValue(
        "brand",
        brand.filter((item) => item !== value)
      );
    }
  };

  return (
    <aside className={`col-lg-3 p-3 h-100 ${showSidBar ? "show-sidebar" : ""}`}>
      <h5>Filters</h5>

      <form onSubmit={formik.handleSubmit}>
        {/* Category Filter */}
        <div className="filter-category">
          <h6>Category</h6>
          <CheckboxItem
            items={categories}
            isLoading={dataLoading}
            type="category"
            handleCheckboxChange={handleCategoryChange}
          />
        </div>

        {/* Brand Filter */}
        <div className="filter-brand mb-4">
          <h6>Brand</h6>
          <CheckboxItem
            items={brands}
            isLoading={dataLoading}
            type="brand"
            handleCheckboxChange={handleBrandChange}
          />
        </div>

        {/* Price Filter */}
        <PriceFilter formik={formik} />

        {/* Apply and Clear Buttons */}
        <button disabled={dataLoading} type="submit" className="btn w-100">
          Apply Filter
        </button>
        <button
          onClick={clearFilter}
          type="button"
          className="btn btn-danger my-2 w-100"
        >
          Clear
        </button>
      </form>
    </aside>
  );
};

export default Sidebar;
