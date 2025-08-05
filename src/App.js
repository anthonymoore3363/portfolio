import React from 'react';
import './App.css';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-scroll';
import { FaGithub, FaAws, FaPython, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-left"><Link to="project" smooth={true} duration={500}>Projects</Link></li>
          <li className="nav-center"><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li className="nav-right"><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>

      <motion.header className="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="overlay">
          <h1 className="name">Anthony Moore</h1>
          <ReactTyped
            className="tagline"
            strings={[
              'Software Engineering Student',
              'AWS Cloud Support Intern',
              'Python Developer',
              'Infrastructure-as-Code Enthusiast'
            ]}
            typeSpeed={40}
            backSpeed={30}
            loop
          />
        </div>
      </motion.header>

      <main className="container">
        <motion.section id="project" className="project card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="project-title">Serverless Metadata Extraction (AWS)</h2>
          <p className="project-description">
            Designed and implemented a fully serverless, event-driven metadata extraction pipeline on AWS. Leveraged S3 event notifications, EventBridge, Lambda (Python), and DynamoDB with infrastructure-as-code using AWS CloudFormation. Demonstrates expertise in IAM policy design, CI/CD readiness, and resilient architecture patterns.
          </p>
          <a
            href="https://github.com/anthonymoore3363/AWS_Serverless_Metadata_Extraction"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub /> View Project on GitHub
          </a>
        </motion.section>

        <motion.section id="skills" className="skills card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
          <h2>Skills & Technologies</h2>
          <ul>
            <li><FaAws /> AWS (S3, Lambda, DynamoDB, IAM)</li>
            <li><FaPython /> Python & JavaScript (React)</li>
            <li>Infrastructure as Code (CloudFormation)</li>
            <li>CI/CD & GitHub Actions</li>
          </ul>
        </motion.section>

        <motion.section id="contact" className="contact card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}>
          <h2>Contact</h2>
          <p>If you'd like to collaborate or have a project in mind, feel free to reach out!</p>
          <a className="contact-button" href="mailto:anthonymoore3363@gmail.com">
            <FaEnvelope /> Email Me
          </a>
        </motion.section>
      </main>

      <motion.footer className="footer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <p>
          &copy; 2025 Anthony Moore |{' '}
          <a
            href="https://github.com/anthonymoore3363"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub Profile
          </a>
        </p>
      </motion.footer>
    </div>
  );
}

export default App;
