import ContentPage from '@/components/ContentPage';

export const metadata = { title: 'About Us | Grace Foundation' };

export default function AboutPage() {
  return (
    <ContentPage
      title="About Grace Foundation"
      subtitle="A charity foundation committed to education, welfare, dignity, and service for underprivileged communities."
      image="/data/images/india-women-education.jpg"
      highlights={["Education and welfare", "Care for vulnerable children", "Community development", "Dignity-centered service"]}
    >
      <h2>Who We Are</h2>
      <p>Grace Foundation is an NGO established to promote welfare activities aimed at reducing human suffering and improving society, especially for poor, helpless, weak, and underprivileged people.</p>
      <p>The foundation’s work is rooted in the belief that every individual deserves access to dignity, support, education, and opportunities that help them build a better life. We serve with compassion, but we also believe in practical action that can be felt by families in their daily lives.</p>
      <p>Our approach brings together community awareness, student support, women’s empowerment, institutional care, and environmental responsibility. Each program is connected by one purpose: to help people realize their value, strengthen their confidence, and move toward a safer and more hopeful future.</p>
      <h3>Our Mission</h3>
      <p>Our mission is to develop a mature and self-reliant society based on equity, justice, honesty, social sensitivity, and a rich culture of service. We aim to support people across communities without discrimination based on caste, creed, religion, gender, or background.</p>
      <h3>Objectives of the Trust</h3>
      <ul>
        <li>Provide education facilities, guidance, and encouragement to poor and needy children.</li>
        <li>Promote social and educational welfare for underprivileged and orphan children.</li>
        <li>Offer academic counseling and guidance for students from any community.</li>
        <li>Support the needy, homeless, vulnerable children, and adults who require care.</li>
        <li>Encourage community partnerships that help families become more confident, informed, and self-reliant.</li>
      </ul>
      <h3>Our Commitment</h3>
      <p>Grace Foundation believes that service should be approachable, respectful, and meaningful. We welcome donors, volunteers, educators, families, and community members who want to be part of a mission that values hope, humanity, and long-term change.</p>
    </ContentPage>
  );
}
