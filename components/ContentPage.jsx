import Link from 'next/link';
import PageHero from './PageHero';

export default function ContentPage({ title, subtitle, image, children, highlights = [] }) {
  return (
    <>
      <PageHero title={title} text={subtitle} />
      <section>
        <div className="container content-wrap">
          <article className="content-card">{children}</article>
          <aside className="side-card">
            <img src={image} alt={title} />
            <h3>How you can help</h3>
            <p>Support Grace Foundation through donations, volunteering, community partnerships, and sharing the mission with others.</p>
            {highlights.length > 0 && (
              <ul>{highlights.map((item) => <li key={item}>{item}</li>)}</ul>
            )}
            <Link className="btn btn-primary" href="/contact">Get Involved</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
