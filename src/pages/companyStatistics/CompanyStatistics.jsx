import React from 'react'
import { ArrowRightIcon, ExpandIcon, SearchIcon } from '../../Icons'

const CompanyStatistics = () => {
    return (
        <>
            <div className="py-[60px] px-[10vw] max-xl:px-[6vw] flex flex-col gap-[56px]">

                <div className="flex items-center gap-[16px] px-[16px] py-[20px] bg-[#FFF] border-[#E9E9EA] border-[1px] rounded-[12px]">
                    <SearchIcon className={'text-[#4A4C56]'} />
                    <input type="text" placeholder='Search for a company... ' className='w-full outline-none bg-transparent placeholder:text-[#777980] text-[18px] text-[#4A4C56]' />
                </div>

                <div className="flex flex-col gap-[32px]">

                    <h1 className='text-[40px] text-[#164ED4] font-[700]'>
                        Meta
                    </h1>

                    <div className="grid grid-cols-3 gap-[32px]">

                        <div className="flex flex-col p-[30px] gap-[32px] bg-[#FFF] pb-[68px] border-[1px] border-[#E9E9EA] rounded-[20px]">

                            <div className="flex items-center justify-between gap-[24px]">

                                <h2 className='text-[#1D1F2C] text-[24px] font-[700]'>
                                    Filing Report
                                </h2>

                                <ExpandIcon className={'text-[#4A4C56] hover:text-[#164ED4] cursor-pointer transition-all hover:scale-125'} />

                            </div>

                            <div className="flex flex-col gap-[14px]">

                                <div className="flex items-center justify-between px-[16px] py-[8px] rounded-full bg-[#F6F8FA]">

                                    <div className="flex items-center gap-[8px]">

                                        <div className="p-[3px] rounded-full bg-[#164ED4]"></div>

                                        <span className=' text-[#4A4C56] text-[16px] font-[500]'>
                                            Total Fillings
                                        </span>

                                    </div>

                                    <span className='text-[#4A4C56]'>
                                        1234
                                    </span>

                                </div>

                                <div className="flex items-center justify-between px-[16px] py-[8px] rounded-full bg-[#E9FAF7]">

                                    <div className="flex items-center gap-[8px]">

                                        <div className="p-[3px] rounded-full bg-[#164ED4]"></div>

                                        <span className=' text-[#4A4C56] text-[16px] font-[500]'>
                                            Total Approvals
                                        </span>

                                    </div>

                                    <div className="flex items-center gap-[8px]">
                                        <ArrowRightIcon className={'rotate-[-90deg] text-[#22CAAD]'} />
                                        <span className='text-[#22CAAD]'>
                                            1234
                                        </span>
                                    </div>

                                </div>

                                <div className="flex items-center justify-between px-[16px] py-[8px] rounded-full bg-[#FEECEE]">

                                    <div className="flex items-center gap-[8px]">

                                        <div className="p-[3px] rounded-full bg-[#164ED4]"></div>

                                        <span className=' text-[#4A4C56] text-[16px] font-[500]'>
                                            Total Denials
                                        </span>

                                    </div>

                                    <div className="flex items-center gap-[8px]">
                                        <ArrowRightIcon className={'rotate-[90deg] text-[#EB3D4D]'} />
                                        <span className='text-[#EB3D4D]'>
                                            1234
                                        </span>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="flex flex-col p-[30px] gap-[32px] bg-[#FFF] border-[1px] border-[#E9E9EA] rounded-[20px]">

                            <div className="flex items-center justify-between gap-[24px]">

                                <h2 className='text-[#1D1F2C] text-[24px] font-[700]'>
                                    Overall Approval Rate
                                </h2>

                                <ExpandIcon className={'text-[#4A4C56] hover:text-[#164ED4] cursor-pointer transition-all hover:scale-125'} />

                            </div>

                            <div className="flex items-start gap-[30px] w-full justify-between">

                                <div className="flex flex-col items-start gap-[16px]">
                                    <h3 className='text-[40px] text-[#1D1F2C] font-[700]'>
                                        99.80%
                                    </h3>
                                    <div className="flex flex-col gap-[12px]">
                                        <span className='text-[14px] text-[#4A4C56]'>
                                            Approved: 1,111
                                        </span>
                                        <span className='text-[14px] text-[#4A4C56]'>
                                            Total : 1,234
                                        </span>
                                    </div>
                                </div>

                                <img src="./images/greenCircle.png" className='h-[190px]' alt="" />

                            </div>

                        </div>

                        <div className="flex flex-col p-[30px] gap-[32px] bg-[#FFF] border-[1px] border-[#E9E9EA] rounded-[20px]">

                            <div className="flex items-center justify-between gap-[24px]">

                                <h2 className='text-[#1D1F2C] text-[24px] font-[700]'>
                                    Overall Denial Rate
                                </h2>

                                <ExpandIcon className={'text-[#4A4C56] hover:text-[#164ED4] cursor-pointer transition-all hover:scale-125'} />

                            </div>

                            <div className="flex items-start gap-[30px] w-full justify-between">

                                <div className="flex flex-col items-start gap-[16px]">
                                    <h3 className='text-[40px] text-[#1D1F2C] font-[700]'>
                                        1.20%
                                    </h3>
                                    <div className="flex flex-col gap-[12px]">
                                        <span className='text-[14px] text-[#4A4C56]'>
                                            Denied: 123
                                        </span>
                                        <span className='text-[14px] text-[#4A4C56]'>
                                            Total : 1,234
                                        </span>
                                    </div>
                                </div>

                                <img src="./images/redCircle.png" className='h-[190px]' alt="" />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="px-[10vw] max-xl:px-[6vw] py-[64px] bg-[#F9F9F8] flex flex-col items-center justify-center gap-[32px]">

                
                
            </div>

        </>
    )
}

export default CompanyStatistics