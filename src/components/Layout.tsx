import { Header } from "./Header";
import { Footer } from "./Footer";
import Sidebar from "./Sidebar";

export const Layout = ({ children, categories }) => {
  return (
    <div className="px-8 max-md:px-4">
      <Header />
      <div className="content-wrap">
        <main>{children}</main>
        <Sidebar categories={categories} />
      </div>
      <Footer />
    </div>
  );
};
