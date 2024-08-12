'use client'

import { Button, Divider, Hero } from 'react-daisyui'
import ROUTES from './lib/routes'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero>
        <Hero.Content className="text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello anon!</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <Button color="primary" tag="a" href={ROUTES.about}>
              Get Started
            </Button>
          </div>
        </Hero.Content>
      </Hero>

      <div className="w-full md:w-1/2 flex flex-col justify-center self-center">
        <div className="flex justify-center">
          <p className="py-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <Divider />

        <div className="flex justify-center">
          <p className="py-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </main>
  )
}
