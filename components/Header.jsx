import Link from 'next/link';
import { ChevronDown, Mail, MapPin, Phone } from 'lucide-react';
import { navItems, site } from '@/lib/content';

export default function Header() {
  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span><MapPin size={15} /> Mumbai, Maharashtra</span>
          <span><Phone size={15} /> {site.phone}</span>
          <span><Mail size={15} /> {site.email}</span>
          <Link href="/donate">Donate Now</Link>
        </div>
      </div>
      <nav className="navbar container">
        <Link href="/" className="brand brand-logo-only" aria-label="Grace Foundation Home">
          <img src="/images/gracef_new.png" alt="Grace Foundation India logo" />
        </Link>
        <input id="nav-toggle" className="nav-toggle" type="checkbox" />
        <label className="hamburger" htmlFor="nav-toggle" aria-label="Open navigation">
          <span></span><span></span><span></span>
        </label>
        <div className="nav-links">
          {navItems.map((item) => item.children ? (
            <div className="nav-dropdown" key={item.label}>
              <button type="button" className="nav-dropbtn">{item.label} <ChevronDown size={16} /></button>
              <div className="dropdown-menu-custom">
                {item.children.map((child) => (
                  <Link key={child.href} href={child.href}>{child.label}</Link>
                ))}
              </div>
            </div>
          ) : (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
