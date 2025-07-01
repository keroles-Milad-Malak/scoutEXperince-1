import { useState, useEffect } from "react";
import "./styleAll.css";

function Teachers() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ name: "", stage: "", leader: "", points: "" });
  const [newTeacher, setNewTeacher] = useState({ name: "", stage: "", leader: "", points: "" });

  useEffect(() => {
    const stored = localStorage.getItem("teachersData");
    if (stored) {
      setData(JSON.parse(stored));
    } else {
      setData([
        { id: 1, name: "كيرلس", stage: "ابتدائي", leader: "متقدم", points: 10 },
        { id: 2, name: "رامي", stage: "إعدادي", leader: "قائد عام", points: 15 }
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("teachersData", JSON.stringify(data));
  }, [data]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleNewChange = (e) => setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value });

  const handleEdit = (item) => {
    setEditId(item.id);
    setFormData(item);
  };

  const handleSave = () => {
    setData(data.map(d => d.id === editId ? { ...formData, id: editId } : d));
    setEditId(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("هل أنت متأكد من الحذف؟")) {
      setData(data.filter(d => d.id !== id));
    }
  };

  const handleAdd = () => {
    if (newTeacher.name && newTeacher.stage && newTeacher.leader && newTeacher.points) {
      const newId = data.length ? Math.max(...data.map(d => d.id)) + 1 : 1;
      setData([...data, { ...newTeacher, id: newId }]);
      setNewTeacher({ name: "", stage: "", leader: "", points: "" });
    } else {
      alert("يرجى ملء جميع البيانات قبل الإضافة.");
    }
  };

  const handleResetAll = () => {
    if (window.confirm("هل أنت متأكد من حذف جميع البيانات والعودة للإعدادات الأصلية؟")) {
      localStorage.removeItem("teachersData");
      window.location.reload();
    }
  };

  return (
    <div className="container py-4" dir="rtl">
      <h2 className="main-title mb-4 text-center"> القادة</h2>

      {/* نموذج إضافة قائد جديد */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-2">
          <input className="form-control" name="name" placeholder="الاسم" value={newTeacher.name} onChange={handleNewChange} />
        </div>
        <div className="col-md-2">
          <input className="form-control" name="stage" placeholder="المرحلة" value={newTeacher.stage} onChange={handleNewChange} />
        </div>
        <div className="col-md-2">
          <input className="form-control" name="leader" placeholder="القائد" value={newTeacher.leader} onChange={handleNewChange} />
        </div>
        <div className="col-md-2">
          <input className="form-control" type="number" name="points" placeholder="النقط" value={newTeacher.points} onChange={handleNewChange} />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary w-100" onClick={handleAdd}>إضافة</button>
        </div>
      </div>

      {/* زر حذف كل البيانات */}
      <div className="text-end mb-3">
        <button className="btn btn-warning" onClick={handleResetAll}>
          <i className="fa fa-trash me-2"></i> حذف كل البيانات
        </button>
      </div>

      {/* جدول القادة */}
      <div className="table-responsive">
        <table className="table table-bordered text-center table-striped align-middle">
          <thead className="table-dark">
            <tr>
              <th>الاسم</th>
              <th>المرحلة</th>
              <th>القائد</th>
              <th>عدد النقط</th>
              <th>تعديل</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) =>
              editId === item.id ? (
                <tr key={item.id}>
                  <td><input name="name" className="form-control" value={formData.name} onChange={handleChange} /></td>
                  <td><input name="stage" className="form-control" value={formData.stage} onChange={handleChange} /></td>
                  <td><input name="leader" className="form-control" value={formData.leader} onChange={handleChange} /></td>
                  <td><input name="points" type="number" className="form-control" value={formData.points} onChange={handleChange} /></td>
                  <td><button className="btn btn-success btn-sm" onClick={handleSave}>حفظ</button></td>
                  <td></td>
                </tr>
              ) : (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.stage}</td>
                  <td>{item.leader}</td>
                  <td>{item.points}</td>
                  <td>
                    <button className="btn btn-info btn-sm text-white" onClick={() => handleEdit(item)}>
                      <i className="fa fa-edit"></i>
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teachers;
