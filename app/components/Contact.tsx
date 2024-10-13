import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <Image src="/assets/email.png" alt="Email icon" width={32} height={32} className="icon contact-icon email-icon" />
          <p><a href="mailto:korafisey@gmail.com">korafisey@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <Image src="/assets/linkedin.png" alt="LinkedIn icon" width={32} height={32} className="icon contact-icon" />
          <p><Link href="https://www.linkedin.com">LinkedIn</Link></p>
        </div>
      </div>
    </section>
  );
}