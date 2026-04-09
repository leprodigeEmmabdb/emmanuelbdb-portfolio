'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='relative md:pt-44 pt-28 bg-white  dark:bg-darklight bg-cover text-white'>
      <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10'>
        <div
          className='md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          
          {/* Badge */}
          <div className='flex gap-2 items-center'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              build data-driven products & scalable solutions
            </span>
          </div>

          {/* Titre */}
          <h1 className='text-midnight_text font-bold dark:text-white text-4xl  md:text-5xl md:leading-[1.15]'>
            Driving Business Impact through Project Management, Data & Technology
          </h1>

          {/* Sous-titre (ajout) */}
          <h2 className='text-lg text-blue-600 font-semibold'>
            Emmanuel Badibanga | PMO • Data Analyst • Software Engineer
          </h2>

          {/* Description */}
          <p className='text-grey dark:text-white/70 text-xl font-semibold'>
            Results-driven PMO, Developer, and Data Analyst passionate about building scalable solutions, optimizing business processes, and leveraging data to drive strategic decision-making in fast-paced environments.
          </p>

          {/* Ligne impact (ajout) */}
          <p className='text-sm text-grey dark:text-white/60'>
            Experience in Telecom (Orange RDC) • TTM Optimization • Data Analytics • Full-Stack Development
          </p>

          {/* CTA */}
          <a
            href='https://cvdesignr.com/p/68a71d8dce0d2?hl=fr_FR'
            className='py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 px-8'>
            Get My CV
          </a>

          {/* Liens (ajout) */}
          <div className='flex gap-4 mt-2'>
            <Link href='https://www.linkedin.com/in/emmanuel-badibanga/' className='text-sm text-blue-600 hover:underline'>
              LinkedIn
            </Link>
            <Link href='https://github.com/leprodigeEmmabdb' className='text-sm text-blue-600 hover:underline'>
              GitHub
            </Link>
          </div>

          <div className='flex items-center mt-12 gap-4'>
            <div className='flex items-center'>
              
              <a href="http://1" className='w-10! h-10! rounded-full border border-solid border-white -ml-3'>
                <Image
                  src={getImgPath('/images/hero/ecoservant_logo.webp')}
                  alt='hero-image'
                  width={100}
                  height={40}
                  quality={100}
                  className='w-10! h-10! rounded-full border border-solid border-white'
                />
              </a>

              <a href="http://2" className='w-10! h-10! rounded-full border border-solid border-white -ml-3'>
                  <Image
                    src={getImgPath('/images/hero/PSPO-logo.webp')}
                    alt='hero-image'
                    width={40}
                    height={40}
                    quality={100}
                    className='w-10! h-10! rounded-full border border-solid border-white'
                  />
              </a>

              <a href="http://3" className='w-10! h-10! rounded-full border border-solid border-white -ml-3'>
                <Image
                  src={getImgPath('/images/hero/capm-logo.webp')}
                  alt='hero-image'
                  width={40}
                  height={40}
                  quality={100}
                  className='w-10! h-10! rounded-full border border-solid border-white'
                />
              </a>
          
            </div>
            <div>
              <p className='text-sm font-normal text-grey max-w-56'>
                Let’s collaborate on impactful projects.{' '}
                <Link href='#' className='text-primary hover:text-blue-700'>
                  Contact me
                </Link>{' '}
                and let’s build something great together.
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 col-span-12 relative before:absolute before:content-[''] before:bg-[url('/images/hero/line-leyar.svg')] before:bg-no-repeat before:left-1/2 before:top-0 before:h-24 before:w-52 before:-z-10 before:translate-x-70% before:-translate-y-40% lg:before:inline-block before:hidden after:absolute after:content-[''] after:bg-[url('/images/hero/round-leyar.svg')] after:bg-no-repeat xl:after:inline-block after:hidden after:left-0 after:bottom-0 after:h-6.25 after:w-6.25 after:-z-10 after:-translate-x-1/2 after:translate-y-1/2">
          <Image
            src={getImgPath('/images/hero/DPM_PH111.png')}
            alt='My-image'
            width={350}
            height={150}
            quality={1000}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero