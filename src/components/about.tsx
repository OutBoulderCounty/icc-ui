import React from 'react'
import Button from './button'


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
    <div className="bg-transparent sm:transform sm:-translate-y-10">
      <div className="max-w-full mx-auto p-4 xl:max-w-5xl lg:max-w-3xl md:max-w-2xl sm:max-w-full sm:p-10 xl:px-20 sm:rounded bg-violet">
        <h2 className="text-4xl pb-1 font-semibold text-white tracking-wider sm:text-5xl sm:pb-5">Care, with love.</h2>
        <div className="invisible sm:visible w-12 h-2 bg-white mb-0 sm:mb-5"></div>
        <dl className="space-y-10 p-1 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-12 sm:pb-10">
          {aboutData.map((card, index) => (
            <div key={index}>
              <dt>
                <div className="flex items-center justify-center h-10 w-10 rounded-md text-white">
                  {card.icon}
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-white font-semibold">{card.title}</p>
              </dt>
              <dd className="mt-2 text-base text-white font-light">
                {card.content}
              </dd>
            </div>
          ))}
        </dl>
        <Button color={'transparent'}>Our Mission</Button>
      </div>
    </div>
  )
}
