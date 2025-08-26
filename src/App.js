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
              'Serverless & Amplify Enthusiast'
            ]}
            typeSpeed={40}
            backSpeed={30}
            loop
          />
        </div>
      </motion.header>

      <main className="container">
        {/* PROJECT */}
        <motion.section
          id="project"
          className="project card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="project-title">Serverless Metadata Extraction (AWS + Amplify)</h2>

          <p className="project-description">
            Event-driven, serverless pipeline built manually and fronted by an
            Amplify-hosted website. Users upload documents via pre-signed S3 URLs; S3 events trigger
            processing to extract simple metadata/tags and store results in DynamoDB. All resources
            follow least-privilege IAM and are observable with CloudWatch.
          </p>

          <ul className="project-bullets">
            <li><strong>Frontend:</strong> AWS Amplify static hosting (HTML/CSS/JS)</li>
            <li><strong>API:</strong> API Gateway → Lambda (<em>GetUploadUrl</em>) returns pre-signed S3 PUT URLs</li>
            <li><strong>Storage:</strong> Private S3 bucket for uploads</li>
            <li><strong>Events:</strong> S3 ObjectCreated → EventBridge → Step Functions workflow</li>
            <li><strong>Processing:</strong> Lambda (<em>MetadataWorker</em>) tags files (e.g., “resume”, “invoice”) and writes to DynamoDB</li>
            <li><strong>Observability:</strong> CloudWatch logs & alarms</li>
            <li><strong>Security:</strong> IAM roles/policies with least privilege</li>
          </ul>

          <a
            href="https://github.com/anthonymoore3363/AWS_Serverless_Metadata_Extraction"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub /> View Project on GitHub
          </a>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          id="skills"
          className="skills card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2>Skills & Technologies</h2>
          <ul>
            <li><FaAws /> AWS (Amplify, API Gateway, Lambda, S3, DynamoDB, EventBridge, Step Functions, CloudWatch, IAM)</li>
            <li><FaPython /> Python & JavaScript (React)</li>
            <li>Serverless design & least-privilege IAM</li>
            <li>CI/CD & GitHub Actions</li>
          </ul>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          className="contact card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
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
