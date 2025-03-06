import React from "react";
import "./Skills.scss"; // Import the CSS file

const Skills = () => {
  return (
    <section className="skills">

      <div className="skills__box">
        <h2 className="skills__heading">Frontend</h2>
        <ul className="skills__list">
          <li className="skills__list-item">HTML</li>
          <li className="skills__list-item">CSS</li>
          <li className="skills__list-item">SASS</li>
          <li className="skills__list-item">Responsive Design</li>
          <li className="skills__list-item">Javascript</li>
          <li className="skills__list-item">React/React Native</li>
        </ul>
      </div>
      <div className="skills__box">
        <h2 className="skills__heading">Backend</h2>
        <ul className="skills__list">
          <li className="skills__list-item">Node</li>
          <li className="skills__list-item">Express</li>
          <li className="skills__list-item">Django & Flask</li>
          <li className="skills__list-item">Knex</li>
          <li className="skills__list-item">MySQL</li>
          <li className="skills__list-item">Web APIs</li>
        </ul>

      </div>

      <div className="skills__box">
        <h2 className="skills__heading">Other</h2>
        <ul className="skills__list">
          <li className="skills__list-item">GitHub</li>
          <li className="skills__list-item">Jira, Kanban</li>
          <li className="skills__list-item">AWS</li>
          <li className="skills__list-item">Figma</li>
          <li className="skills__list-item">C++/C</li>
          <li className="skills__list-item">Python for Data Analysis</li>
          <li className="skills__list-item">PowerBI</li>

        </ul>

      </div>

    </section>
  );
};

export default Skills;
