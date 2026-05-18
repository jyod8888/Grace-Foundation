import Gallery from '@/components/Gallery';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';

export const metadata = { title: 'Children | Grace Foundation' };

export default function ChildrenPage() {
  return (
    <>
      <PageHero title="Children" text="Supporting children with care, education, safety, and opportunities to grow." />
      <section>
        <div className="container content-card">
          <h2>Helping Children Realize Their Greatness</h2>
          <p>Grace Foundation believes every child deserves dignity, care, protection, and the opportunity to learn. Our children-focused work supports education, guidance, and welfare for children who face difficult life circumstances.</p>
          <p>Through community support and responsible partnerships, we aim to provide practical help that strengthens each child’s future.</p>
        </div>
      </section>
      <section className="gallery-section">
        <div className="container">
          <SectionHeader eyebrow="Gallery" title="Children and community programs" />
          <Gallery />
        </div>
      </section>
    </>
  );
}
