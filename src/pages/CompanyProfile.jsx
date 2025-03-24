import { useParams } from 'react-router-dom'

export default function CompanyProfile() {
  const { id } = useParams()
  
  // Mock data
  const company = {
    id: 1,
    name: 'Tech Corp',
    description: 'A leading technology company specializing in web development.',
    location: 'Remote',
    website: 'https://techcorp.com'
  }

  return (
    <div>
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      <p>Location: {company.location}</p>
      <a href={company.website} target="_blank" rel="noreferrer">Visit Website</a>
    </div>
  )
}
