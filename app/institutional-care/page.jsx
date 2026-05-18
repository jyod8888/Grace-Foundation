import ContentPage from '@/components/ContentPage';

export const metadata = { title: 'Institutional Care | Grace Foundation' };

export default function InstitutionalCarePage() {
  return (
    <ContentPage
      title="Institutional Care"
      subtitle="Providing care, protection, shelter, and support for children and vulnerable people who need safety and dignity."
      image="/data/images/india-food-distribution.jpg"
      highlights={["Shelter and protection", "Child care support", "Long-term dignity", "Grace Village vision"]}
    >
      <h2>Care for Vulnerable Children</h2>
      <p>Many children are deprived of a dignified life due to difficult circumstances and may need shelter, care, food, and protection. Grace Foundation is committed to making a difference in the lives of such children.</p>
      <p>The Institutional Care program focuses on children who are vulnerable, neglected, abused, abandoned, or living in unsafe circumstances. The goal is to provide care that supports healing, safety, learning, and hope.</p>
      <p>Institutional care is more than a place to stay. It is a supportive environment where children and vulnerable individuals can experience safety, structure, guidance, and compassion. Grace Foundation seeks to create spaces where people feel protected and valued.</p>
      <h3>Objective</h3>
      <p>Grace Foundation has proposed the vision of a permanent abode, “Grace Village,” for children and other people in need of care and protection. This vision reflects the foundation’s hope to create a nurturing environment where care, education, and dignity come together.</p>
      <ul>
        <li>Provide safe care and support to vulnerable children.</li>
        <li>Help children receive education, guidance, and emotional support.</li>
        <li>Build a protective environment that encourages dignity and growth.</li>
        <li>Support long-term welfare through partnerships, donations, and community participation.</li>
      </ul>
      <h3>Hope Through Protection</h3>
      <p>Every child deserves safety, affection, and opportunity. Through institutional care, Grace Foundation works toward a future where vulnerable children are not forgotten but are supported with compassion and consistency.</p>
    </ContentPage>
  );
}
