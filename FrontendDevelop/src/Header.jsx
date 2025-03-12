import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>棠吉訶德</h1>
      </div>
      <nav className="nav-links">
        <a href="index.html" className="nav-item">主頁</a>
        <a href="Spring.html" className="nav-item">春季</a>
        <a href="Summer.html" className="nav-item">夏季</a>
        <a href="Autumn.html" className="nav-item">秋季</a>
        <a href="Winter.html" className="nav-item">冬季</a>
        <a href="LogIn.html" className="nav-item">登錄</a>
      </nav>
    </header>
  );
};

export default Header;