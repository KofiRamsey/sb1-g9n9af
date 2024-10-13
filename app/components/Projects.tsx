import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <Image src="/assets/project-1.png" alt="Project 1" width={400} height={300} className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn btn-color-2 project-btn">
                Github
              </Link>
              <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn btn-color-2 project-btn">
                Live Demo
              </Link>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <Image src="/assets/project-2.png" alt="Project 2" width={400} height={300} className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn btn-color-2 project-btn">
                Github
              </Link>
              <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn btn-color-2 project-btn">
                Live Demo
              </Link>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <Image src="/assets/project-3.png" alt="Project 3" width={400} height={300} className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Project Three</h2>
            <div className="btn-container">
              <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn btn-color-2 project-btn">
                Github
              </Link>
              <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn btn-color-2 project-btn">
                Live Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link href="#contact">
        <Image src="/assets/arrow.png" alt="Arrow icon" width={40} height={40} className="icon arrow" />
      </Link>
    </section>
  );
}