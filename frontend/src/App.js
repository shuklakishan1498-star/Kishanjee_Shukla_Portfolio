import "./index.css";
import profile from "./profile.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>

      <div className="navbar">
        <h2>Kishan Jee Shukla</h2>
        <ul>
          <li><button onClick={() => scrollTo("about")}>About</button></li>
          <li><button onClick={() => scrollTo("projects")}>Projects</button></li>
          <li><button onClick={() => scrollTo("contact")}>Contact</button></li>
        </ul>
      </div>

      <div className="hero">
        <div className="hero-text">
<h1>Hello, I'm <span>Kishan</span></h1>
<h3>Full Stack Software Engineer</h3>
<p>
  Experienced in designing and building end-to-end technology systems,
  with expertise spanning from low-level hardware and bare-metal device interfaces to
  scalable web applications, cloud-connected platforms, and AI-powered solutions.
  Experienced in React, Node.js, and modern backend architectures, with the ability
  to translate complex system requirements into reliable, production-ready software
  that bridges physical devices, intelligent services, and user-centric web platforms.
</p>

          <button 
            className="btn btn-primary"
            onClick={() => window.open("/Kishan_CV1.pdf")}
          >
            Download Resume
          </button>

          <button 
            className="btn btn-outline"
            onClick={() => scrollTo("contact")}
          >
            Contact Me
          </button>

          <div className="socials">
            <a href="https://github.com/shuklakishan1498-star" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kishan-jee-shukla-0b79a8219/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

<div
  className="hero-image"
  onMouseMove={(e) => {
    const img = e.currentTarget.querySelector("img");
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -20;
    const rotateY = ((x / rect.width) - 0.5) * 20;

    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  }}
  onMouseLeave={(e) => {
    const img = e.currentTarget.querySelector("img");
    img.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  }}
>
  <img src={profile} alt="profile" />
</div>
      </div>

      <div className="section" id="about">
        <h2>About Me</h2>
        <p className="about-text">
        Full Stack Software Engineer with experience in designing and developing scalable web applications and connected systems. 
        Proficient in building modern MERN stack applications, developing RESTful APIs, and creating responsive user interfaces with React. 
        Experienced in integrating cloud-connected services and real-time device communication for IoT-driven platforms. 
        Additionally possess a strong foundation in AI/ML & Embedded systems development, including microcontroller-based device integration and hardware–software interaction. 
        Focused on delivering robust, efficient, and production-ready solutions across both web and connected device ecosystems.
        </p>
      </div>

      <div className="section" id="projects">
        <h2>Projects</h2>

        <div className="cards">

          <div
            className="card project-card"
            onClick={() => window.open("https://github.com/shuklakishan1498-star/MERN_IoT_CONTROL")}
          >
            <h3>MERN_IoT_CONTROL</h3>
            <p>A full-stack IoT control platform enabling direct interaction between a web interface and embedded hardware systems. 
              The frontend is built with React, while Node.js and Express handle backend communication with the device layer. 
              An AVR-based microcontroller programmed in C/C++ controls peripherals including an OLED display, buzzer, and NEMA17 stepper motor.
              Communication between the server and embedded system is implemented via UART, allowing real-time device monitoring and control directly from the web application.</p>
          </div>

          <div
            className="card project-card"
            onClick={() => window.open("https://github.com/shuklakishan1498-star/AI-IMAGE-GENERATOR?tab=readme-ov-file")}
          > <h3>AI Image Generator</h3>
            <p>A full-stack AI application that generates and modifies images from natural language prompts.
               The frontend is built with React, while Node.js and Express handle backend processing and API integration.
              The system uses the Gemini API for AI-based image generation and MongoDB for managing prompt and generation data. 
              Users can input text prompts to create or refine AI-generated images through an interactive web interface.</p>
           
          </div>

        </div>
      </div>

      <div className="section contact-section" id="contact">
        <h2>Contact Me</h2>

        {/* Contact Info */}
        <div style={{textAlign:"center", marginBottom:"20px"}}>
          <p><b>Phone:</b> +91 9305284316</p>
          <p><b>Email:</b> shuklakishan1498@gmail.com</p>
        </div>

        <form
          className="contact-form"
          onSubmit={async (e) => {
            e.preventDefault();

            const formData = {
              name: e.target.name.value,
              email: e.target.email.value,
              message: e.target.message.value,
            };

            try {
              await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              });

              alert("Message sent successfully!");
              e.target.reset();

            } catch (err) {
              alert("Error sending message");
            }
          }}
        >
  
          <input placeholder="Name" name="name" required />
          <input placeholder="Email" name="email" type="email" required />
          <textarea placeholder="Message" name="message" rows="4" required />
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    
    </div>
  );
}

export default App;