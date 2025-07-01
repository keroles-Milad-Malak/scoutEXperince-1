import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styleAll.css";

function EductionScout() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("scoutLessons");
    if (stored) {
      setLessons(JSON.parse(stored));
    }
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("هل أنت متأكد من حذف هذا الدرس؟")) {
      const updated = lessons.filter(lesson => lesson.id !== id);
      setLessons(updated);
      localStorage.setItem("scoutLessons", JSON.stringify(updated));
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 main-title">دروس الكشافة</h2>
      <div className="row justify-content-center">
        {lessons.map((lesson) => (
          <div className="col-sm-6 col-md-4 mb-4" key={lesson.id}>
            <div className="card p-3 text-center shadow">
              <h5 className="mb-2">{lesson.title}</h5>
              <p>{lesson.description}</p>
              <div className="d-flex justify-content-around">
                <Link to={`/eduction/lesson/${lesson.id}`} className="btn btn-primary">
                  ابدأ الدرس
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(lesson.id)}
                >
                  حذف
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EductionScout;
