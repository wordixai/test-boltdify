import { useParams } from 'react-router-dom'

export default function JobDetail() {
  const { id } = useParams()
  
  // Mock data
  const job = {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Corp',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are looking for a skilled Frontend Developer to join our team...',
    requirements: [
      '3+ years of experience with React',
      'Strong knowledge of JavaScript',
      'Experience with modern frontend build tools'
    ]
  }

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.company} - {job.location}</p>
      <p>{job.type}</p>
      <h3>Job Description</h3>
      <p>{job.description}</p>
      <h3>Requirements</h3>
      <ul>
        {job.requirements.map((req, i) => (
          <li key={i}>{req}</li>
        ))}
      </ul>
    </div>
  )
}
