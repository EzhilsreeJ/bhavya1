import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">Saveetha Engineering College</div>
        <nav>
          <a href="#about">About</a>
          <a href="#departments">Departments</a>
          <a href="#admissions">Admissions</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to Saveetha Engineering College</h1>
            <p>Empowering Minds, Shaping Futures</p>
          </div>
        </section>

        <section className="content-section" id="about">
          <h2>About Us</h2>
          <p>
            Saveetha Engineering College (SEC), Chennai, is a distinguished institution committed to academic excellence and innovation in engineering and technology. Established with a vision to nurture future leaders and innovators, SEC offers a wide array of undergraduate and postgraduate programs. Our state-of-the-art infrastructure, experienced faculty, and industry-aligned curriculum ensure that our students receive a comprehensive and world-class education.
          </p>
          <p>
            We are dedicated to fostering a dynamic learning environment that encourages critical thinking, creativity, and a passion for lifelong learning. Our campus is a hub of research, development, and extracurricular activities, providing students with opportunities to grow holistically.
          </p>
        </section>

        <section className="content-section" id="departments">
          <h2>Our Departments</h2>
          <p>
            SEC boasts a diverse range of departments, each offering specialized programs and conducting cutting-edge research. Our key departments include:
          </p>
          <ul>
            <li>Computer Science and Engineering</li>
            <li>Electronics and Communication Engineering</li>
            <li>Mechanical Engineering</li>
            <li>Civil Engineering</li>
            <li>Electrical and Electronics Engineering</li>
            <li>Biomedical Engineering</li>
            <li>Information Technology</li>
            <li>And more...</li>
          </ul>
        </section>

        {/* Add more sections as needed, e.g., Admissions, Research, Campus Life */}

      </main>

      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} Saveetha Engineering College. All rights reserved.</p>
        <p>
          <a href="#contact">Contact Us</a> | <a href="https://www.saveetha.ac.in/" target="_blank" rel="noopener noreferrer">Official Website</a>
        </p>
      </footer>
    </div>
  );
}

export default App;