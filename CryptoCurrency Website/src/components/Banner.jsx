import React from 'react'
import BannerCard from './BannerCard'
import Particle from './utils/Particle'

const Banner = () => (
  <>
    <div className="flex flex-col h-screen  lg:flex-row justify-between px-8 bg-no-repeat bg-right bg-banner-bg bg-contain">
      <Particle />
      <div className="flex flex-col  lg:flex-row mb-32 lg:justify-end">
        <div className="flex flex-col my-auto flex-grow  lg:w-1/2 ">
          <h1 className="text-2xl text-center md:text-4xl font-bold pt-8 lg:text-5xl lg:text-left text-white">
            Fastest & secure platform to invest in crypto
          </h1>
          <p className="py-8 sm:text-xl text-white  lg:w-1/2 opacity-70">
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.
          </p>
        </div>

        <div className="flex justify-center items-center flex-grow lg:w-1/2">
          <BannerCard />
        </div>
      </div>
    </div>
  </>
)

export default Banner
