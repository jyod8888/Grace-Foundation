import ContentPage from '@/components/ContentPage';

export const metadata = { title: 'Education | Grace Foundation' };

export default function EducationPage() {
  return (
    <ContentPage
      title="Education"
      subtitle="Supporting learning access, academic guidance, and distance education opportunities for students in need."
      image="/data/images/india-village-school.png"
      highlights={["Open and distance learning", "Student guidance", "Skill development", "Learning with dignity"]}
    >
      <h2>Distance, Vocational & Open Education</h2>
      <p>Education is one of the strongest ways to reduce poverty, empower women, and help families build a better future. Grace Foundation supports students through guidance, encouragement, and access to learning opportunities.</p>
      <p>Open and Distance Learning removes barriers by allowing learners to study according to their time, pace, and place. This approach can support students who may not be able to attend a traditional campus setting because of finances, family responsibilities, distance, or other challenges.</p>
      <p>We believe education should not feel unreachable. Through awareness, counseling, and encouragement, Grace Foundation helps students and families understand available educational paths and take confident steps toward growth.</p>
      <h3>Program Focus</h3>
      <ul>
        <li>Academic counseling and guidance for students.</li>
        <li>Support for poor and needy children pursuing education.</li>
        <li>Awareness of vocational, distance, and skill-based learning options.</li>
        <li>Encouragement for continued education and personal development.</li>
        <li>Community conversations that highlight the value of learning for both boys and girls.</li>
      </ul>
      <h3>Building Confidence Through Learning</h3>
      <p>Grace Foundation understands that learning is not only about books. It is also about confidence, communication, discipline, and hope. When students are supported, they begin to see new possibilities for themselves and their families.</p>
    </ContentPage>
  );
}
