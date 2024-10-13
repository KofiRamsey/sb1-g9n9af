import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <Image src="/assets/about-pic.png" alt="Profile picture" width={400} height={400} className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <Image src="/assets/experience.png" alt="Experience icon" width={32} height={32} className="icon" />
              <h3>Experience</h3>
              <p>2+ years <br />Software Development</p>
            </div>
            <div className="details-container">
              <Image src="/assets/education.png" alt="Education icon" width={32} height={32} className="icon" />
              <h3>Education</h3>
              <ul>
                <li>CS50's Introduction to Computer Science</li>
                <li>CS50's Introduction to Programming with Python</li>
                <li>freeCodeCamp</li>
              </ul>
            </div>
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>
      <Link href="#experience">
        <Image src="/assets/arrow.png" alt="Arrow icon" width={40} height={40} className="icon arrow" />
      </Link>
    </section>
  );
}