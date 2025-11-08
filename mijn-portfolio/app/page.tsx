"use client";
import Image from "next/image";
import "./globals.css";

export default function HomePage() {
  return (
    <>
      {/* 🌐 NAVBAR */}
      <nav className="navbar">
        <div className="navbar-links-left">
          <a href="home.html" className="navbar-logo">
            <Image
              src="/images/AC Logo.svg"
              alt="Logo"
              className="logo-img"
              width={80}
              height={80}
            />
          </a>
        </div>

        <div className="navbar-links-center">
          <a href="home.html">
            <Image src="/images/Huis.svg" alt="Home" width={24} height={24} />
          </a>
          <a href="#greenSection">My Work</a>
          <a href="#about">About Me</a>
        </div>

        <div className="navbar-links-rechts">
          <a href="https://nl.linkedin.com/" aria-label="LinkedIn">
            <Image
              src="/images/linkedin logo.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </a>
          <a href="mailto:537166@student.fontys.nl" aria-label="E-mail">
            <Image
              src="/images/Email logo.svg"
              alt="Email"
              width={24}
              height={24}
            />
          </a>
          <div className="contact">
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* 🧑‍🎨 HEADER */}
      <header>
        <section className="header sm:py-20 md:py-32">
          <p className="header-description sm:text-base md:text-lg">Hi, I am</p>

          <h1 className="header-title sm:text-3xl md:text-5xl typer">
            <span>A</span>
            <span>n</span>
            <span>g</span>
            <span>e</span>
            <span>l</span>
            <span>i</span>
            <span>n</span>
            <span>a </span>
            <span>C</span>
            <span>o</span>
            <span>f</span>
            <span>f</span>
            <span>i</span>
            <span>e</span>
          </h1>

          <p className="header-description sm:text-base md:text-lg">
            Your website designer that loves learning new stuff
          </p>

          <a href="#projects" className="header-button">
            Get to know me more
          </a>

          <div className="background-letters">
            <Image
              // src="/images/Logo_Background.svg"
              alt="Background Logo"
              width={300}
              height={300}
            />
          </div>
        </section>
      </header>

      {/* 🌿 PROJECTS SECTION */}
      <section className="greenSection" id="greenSection">
        <div className="contents">
          <div className="textProjects">
            <h1>My Work.</h1>
            <p>Visit my projects to see what I have worked on.</p>
          </div>

          <div className="containerProjectCards">
            <div className="projectCard">
              <Image
                src="/images/Mario foto.svg"
                alt="Mario"
                className="projectImage1"
                width={300}
                height={200}
              />
              <h2>Mario & Luigi’s Pizzaria</h2>
              <p>
                I made an order website for a pizzeria to make the order process
                easier and save time because they don’t have many employees.
              </p>
              <a href="project1.html" className="cardButton">
                More
              </a>
            </div>

            <div className="projectCard">
              <Image
                src="/images/LinAir foto.svg"
                alt="LinAir"
                className="projectImage1"
                width={300}
                height={200}
              />
              <h2>Travel Agency LinAir</h2>
              <p>
                This is a personal project I did. I made my own travel agency
                website so that people can order flights for the best
                destinations.
              </p>
              <a href="project2.html" className="cardButton">
                More
              </a>
            </div>

            <div className="projectCard">
              <Image
                src="/images/Klets foto.svg"
                alt="KLETS!"
                className="projectImage1"
                width={300}
                height={200}
              />
              <h2>KLETS!</h2>
              <p>
                KLETS! is a Dutch learning app I made with my group for refugees
                that live at an AZC in the Netherlands to learn Dutch on their
                own.
              </p>
              <a href="project3.html" className="cardButton">
                More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 💻 SKILLS SECTION */}
      <section className="skillsSection">
        <Image
          src="/images/Bloem foto.png"
          alt="Bloem"
          className="bloemfoto2"
          width={300}
          height={300}
        />

        <div className="skillsContent">
          <div className="titleSkills">
            <h1>Skills.</h1>
          </div>

          <div className="skillsColumns">
            <div className="skills">
              <h3>Web design</h3>
              <h4>Figma</h4>
              <h4>UX/UI</h4>
              <h4>Responsive Design</h4>
              <h4>Wireframing</h4>
            </div>

            <div className="skills">
              <h3>Frontend</h3>
              <h4>HTML</h4>
              <h4>CSS</h4>
              <h4>Next.JS</h4>
            </div>

            <div className="skills">
              <h3>Backend</h3>
              <h4>Vercel</h4>
              <h4>Supabase</h4>
            </div>

            <div className="skills">
              <h3>Soft Skills</h3>
              <h4>Communication</h4>
              <h4>Teamworker</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 🦶 FOOTER */}
      <footer>
        <div className="footerContainer">
          <h1>Where to find me</h1>
          <a href="https://nl.linkedin.com/">
            <Image
              src="/images/Linked 1.svg"
              alt="LinkedIn"
              className="footerImages"
              width={40}
              height={40}
            />
          </a>
          <a href="mailto:537166@student.fontys.nl">
            <Image
              src="/images/Email logo.svg"
              alt="E-mail"
              className="footerImages"
              width={40}
              height={40}
            />
          </a>
        </div>
      </footer>
    </>
  );
}
