import React from "react";

export default function Dashboard() {
  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '1rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  };

  const statStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1a73e8',
    marginBottom: '0.5rem'
  };

  return (
    <div>
      <h1 style={{ marginBottom: '2rem', color: '#333' }}>仪表盘</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        <div style={cardStyle}>
          <div style={statStyle}>128</div>
          <div style={{ color: '#666' }}>今日访问量</div>
        </div>
        <div style={cardStyle}>
          <div style={statStyle}>2,456</div>
          <div style={{ color: '#666' }}>总用户数</div>
        </div>
        <div style={cardStyle}>
          <div style={statStyle}>89%</div>
          <div style={{ color: '#666' }}>用户满意度</div>
        </div>
      </div>
    </div>
  );
}