import ContentPage from '@/components/ContentPage';

export const metadata = { title: 'Our Mission | Grace Foundation' };

export default function MissionPage() {
  return (
    <ContentPage
      title="Our Mission in Action"
      subtitle="Serving families through compassion, education, mentorship, care, and community partnerships."
      image="/data/images/india-village-school.png"
      highlights={["Compassion with accountability", "Stronger neighborhoods", "Dignity for every person", "Practical community support"]}
    >
      <h2>Serving Families Through Compassion and Service</h2>
      <p>Grace Foundation responds to practical needs in the community through education support, mentorship, health awareness, care for vulnerable families, and programs that encourage dignity and self-reliance.</p>
      <p>We partner with volunteers, community leaders, and local supporters to provide consistent support to children, women, senior citizens, and families who need safe opportunities to grow. Our mission is not only to offer help in the moment, but also to create pathways for people to feel seen, valued, and capable.</p>
      <p>Every program is guided by the belief that meaningful service must listen first. We seek to understand the lived experiences of the people we serve, then respond with programs that are respectful, realistic, and helpful.</p>
      <h3>Our Vision</h3>
      <p>We envision communities where every child learns, every woman is empowered, every family has access to care, and every person is treated with dignity. Grace Foundation hopes to become a trusted support system where people can find guidance, encouragement, and connection.</p>
      <h3>How We Work</h3>
      <ul>
        <li>Listen to community needs and respond with practical support.</li>
        <li>Build programs that create measurable and meaningful change.</li>
        <li>Encourage volunteerism, partnership, and social responsibility.</li>
        <li>Promote education, compassion, and awareness as tools for long-term transformation.</li>
        <li>Support families through respectful communication and reliable follow-up.</li>
      </ul>
      <h3>Why It Matters</h3>
      <p>When a child receives guidance, a woman receives encouragement, or a family receives support during a difficult season, the effect can reach far beyond one moment. Grace Foundation exists to nurture those moments into lasting hope.</p>
    </ContentPage>
  );
}
