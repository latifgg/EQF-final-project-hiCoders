import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      <h2 style={{color:"white"}}>About</h2>
      <p style={{color:"white"}}>
        This is a web application that aims to connect those who need help after a natural disaster with those who are willing to provide assistance. The application provides a simple and easy-to-use interface, where users can register as either a helper or someone in need of help, and then search or offer help based on their location and needs.
      </p>
      <p style={{color:"white"}}>
        This application was developed using React, Bootstrap, Express.js, mysql2, Sequelize, and SQL. React Context API and React Router were also used to provide a smooth user experience. The server-side and database operations were handled using Node.js and MySQL.
      </p>
    </div>
  );
};

export default About;
