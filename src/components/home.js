
import { Link } from "react-router-dom";
import group from "../components/image/group.png";
import eduction from "../components/image/eduction.png"
import scouts from "../components/image/scouts.png"
import "./styleAll.css";

function Home() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-sm-6 col-md-4 col-lg-3 p-4">
          <div className="custom-card text-center p-3">
            <img src={group} alt="القادة" width={100} className="mb-3" />
            <div>
                <Link className="card-title btn-link-style" to="/teachers">القادة</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 p-4">
          <div className="custom-card text-center p-3">
            <img src={eduction} alt="القادة" width={100} className="mb-3" />
            <div>
                <Link className="card-title btn-link-style" to="/eduction">المناهج</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 p-4">
          <div className="custom-card text-center p-3">
            <img src={scouts} alt="القادة" width={100} className="mb-3" />
            <div>
                <Link className="card-title btn-link-style" to="/scoutAll">الكشافة</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
