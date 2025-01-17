import { BiMessageSquareX } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const NavBar = ({ showNav, toggle }) => {
  return (
    <>
      <nav className="navigation">
        <div className="container-xl ">
          <div
            id="responsive-nav"
            className={`d-flex justify-content-md-center ${
              showNav ? "show-nav" : ""
            } `}
          >
            <BiMessageSquareX
              className="close top-0 end-0 m-3"
              size={30}
              onClick={() => {
                toggle();
              }}
            />
            <ul className="main-nav d-flex">
              <li>
                <NavLink to="/" className="active">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/shop" className="active">
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/brands" className="active">
                  Brands
                </NavLink>
              </li>

              {/* <li>
                <NavLink to="/contact" className="active">
                  Contact Us
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
