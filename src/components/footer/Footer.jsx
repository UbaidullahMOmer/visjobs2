import React from 'react'
import { ArrowRightIcon, FacebookIcon, InstagramIcon, LinkedInIcon, LocationIcon, MailIcon, YoutubeIcon } from '../../Icons'

function Footer() {
  return (
    <div className='bg-[#F9F9F8] flex flex-col gap-[32px] max-xl:px-[6vw] px-[10vw] py-[36px] pt-[60px]'>

      <div className="flex items-start justify-between gap-[32px] max-lg:flex-col">

        <div className="flex flex-col gap-[24px] max-xl:max-w-[320px] max-w-[420px] max-lg:max-w-full max-sm:items-center
        ">

          <img src="./images/footerLogo.svg" className='max-w-[144px]' alt="" />

          <p className='text-[#4A4C56] max-sm:text-center'>
            Our mission is to empower individuals seeking H1B opportunities by providing a user-friendly and intuitive job finding experience. With a deep understanding of the intricacies involved in securing H1B visas.
          </p>

          <div className="flex items-center gap-[12px] max-sm:w-full max-sm:justify-center">
            <div className="flex items-center cursor-pointer justify-center group w-[32px] h-[32px] rounded-[4px] bg-[#ffffff]">
              <LinkedInIcon className={'w-[20px] group-hover:text-[#164ED4] transition-all text-[#A5A5AB]'} />
            </div>
            <div className="flex items-center cursor-pointer justify-center group w-[32px] h-[32px] rounded-[4px] bg-[#ffffff]">
              <FacebookIcon className={'w-[20px] group-hover:text-[#164ED4] transition-all text-[#A5A5AB]'} />
            </div>
            <div className="flex items-center cursor-pointer justify-center group w-[32px] h-[32px] rounded-[4px] bg-[#ffffff]">
              <InstagramIcon className={'w-[20px] group-hover:text-[#164ED4] transition-all text-[#A5A5AB]'} />
            </div>
            <div className="flex items-center cursor-pointer justify-center group w-[32px] h-[32px] rounded-[4px] bg-[#ffffff]">
              <YoutubeIcon className={'w-[20px] group-hover:text-[#164ED4] transition-all text-[#A5A5AB]'} />
            </div>
          </div>

          <div className="flex items-center gap-[12px] max-sm:justify-center flex-wrap">

            <span className='hover:text-[#164ED4] cursor-pointer transition-all text-[#4A4C56]'>Conditions</span>

            <div className='h-[16px] w-[1px] bg-[#4A4C56]'></div>

            <span className='hover:text-[#164ED4] cursor-pointer transition-all text-[#4A4C56]'>Data Protection</span>

            <div className='h-[16px] w-[1px] bg-[#4A4C56]'></div>

            <span className='hover:text-[#164ED4] cursor-pointer transition-all text-[#4A4C56]'>Imprint</span>

          </div>

        </div>

        <div className="flex items-start gap-[42px] max-sm:flex-col max-sm:w-full">

          <div className="flex flex-col gap-[24px] max-sm:items-center max-sm:w-full">
            <span className='text-[20px] font-[600] text-[#4A4C56]'>
              Services
            </span>
            <div className="flex flex-col gap-[16px] max-sm:items-center">
              <div className="flex items-center gap-[6px]">
                <ArrowRightIcon className={'w-[18px]'} />
                <span className='text-[#4A4C56] hover:text-[#164ED4] cursor-pointer transition-all max-sm:text-center'>
                  Job Matching
                </span>
              </div>
              <div className="flex items-center gap-[6px]">
                <ArrowRightIcon className={'w-[18px]'} />
                <span className='text-[#4A4C56] hover:text-[#164ED4] cursor-pointer transition-all max-sm:text-center'>
                  Resume revamp
                </span>
              </div>
              <div className="flex items-center gap-[6px]">
                <ArrowRightIcon className={'w-[18px]'} />
                <span className='text-[#4A4C56] hover:text-[#164ED4] cursor-pointer transition-all max-sm:text-center'>
                  Interview Preparation
                </span>
              </div>
              <div className="flex items-center gap-[6px]">
                <ArrowRightIcon className={'w-[18px]'} />
                <span className='text-[#4A4C56] hover:text-[#164ED4] cursor-pointer transition-all max-sm:text-center'>
                  Visa Guidance
                </span>
              </div>
              <div className="flex items-center gap-[6px]">
                <ArrowRightIcon className={'w-[18px]'} />
                <span className='text-[#4A4C56] hover:text-[#164ED4] cursor-pointer transition-all max-sm:text-center'>
                  Community Support
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[24px] max-sm:items-center max-sm:w-full">
            <span className='text-[20px] font-[600] text-[#4A4C56]'>
              Contact us
            </span>
            <div className="flex flex-col gap-[16px] max-sm:items-center">
              <div className="flex items-center gap-[6px]">
                <div className="flex items-center cursor-pointer justify-center group w-[32px] h-[32px] rounded-[4px] bg-[#ffffff]">
                  <MailIcon className={'w-[20px] text-[#A5A5AB]'} />
                </div>
                <span className='text-[#4A4C56] hover:text-[#164ED4] cursor-pointer transition-all max-sm:text-center'>
                  visjobs@example.com
                </span>
              </div>
              <div className="flex items-center gap-[6px]">
                <div className="flex items-center cursor-pointer justify-center group w-[32px] h-[32px] rounded-[4px] bg-[#ffffff]">
                  <LocationIcon className={'w-[20px]  text-[#A5A5AB]'} />
                </div>
                <span className='text-[#4A4C56] hover:text-[#164ED4] cursor-pointer transition-all max-sm:text-center'>
                  8502 Preston Rd. Inglewood, Maine 98380
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      <hr className='border-[#D2D2D5]' />

      <div className="flex flex-col items-center gap-[20px] w-full">

        <span className='text-[#4A4C56] font-[Montserrat]'>
          © 2023 by VIS Job - All rights reserved.
        </span>

        <p className='text-[#4A4C56] text-[14px] font-[300] max-w-[700px] text-center'>
          In the pursuit of your dream H1B job, Vis Job stands as an independent entity, distinct from Amazon, EU SARL, or any affiliated companies. 48,000+ companies sponsored HIB visas
        </p>

      </div>

    </div>
  )
}

export default Footer