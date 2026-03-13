import "./styles/Education.css";

const Education = () => {
  return (
    <div className="education-section section-container" id="education">
      <div className="education-container">
        <h2>
          Education <span>&</span>
          <br /> Experience
        </h2>

        <div className="education-grid">
          <div className="education-card">
            <h3>Pandit Deendayal Energy University</h3>
            <p className="education-duration">2023 – Present</p>
            <p>B.Tech in Computer Engineering — CGPA: 8.74</p>
          </div>
          <div className="education-card">
            <h3>Sanskardeep Vidhya Sankul, Surat</h3>
            <p className="education-duration">2022 – 2023</p>
            <p>Class XII Science — 94.69%</p>
          </div>
          <div className="education-card">
            <h3>Harekrushana International School, Surat</h3>
            <p className="education-duration">2020 – 2021</p>
            <p>Class X — 95.10%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
