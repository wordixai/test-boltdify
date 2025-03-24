import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const [type, setType] = useState('')

  // Mock data
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Corp',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Code Masters',
      location: 'New York',
      type: 'Contract'
    }
  ]

  const filteredJobs = jobs.filter(job => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase()) &&
      job.type.toLowerCase().includes(type.toLowerCase())
    )
  })

  return (
    <>
      <div className="search-filters">
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="">All Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
      </div>
      <div className="job-list">
        {filteredJobs.map(job => (
          <div key={job.id} className="job-card">
            <h3><Link to={`/jobs/${job.id}`}>{job.title}</Link></h3>
            <p>{job.company} - {job.location}</p>
            <p>{job.type}</p>
          </div>
        ))}
      </div>
    </>
  )
}
