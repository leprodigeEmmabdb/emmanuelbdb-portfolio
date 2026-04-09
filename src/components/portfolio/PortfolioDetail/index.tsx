import React from 'react'

const PortfolioDetail = () => {
  return (
    <>
      <section className='md:py-24 py-16 dark:bg-darkmode'>
        <div className='container mx-auto max-w-6xl'>
          <div className='flex md:flex-row flex-col items-start w-full justify-between flex-wrap sm:flex-nowrap lg:gap-0 gap-8'>
            
            <div className='lg:w-[60%] w-full'>
              
              <div className='pb-[3.625rem]'>
                <p className='md:text-[1.6875rem] text-[1.0625rem] md:leading-[2.25rem] leading-[2rem] font-normal text-midnight_tex dark:text-white'>
                  This project focuses on designing and delivering a scalable digital solution that improves business processes and accelerates time-to-market. By combining project management practices with technical implementation, I contributed to building efficient and reliable systems aligned with business needs.
                </p>
              </div>

              <div className='flex items-start justify-between sm:flex-row flex-col lg:gap-0 gap-4'>
                
                <p className='sm:text-lg text-base font-normal text-secondary max-w-[19.4375rem] dark:text-white/50'>
                  From a business perspective, the objective was to optimize workflows, improve coordination between stakeholders, and ensure better tracking of deliverables. This resulted in more structured project execution and improved operational efficiency.
                </p>

                <p className='sm:text-lg text-base font-normal text-secondary max-w-[19.4375rem] dark:text-white/50'>
                  On the technical side, modern tools and technologies were used to build scalable solutions, automate processes, and support data-driven decision-making through analytics and reporting systems.
                </p>

              </div>
            </div>

            <div
              className='flex flex-col items-start bg-white shadow-[0px_20px_80px_0px_#68758D26] pt-10 lg:pl-14 pl-9 pb-8 lg:pr-40 pr-10 lg:w-[30%] w-full dark:bg-darklight'
              data-aos='fade-left'
              data-aos-delay='200'
              data-aos-duration='1000'>

              <span className='pb-6 text-2xl text-primary'>Key Contributions</span>
              <span className='pb-6 text-lg'>Project Planning & Coordination</span>
              <span className='pb-6 text-lg'>Process Optimization (TTM)</span>
              <span className='pb-6 text-lg'>Data Analysis & Reporting</span>
              <span className='pb-6 text-lg'>Full-Stack Development</span>
              <span className='pb-6 text-lg'>Stakeholder Management</span>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PortfolioDetail