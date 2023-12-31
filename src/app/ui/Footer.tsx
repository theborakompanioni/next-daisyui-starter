'use client'

import { Footer as DaisyFooter } from 'react-daisyui'
import Link from 'next/link'
import ROUTES from '../lib/routes'

export function Footer() {
  return (
    <div className="bg-base-300 text-base-300-content sticky top-[100vh] p-10">
      <DaisyFooter className="md:container mx-auto">
        <div>
          <DaisyFooter.Title>Services</DaisyFooter.Title>
          <Link className="link link-hover" href={ROUTES.index}>
            Index
          </Link>
          <Link className="link link-hover" href={ROUTES.settings}>
            Settings
          </Link>
        </div>
        <div>
          <DaisyFooter.Title>Company</DaisyFooter.Title>
          <Link className="link link-hover" href={ROUTES.about}>
            About
          </Link>
        </div>
        <div></div>
        <div></div>
      </DaisyFooter>
    </div>
  )
}
