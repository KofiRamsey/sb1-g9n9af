import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Github } from 'lucide-react';
import Navigation from './components/Navigation';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Navigation />
      <section id="profile">
        <div className="section__pic-container">
          <Image
            src="/assets/profile-pic.png"
            alt="Kofi Arthur profile picture"
            width={400}
            height={400}
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hey there, I am</p>
          <h1 className="title">Kofi Arthur</h1>
          <p className="section__text__p2">Software Developer</p>
          <div className="btn-container">
            <Link
              href="/assets/resume-example.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-color-2"
            >
              Download CV
            </Link>
            <Link href="#contact" className="btn btn-color-1">
              Contact Info
            </Link>
          </div>
          <div id="socials-container">
            <Link
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="icon" />
            </Link>
            <Link
              href="https://github.com/KofiRamsey"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="icon" />
            </Link>
          </div>
        </div>
      </section>
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#experience">Skills</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright © 2024 Kofi Arthur. All Rights Reserved.</p>
      </footer>
    </>
  );
}
