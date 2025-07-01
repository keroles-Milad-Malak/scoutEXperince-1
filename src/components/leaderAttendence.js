import React, { useState, useEffect } from "react";
import "./styleAll.css";

const getFridaysAndSaturdays = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const days = new Date(year, month + 1, 0).getDate();
  const dates = [];

  for (let d = 1; d <= days; d++) {
    const date = new Date(year, month, d);
    if (date.getDay() === 5 || date.getDay() === 6) {
      dates.push({
        id: date.toISOString().split("T")[0],
        label: date.toLocaleDateString("ar-EG", {
          weekday: "long",
          day: "numeric",
          month: "long",
        }),
      });
    }
  }
  return dates;
};

const AttendancePage = () => {
  const [leaders, setLeaders] = useState(() => {
    const stored = localStorage.getItem("leaders");
    return stored ? JSON.parse(stored) : [];
  });

  const [attendance, setAttendance] = useState(() => {
    const stored = localStorage.getItem("attendance");
    return stored ? JSON.parse(stored) : {};
  });

  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const [dates] = useState(getFridaysAndSaturdays());

  useEffect(() => {
    localStorage.setItem("leaders", JSON.stringify(leaders));
    localStorage.setItem("attendance", JSON.stringify(attendance));
  }, [leaders, attendance]);

  const toggleAttendance = (leader, dateId) => {
    setAttendance((prev) => {
      const updated = { ...prev };
      if (!updated[leader]) updated[leader] = {};
      updated[leader][dateId] = !updated[leader][dateId];
      return { ...updated };
    });
  };

  const addLeader = () => {
    const name = prompt("ادخل اسم القائد:");
    if (name) setLeaders([...leaders, name]);
  };

  const nextWeek = () => {
    if (currentWeekIndex + 2 < dates.length)
      setCurrentWeekIndex(currentWeekIndex + 2);
  };

  const prevWeek = () => {
    if (currentWeekIndex - 2 >= 0)
      setCurrentWeekIndex(currentWeekIndex - 2);
  };

  const currentDates = dates.slice(currentWeekIndex, currentWeekIndex + 2);

  return (
    <div className="container py-5 attendance-page" dir="rtl">
      <h2 className="text-center mb-4 main-title">حضور القادة</h2>

      <div className="d-flex flex-wrap justify-content-between gap-2 mb-3 attendance-controls">
        <button onClick={prevWeek} className="btn btn-secondary">الأسبوع السابق</button>
        <button onClick={nextWeek} className="btn btn-secondary">الأسبوع التالي</button>
        <button onClick={addLeader} className="btn btn-primary">إضافة قائد</button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered text-center attendance-table">
          <thead>
            <tr>
              <th>اسم القائد</th>
              {currentDates.map((date) => (
                <th key={date.id}>{date.label}</th>
              ))}
              <th className="text-start">النقاط</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((leader, idx) => {
              const leaderAttendance = attendance[leader] || {};
              const totalPoints = Object.values(leaderAttendance).filter(Boolean).length * 5;

              return (
                <tr key={idx}>
                  <td className="leader-name">{leader}</td>
                  {currentDates.map((date) => {
                    const isPresent = leaderAttendance[date.id] === true;
                    return (
                      <td
                        key={date.id}
                        className={`attendance-cell ${isPresent ? "present" : "absent"}`}
                        onClick={() => toggleAttendance(leader, date.id)}
                        style={{ cursor: "pointer" }}
                      >
                        {isPresent ? "✔" : "✖"}
                      </td>
                    );
                  })}
                  <td className="text-start"><strong>{totalPoints}</strong></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendancePage;
