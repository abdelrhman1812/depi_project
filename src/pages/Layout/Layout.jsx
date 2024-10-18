import { Outlet } from "react-router-dom";
import Footer from "../../components/shared/Footer/Footer";
import Header from "../../components/shared/Header/Header";
const Layout = () => {
  return (
    <>
      <main className="">
        <Header />
        <Outlet />
        {/* <NewsLetter /> */}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
