// Development.jsx
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import profileImg from '../assets/images/img 1.png';

const RADIUM_GREEN = '#d7f96a';

const Development = () => {
  const [trainees, setTrainees] = useState([]);

  useEffect(() => {
    document.title = 'VTS_Exam_Portal | Development';
    const results = JSON.parse(localStorage.getItem('technicalExamResults') || '[]');

    const enriched = results.map((t) => ({
      ...t,
      trainer: t.trainer || 'Priya',
      image: t.image || profileImg,
      strengths: t.score > 20 ? 'Strong in Technical' : t.practical > 50 ? 'Good Practical Skills' : 'Needs Focus',
      weakness: t.score < 15 ? 'Weak Technical' : t.practical < 40 ? 'Poor Practical' : 'Minor Issues',
      recommendation: t.total >= 85 ? 'Ready for Final Project' : t.total >= 60 ? 'Continue Practice' : 'Needs Mentoring',
    }));

    setTrainees(enriched);
  }, []);

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">Skill-Wise Score Breakdown</h2>

      <div className="bg-white p-4 rounded mb-5" style={{ backgroundColor: RADIUM_GREEN }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={trainees} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="score" fill="#003366" name="Technical (30)" />
            <Bar dataKey="practical" fill="#66cc00" name="Practical (70)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <h3 className="fw-bold mb-3">Trainer Feedback Summary</h3>

      <div className="row g-4">
        {trainees.map((t, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="border rounded p-3 bg-light shadow-sm h-100">
              <div className="d-flex align-items-center mb-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="rounded-circle me-3"
                  width="60"
                  height="60"
                />
                <div>
                  <h5 className="mb-0 fw-semibold">{t.name}</h5>
                  <small className="text-muted">Trainer: {t.trainer}</small>
                </div>
              </div>
              <div>
                <p className="mb-1"><strong>Strength:</strong> {t.strengths}</p>
                <p className="mb-1"><strong>Weakness:</strong> {t.weakness}</p>
                <p className="mb-0"><strong>Recommendation:</strong> {t.recommendation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Development;
