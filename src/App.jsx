import React from 'react'
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import CompanyProfile from './pages/CompanyProfile'
import JobDetail from './pages/JobDetail'

export default function App() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <h1><Link to="/">Job Board</Link></h1>
        </div>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies/:id" element={<CompanyProfile />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
        </Routes>
      </main>
    </div>
  )
}
