// components/AddLesson.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddLesson() {
  const navigate = useNavigate();
  const [lesson, setLesson] = useState({ title: "", description: "", content: "" });

  const handleChange = (e) => {
    setLesson({ ...lesson, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const stored = localStorage.getItem("scoutLessons");
    const lessons = stored ? JSON.parse(stored) : [];
    const newId = lessons.length ? Math.max(...lessons.map(l => l.id)) + 1 : 1;
    const newLesson = { id: newId, ...lesson };

    lessons.push(newLesson);
    localStorage.setItem("scoutLessons", JSON.stringify(lessons));

    // نرجع لصفحة الدروس
    navigate("/eduction/scout");
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">إضافة درس جديد</h2>
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">عنوان الدرس</label>
          <input className="form-control" name="title" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">وصف قصير</label>
          <input className="form-control" name="description" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">المحتوى الكامل</label>
          <textarea className="form-control" name="content" rows="6" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">إضافة الدرس</button>
      </form>
    </div>
  );
}

export default AddLesson;
