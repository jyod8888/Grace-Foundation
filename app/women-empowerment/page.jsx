import ContentPage from '@/components/ContentPage';

export const metadata = { title: 'Women Empowerment | Grace Foundation' };

export default function WomenPage() {
  return (
    <ContentPage
      title="Women Empowerment"
      subtitle="Promoting dignity, equality, opportunity, and participation for women in society."
      image="/data/images/india-women-education.jpg"
      highlights={["Equal opportunity", "Social dignity", "Economic participation", "Confidence and leadership"]}
    >
      <h2>Empowering Women and Families</h2>
      <p>Even after many years of progress, gender discrimination continues to affect communities. Grace Foundation is committed to supporting efforts that reduce inequality and promote dignity for women.</p>
      <p>We believe women deserve equal economic, cultural, educational, and social opportunities. Empowering women strengthens families, improves communities, and creates long-term social change.</p>
      <p>Our work encourages women to participate in education, community life, decision-making, and personal development. When women are respected and supported, children, families, and neighborhoods benefit as well.</p>
      <h3>Grace Foundation Objectives</h3>
      <ul>
        <li>Create awareness about equal rights and social dignity.</li>
        <li>Support women through education and community participation.</li>
        <li>Encourage confidence, independence, and access to opportunities.</li>
        <li>Promote safe and respectful spaces where women can be heard and supported.</li>
        <li>Strengthen families by supporting the growth and leadership of women.</li>
      </ul>
      <h3>A More Equal Future</h3>
      <p>Women’s empowerment is not only a program area for Grace Foundation. It is a commitment to fairness, respect, and the belief that every woman should have the opportunity to live with confidence and dignity.</p>
    </ContentPage>
  );
}
