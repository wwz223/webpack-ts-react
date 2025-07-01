// 关于我们

import React from "react";

export default function About() {
  const sectionStyle = {
    marginBottom: '2rem'
  };

  const titleStyle = {
    color: '#333',
    marginBottom: '1rem'
  };

  const paragraphStyle = {
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '1rem'
  };

  const teamMemberStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    padding: '1rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px'
  };

  const avatarStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#e0e0e0',
    marginRight: '1rem'
  };

  return (
    <div>
      <h1 style={titleStyle}>关于我们</h1>
      
      <section style={sectionStyle}>
        <h2 style={titleStyle}>我们的使命</h2>
        <p style={paragraphStyle}>
          我们致力于为用户提供最优质的服务，通过技术创新推动行业发展，
          为客户创造更多价值。
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={titleStyle}>核心团队</h2>
        <div style={teamMemberStyle}>
          <div style={avatarStyle}></div>
          <div>
            <h3 style={{ margin: 0, color: '#333' }}>张三</h3>
            <p style={{ margin: '0.5rem 0 0 0', color: '#666' }}>首席技术官</p>
          </div>
        </div>
        <div style={teamMemberStyle}>
          <div style={avatarStyle}></div>
          <div>
            <h3 style={{ margin: 0, color: '#333' }}>李四</h3>
            <p style={{ margin: '0.5rem 0 0 0', color: '#666' }}>产品总监</p>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={titleStyle}>联系我们</h2>
        <p style={paragraphStyle}>
          邮箱：contact@example.com<br />
          电话：(+86) 123-4567-8900<br />
          地址：北京市朝阳区科技园区88号
        </p>
      </section>
    </div>
  );
}