import React from 'react'
import Particle from './utils/Particle'

const Features = () => (
  <>
    <div className="flex flex-col-reverse sm:mt-7 lg:flex-row space-x-6 py-28 justify-around   px-8  ">
      <Particle />
      <div className="flex w-1/2 flex-grow bg-no-repeat bg-cover bg-center bg-feature-bg  " />
      <div className="flex flex-col my-auto md:text-center  lg:w-1/2 flex-grow justify-end items-end">
        <div className="w-full flex flex-col">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug text-white">
            Why you should choose CRAPPO
          </h1>
          <p className="text-sm opacity-70 pt-6 text-white">
            Experience the next generation cryptocurrency platform. No financial
            borders, extra fees, and fake reviews.
          </p>
          <div className="pt-6">
            <a
              href="www.google.com"
              className="px-6 py-3 bg-brand-button rounded-full"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Features
