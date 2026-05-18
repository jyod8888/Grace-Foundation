import Link from 'next/link';

export default function ProgramCard({ program }) {
  return (
    <Link className="program-card" href={program.href}>
      <img src={program.image} alt={program.title} />
      <div>
        <h3>{program.title}</h3>
        <p>{program.description}</p>
        <span>Learn more →</span>
      </div>
    </Link>
  );
}
