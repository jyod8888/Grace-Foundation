import ContentPage from '@/components/ContentPage';

export const metadata = { title: 'Mother Nature | Grace Foundation' };

export default function MotherNaturePage() {
  return (
    <ContentPage
      title="Mother Nature"
      subtitle="Encouraging public awareness and participation in protecting rivers, lakes, trees, animals, and natural resources."
      image="/images/page3-img1.jpg"
      highlights={["Environmental awareness", "Public participation", "Responsible care", "Cleaner communities"]}
    >
      <h2>Caring for the Environment</h2>
      <p>Nature has always been an integral part of human existence. Rivers, mountains, animals, trees, and public spaces sustain communities and deserve care, respect, and protection.</p>
      <p>Grace Foundation works to awaken and educate people about the upkeep of rivers, lakes, and other water bodies by organizing awareness activities with public participation. We believe that environmental care begins with small actions that become shared habits.</p>
      <p>A clean and healthy environment supports better living conditions, healthier families, and stronger neighborhoods. When communities participate in caring for nature, they also learn responsibility, unity, and respect for future generations.</p>
      <h3>Our Environmental Focus</h3>
      <ul>
        <li>Promote community awareness about nature and conservation.</li>
        <li>Encourage public participation in protecting water bodies and green spaces.</li>
        <li>Support habits and activities that enrich lives through a cleaner environment.</li>
        <li>Encourage children and youth to understand the value of natural resources.</li>
      </ul>
      <h3>Shared Responsibility</h3>
      <p>Mother Nature is not separate from community welfare. Protecting the environment protects families, animals, neighborhoods, and the beauty of the places we call home.</p>
    </ContentPage>
  );
}
