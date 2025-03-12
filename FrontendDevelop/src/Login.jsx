import React from 'react';

const LoginForm = () => {
  return (
    <div className="login-section">
      <h2>登錄</h2>
      <form>
        <label htmlFor="login-email">電子郵件</label>
        <input type="email" id="login-email" placeholder="輸入電子郵件" required />
        <label htmlFor="login-password">密碼</label>
        <input type="password" id="login-password" placeholder="輸入密碼" required />
        <button type="submit">登錄</button>
      </form>
    </div>
  );
};

export default LoginForm;