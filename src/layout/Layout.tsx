import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      {/* Bootstrap-like container */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-24">
        <Header />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
