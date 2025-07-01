import { Link } from "react-router-dom";
import "./styleAll.css";
import logo from "../components/image/43c6505859fd1aaaf9fb65b82446262f.jpg"
function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" width={50}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <i className="fa-solid fa-sliders toggle"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">الصفحة الرئيسية</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/teachers">القادة</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/eduction">المناهج</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/scoutAll">الكشافة</Link>
                    </li>
                     <li className="nav-item">
                    <Link className="nav-link" to="/leader">الحضور</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}
export default Navbar;