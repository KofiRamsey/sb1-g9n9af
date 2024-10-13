import Image from 'next/image';
import Link from 'next/link';

export default function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Languages</h2>
            <div className="article-container">
              <article>
                <Image src="/assets/html.png" alt="HTML icon" width={32} height={32} className="icon" />
                <div>
                  <h3>HTML</h3>
                </div>
              </article>
              <article>
                <Image src="/assets/css.png" alt="CSS icon" width={32} height={32} className="icon" />
                <div>
                  <h3>CSS</h3>
                </div>
              </article>
              <article>
                <Image src="/assets/javascript.png" alt="JavaScript icon" width={32} height={32} className="icon" />
                <div>
                  <h3>JavaScript</h3>
                </div>
              </article>
              <article>
                <Image src="/assets/c.png" alt="C icon" width={32} height={32} className="icon" />
                <div>
                  <h3>C</h3>
                </div>
              </article>
              <article>
                <Image src="/assets/python.png" alt="Python icon" width={32} height={32} className="icon" />
                <div>
                  <h3>Python</h3>
                </div>
              </article>
              <article>
                <Image src="/assets/checkmark.png" alt="Experience icon" width={32} height={32} className="icon" />
                <div>
                  <h3>Material UI</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Frameworks</h2>
            <div className="article-container">
              <article>
                <Image src="/assets/checkmark.png" alt="Experience icon" width={32} height={32} className="icon" />
                <div>
                  <h3>SQL</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <Image src="/assets/checkmark.png" alt="Experience icon" width={32} height={32} className="icon" />
                <div>
                  <h3>React JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <Image src="/assets/checkmark.png" alt="Experience icon" width={32} height={32} className="icon" />
                <div>
                  <h3>Flask</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <Image src="/assets/checkmark.png" alt="Experience icon" width={32} height={32} className="icon" />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <Link href="#projects">
        <Image src="/assets/arrow.png" alt="Arrow icon" width={40} height={40} className="icon arrow" />
      </Link>
    </section>
  );
}