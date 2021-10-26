import React from 'react'


const aboutData = [
  {
    title: 'Community Informed',
    content: 'A resource informed, built, and utilized  by our LGBTQ+ communities.',
    icon: (
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    title: 'Competency',
    content: 'Providers share their experience so you know in advance. We believe that a willingness to treat our communities is not the same as competency.',
    icon: (
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  },
  {
    title: 'Transparency',
    content: ' Everything we see, you’ll see; we believe every bit of information helps create accessibility.',
    icon: (
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
]









export default function About() {
  return (
    <div className="py-12 bg-transparent">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-5xl lg:px-8 bg-violet">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {aboutData.map((card, index) => (
            <div key={index}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                  {card.icon}
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-white">{card.title}</p>
              </dt>
              <dd className="mt-2 text-base text-white">
                {card.content}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
