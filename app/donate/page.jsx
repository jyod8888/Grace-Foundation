import Link from 'next/link';
import ContentPage from '@/components/ContentPage';

export const metadata = { title: 'Donate | Grace Foundation' };

export default function DonatePage() {
  return (
    <ContentPage
      title="Donate Now"
      subtitle="Your support helps children, students, women, and vulnerable families receive care, education, and opportunities."
      image="/data/images/india-food-distribution.jpg"
      highlights={["Support poor students", "Help vulnerable children", "Strengthen families", "Sponsor community care"]}
    >
      <h2>Donate for Students and Community Welfare</h2>
      <p>Grace Foundation reaches out to children, poor youth, women, and underprivileged communities with the vision of reducing disparity and creating meaningful opportunities.</p>
      <p>Your contribution can support educational needs, care initiatives, awareness programs, and community development activities. Every act of generosity helps us move closer to a more compassionate society.</p>
      <p>Donations allow Grace Foundation to respond to real needs with dignity and care. Whether the support is large or small, it can help provide learning materials, outreach assistance, welfare support, program supplies, and encouragement to families facing difficult circumstances.</p>
      <h3>Ways to Support</h3>
      <ul>
        <li>Donate toward education support and learning materials.</li>
        <li>Sponsor community care and welfare activities.</li>
        <li>Volunteer your time, skills, or professional guidance.</li>
        <li>Partner with Grace Foundation for outreach programs.</li>
        <li>Share the mission with friends, families, and community networks.</li>
      </ul>
      <h3>Your Gift Has Meaning</h3>
      <p>Giving to Grace Foundation is a way to stand beside children, women, families, and communities who need encouragement and practical help. Your support becomes part of a larger mission of service, dignity, and hope.</p>
      <p>For donation details, please contact Grace Foundation directly.</p>
      <Link className="btn btn-primary" href="/contact">Contact for Donation Details</Link>
    </ContentPage>
  );
}
