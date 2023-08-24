// explicitly force static page 
export const dynamic = 'force-static'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Myspace clone with limited functionality'
}

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <p>Myspace clone with limited functionality</p>
    </main>
  )
}