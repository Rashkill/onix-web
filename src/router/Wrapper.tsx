import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

const Wrapper: React.FC<{
  showHeader?: boolean;
  headerInfo?: { title: string; color?: string };
}> = ({ showHeader = true, headerInfo }) => {
  return (
    <div className="wrapper">
      <Navbar />
      {showHeader && headerInfo && (
        <Header title={headerInfo.title} color={headerInfo.color} />
      )}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Wrapper;
