import { BiCart, BiHeart, BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../../../assets/Images/logo.png";
import { useCartContext } from "../../../context/CartContext";
import { useWishListContext } from "../../../context/WishlistContext";

const MainHeader = ({ toggle }) => {
  const { cartLength } = useCartContext();
  const { wishListLength } = useWishListContext();

  return (
    <section className="main-header overflow-hidden ">
      <div className="container-xl px-3 py-3">
        <div className="row">
          {/* Logo */}
          <div className="col-md-3  d-flex justify-content-center align-items-center">
            <div className="header-logo">
              <Link to={"/"} className="logo">
                {/* <span>Electro</span> */}
                <img src={logo} alt="Electro" />
              </Link>
            </div>
          </div>

          {/* Icons cart  & wish list & menu */}

          <div className="col-md-6  d-flex justify-content-center align-items-center">
            <div className="header-search">
              <form>
                <input className="input" placeholder="Search here" />
                <button className="search-btn">Search</button>
              </form>
            </div>
          </div>

          <div className="col-md-3  d-flex justify-content-center justify-content-md-start align-items-center ">
            <div className="header-ctn">
              {/* Wish List */}
              <div className="position-relative">
                <Link
                  to={"/wishlist"}
                  className="d-flex flex-column align-items-center gap-2"
                >
                  <BiHeart size={20} />
                  <span>Wishlist</span>
                  <small className="qty wishlist-qty">{wishListLength}</small>
                </Link>
              </div>

              {/* Cart */}
              <div className="position-relative">
                <Link
                  to={"/cart"}
                  className="d-flex m-0 flex-column align-items-center gap-2"
                >
                  <BiCart size={20} />
                  <span>Cart</span>
                  <small className="qty cart-qty">{cartLength}</small>
                </Link>
              </div>

              {/* Toggle */}
              <div className="menu-toggle ">
                <p
                  onClick={() => {
                    toggle();
                  }}
                  className="d-flex text-white m-0 flex-column align-items-center gap-2"
                >
                  <BiMenu size={20} />
                  <span>Menu</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
