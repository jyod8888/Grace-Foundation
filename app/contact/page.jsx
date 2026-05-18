import { Clock, HeartHandshake, Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';
import { site } from '@/lib/content';

export const metadata = { title: 'Contact | Grace Foundation' };

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" text="Reach out for donations, volunteering, partnerships, student support, community care, or service inquiries." />
      <section className="stats contact-section">
        <div className="container contact-intro">
          <p className="eyebrow">Get in touch today</p>
          <h2>Let’s connect with care, purpose, and hope.</h2>
          <p>Whether you want to support a child’s education, sponsor a welfare activity, volunteer your time, partner with us, or ask how Grace Foundation can help, we welcome your message with warmth and respect.</p>
        </div>
        <div className="container contact-grid">
          <ContactForm />
          <div className="info-card contact-info-pro">
            <div className="contact-logo-wrap"><img src="/images/gracef_new.png" alt="Grace Foundation India logo" /></div>
            <p className="eyebrow">Contact information</p>
            <h2>Grace Foundation Office</h2>
            <p className="contact-lead"><strong>Mrs. Jyoti Rajesh Das</strong><span>Managing Trustee, Grace Foundation</span></p>
            <div className="contact-line"><Phone size={19} /><span><strong>Mobile</strong>{site.phone}</span></div>
            <div className="contact-line"><Phone size={19} /><span><strong>WhatsApp</strong>{site.whatsapp}</span></div>
            <div className="contact-line"><Mail size={19} /><span><strong>Email</strong>{site.email}<br />{site.altEmail}</span></div>
            <div className="contact-line"><MapPin size={19} /><span><strong>Office Address</strong>{site.address}</span></div>
            <div className="contact-line"><Clock size={19} /><span><strong>Response Note</strong>Messages are reviewed with care. Please include your phone number for urgent program, donation, or community support inquiries.</span></div>
            <div className="contact-help-box"><HeartHandshake size={22} /><p>Every message is an opportunity to serve, partner, and make a meaningful difference in someone’s life.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
