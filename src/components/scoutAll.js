import React from "react";
import "./styleAll.css";

function ScoutAll() {
  return (
        <div className="scoutall-container py-5" dir="rtl">
  <h2 className="main-title text-center mb-4">ما هي الكشافة؟</h2>

  <section className="scoutall-section mb-4">
    <h4 className="scoutall-heading">مقدمة</h4>
    <p className="scoutall-paragraph">
      الكشافة هي حركة شبابية تربوية تطوعية...
    </p>
  </section>

  <section className="scoutall-section mb-4">
    <h4 className="scoutall-heading">فكرة الكشفية ونشأتها</h4>
    <p className="scoutall-paragraph">
      بدأت الفكرة أثناء حصار مافكنج...
    </p>
  </section>

  <section className="scoutall-section mb-4">
    <h4 className="scoutall-heading">مراحل الكشفية</h4>
    <ul className="scoutall-list">
      <li>براعم: العمر من 3 إلى 7 سنوات</li>
      <li>أشبال: من 7 إلى 11 سنة</li>
      <li>فتيان: من 11 إلى 14 سنة</li>
      <li>متقدم: من 14 إلى 17 سنة</li>
      <li>جوالة: من 17 سنة إلى التخرج</li>
      <li>قيادة / رواد: كبار القادة</li>
    </ul>
  </section>

  <section className="scoutall-section mb-4">
    <h4 className="scoutall-heading">وعد الكشافة</h4>
    <p className="scoutall-paragraph">
      «أعد بشرفي أن أبذل جهدي...
    </p>
  </section>

  <section className="scoutall-section mb-4">
    <h4 className="scoutall-heading">قانون الكشافة</h4>
    <ul className="scoutall-list">
      <li>1. صادق</li>
      <li>2. مخلص</li>
      <li>3. نافع</li>
      ...
    </ul>
  </section>

  <section className="scoutall-section mb-4 text-center">
    <a
      href="https://ar.wikipedia.org/wiki/كشافة"
      className="scoutall-btn"
      target="_blank"
      rel="noreferrer"
    >
      اقرأ المقال الكامل على ويكيبيديا
    </a>
  </section>
</div>

    )   
}

export default ScoutAll;
