import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My Projects <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-grid">
          <div className="career-column">
            <h3><span className="career-symbol">●</span> My Projects</h3>
            <div className="career-item">
              <h4>Agricultural Farm Management Platform</h4>
              <p className="career-desc">
                Designed and deployed a responsive web application to assist farmers with crop data,
                real-time weather tracking, and farming activity monitoring.
              </p>
            </div>
            <div className="career-item">
              <h4>Online Education Platform</h4>
              <p className="career-desc">
                Built backend services for course management, student enrollment, progress
                tracking, and automated email notifications.
              </p>
            </div>
            <div className="career-item">
              <h4>Logistics Management System</h4>
              <p className="career-desc">
                Developed a database-driven system for shipment, warehouse, and inventory tracking.
              </p>
            </div>

            <h3><span className="career-symbol">●</span> Experience</h3>
            <div className="career-item">
              <h4>Aspire Leaders Program (Internship)</h4>
              <p className="career-desc">
                Selected for the Aspire Leaders Program by Harvard faculty; worked on leadership
                challenges, team projects, and real-world business case studies.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
