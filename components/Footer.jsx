import Link from 'next/link';
import { HeartHandshake, Mail, MapPin, Phone } from 'lucide-react';
import { programs, site } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <HeartHandshake size={28} />
            <span>Grace Foundation</span>
          </div>
          <p>Serving children, women, families, and vulnerable communities through education, care, empowerment, and environmental awareness.</p>
        </div>
        <div>
          <h3>Programs</h3>
          {programs.map((program) => <Link key={program.href} href={program.href}>{program.title}</Link>)}
        </div>
        <div>
          <h3>Contact</h3>
          <p><Phone size={16} /> {site.phone}</p>
          <p><Mail size={16} /> {site.email}</p>
          <p><MapPin size={16} /> {site.address}</p>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} Grace Foundation. All rights reserved.</div>
    </footer>
  );
}
