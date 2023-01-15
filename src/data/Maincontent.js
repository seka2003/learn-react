import React from 'react';

function MainContent() {
  return (
    <main>
      <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
          <img src={require('./assets/mephoto.jpg')} width="150" height="150" className="me-2" alt="Profile Picture" />

            <span className="fs-4 fw-bold">Kittichok Narongrat</span>
          </a>
        </header>
      </div>
    </main>
  );
}

export default MainContent;
