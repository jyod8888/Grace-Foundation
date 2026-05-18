import Link from 'next/link';
import { GraduationCap, HeartHandshake, Leaf, Users } from 'lucide-react';
import Gallery from '@/components/Gallery';
import ProgramCard from '@/components/ProgramCard';
import SectionHeader from '@/components/SectionHeader';
import HeroSlider from '@/components/HeroSlider';
import { programs } from '@/lib/content';

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="stats">
        <div className="container stats-grid">
          <div className="stat-card"><strong>4+</strong><span>Key programs</span></div>
          <div className="stat-card"><strong>100%</strong><span>Community focused</span></div>
          <div className="stat-card"><strong>24hr</strong><span>Contact response goal</span></div>
          <div className="stat-card"><strong>1</strong><span>Mission of service</span></div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHeader
            eyebrow="What we do"
            title="Programs that serve real needs"
            text="Our work is centered on education, protection, empowerment, and caring for the environment that sustains our communities."
          />
          <div className="program-grid">
            {programs.map((program) => <ProgramCard key={program.title} program={program} />)}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container split">
          <div>
            <p className="eyebrow">Our purpose</p>
            <h2>We exist to help people realize their greatness.</h2>
            <p>Grace Foundation was established to promote welfare activities that reduce human suffering and improve society, especially for poor, helpless, weak, and underprivileged communities.</p>
            <p>We believe lasting change begins with dignity, education, guidance, and practical support for families who need hope and opportunity.</p>
            <div className="hero-actions">
              <Link className="btn btn-outline" href="/mission">Our Mission</Link>
              <Link className="btn btn-primary" href="/contact">Contact Us</Link>
            </div>
          </div>
          <div className="image-stack">
            <img src="/data/images/india-women-education.jpg" alt="Community support program" />
            <img src="/data/images/india-village-school.png" alt="Children education activity" />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHeader
            eyebrow="Impact areas"
            title="A foundation built around service"
            text="Grace Foundation works across essential social needs so children, women, families, and communities can move forward with dignity."
          />
          <div className="program-grid">
            <div className="content-card"><GraduationCap color="#c8952d" /><h3>Education</h3><p>Learning support, guidance, and access to better academic opportunities.</p></div>
            <div className="content-card"><Users color="#c8952d" /><h3>Family Care</h3><p>Care for children, vulnerable families, and communities needing long-term support.</p></div>
            <div className="content-card"><HeartHandshake color="#c8952d" /><h3>Women</h3><p>Empowerment through dignity, opportunity, equality, and encouragement.</p></div>
            <div className="content-card"><Leaf color="#c8952d" /><h3>Nature</h3><p>Awareness and participation in protecting rivers, lakes, trees, and public spaces.</p></div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <SectionHeader eyebrow="Gallery" title="Moments from our work" text="Photos from community outreach, education programs, and service activities." />
          <Gallery />
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Your support can create lasting change.</h2>
          <p>Partner with Grace Foundation to support education, care, empowerment, and community development.</p>
          <Link className="btn btn-primary" href="/donate">Support the Mission</Link>
        </div>
      </section>
    </>
  );
}
