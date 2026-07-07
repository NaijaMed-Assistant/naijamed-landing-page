import { SectionHeader } from '../ui/SectionHeader';

const PROBLEMS = [
  {
    title: 'Delayed Access to Medical Guidance',
    description: 'Many Nigerians avoid seeking health support due to long wait times, distance to facilities, and cost barriers — often until symptoms become serious.',
  },
  {
    title: 'Confusing and Unexplained Symptoms',
    description: 'Patients frequently struggle to describe or understand their symptoms, leading to misunderstandings, missed diagnoses, and uninformed self-treatment.',
  },
  {
    title: 'Overwhelming Doctor Workloads',
    description: 'With some regions having a doctor-to-patient ratio as low as 1 to 5,000, doctors cannot gather complete patient context quickly or give every case the attention it needs.',
  },
  {
    title: 'Missed or Late Emergency Recognition',
    description: 'Emergency warning signs are often ignored, misinterpreted, or acted upon too late — contributing to avoidable outcomes that could have been prevented with timely guidance.',
  },
  {
    title: 'Fragmented Patient-Doctor Communication',
    description: 'Conversations between patients and care providers are often disconnected, poorly documented, and difficult to continue across multiple touchpoints.',
  },
  {
    title: 'Uninformed Health Decisions',
    description: 'Millions of Nigerians — especially in rural, elderly, and low-literacy populations — make health decisions daily without access to credible, relevant guidance.',
  },
];

export function Problem() {
  return (
    <section id="problem" className="section section--subtle" aria-labelledby="problem-heading">
      <div className="container">
        <SectionHeader
          eyebrow="The Problem"
          title='Nigeria&apos;s Healthcare Gap Is&nbsp;<br />Too Wide to Ignore'
          description="Millions of Nigerians face daily health decisions without reliable guidance, while doctors are overwhelmed and under-resourced. This is the reality Naijamed was built to address."
        />

        <div className="problem-grid" role="list">
          {PROBLEMS.map((item, i) => (
            <div key={i} className="problem-item" role="listitem">
              <div className="problem-item__number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
