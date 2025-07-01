import { useParams } from "react-router-dom";

function LessonDetails() {
  const { id } = useParams();
  const lessons = JSON.parse(localStorage.getItem("scoutLessons")) || [];
  const lesson = lessons.find(l => l.id === parseInt(id));

  if (!lesson) return (
    <div className="container py-5">
      <h3 className="text-center text-danger">الدرس غير موجود</h3>
    </div>
  );

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">{lesson.title}</h2>
      <div
        className="lesson-body bg-light p-4 rounded shadow"
        dir="rtl"
        style={{ lineHeight: "2", fontSize: "1.1rem", whiteSpace: "pre-wrap" }}
      >
        {lesson.content}
      </div>
    </div>
  );
}

export default LessonDetails;
