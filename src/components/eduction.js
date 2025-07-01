// components/Eduction.jsx
import { Link } from "react-router-dom";
import "./styleAll.css";

function Eduction() {
  return (
    <div className="container py-5 text-center">
      <h2 className="main-title mb-4">المناهج</h2>
      <div className="row justify-content-center">
        <Link to="/eduction/scout" className="eduction-button">المنهج الكشفي</Link>
        <Link to="#" className="eduction-button">المنهج الروحي</Link>
        <Link to="#" className="eduction-button">المنهج عربي عالمي</Link>
        <Link to="#" className="eduction-button">المنهج الوطني</Link>
        <Link to="#" className="eduction-button">المنهج العلمي</Link>
      </div>
    </div>
  );
}

export default Eduction;
