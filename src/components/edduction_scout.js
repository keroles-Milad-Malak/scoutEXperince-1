// components/edduction_scout.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function EductionScout() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("scoutLessons");
    setLessons(stored ? JSON.parse(stored) : []);
  }, []);

  const deleteLesson = (id) => {
    const confirmDelete = window.confirm("هل أنت متأكد أنك تريد حذف هذا الدرس؟");
    if (!confirmDelete) return;

    const updatedLessons = lessons.filter(lesson => lesson.id !== id);
    localStorage.setItem("scoutLessons", JSON.stringify(updatedLessons));
    setLessons(updatedLessons);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 main-title">دروس الكشافة</h2>

      <div className="text-end mb-3">
        <Link to="/eduction/scout/add" className="btn btn-success">➕ إضافة درس جديد</Link>
      </div>

      <div className="row justify-content-center">
        {lessons.map((lesson) => (
          <div className="col-sm-6 col-md-4 mb-4" key={lesson.id}>
            <div className="card p-3 text-center shadow">
              <h5 className="mb-2">{lesson.title}</h5>
              <p>{lesson.description}</p>
              <div className="d-flex justify-content-between">
                <Link to={`/eduction/lesson/${lesson.id}`} className="btn btn-primary">
                  ابدأ الدرس
                </Link>
                <button className="btn btn-danger" onClick={() => deleteLesson(lesson.id)}>
                  🗑 حذف
                </button>
              </div>
            </div>
          </div>
        ))}

        {lessons.length === 0 && <p className="text-center">لا توجد دروس حالياً</p>}
      </div>
    </div>
  );
}

export default EductionScout;
