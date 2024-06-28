import React from 'react'
import { ExpandIcon } from '../../Icons'
import VerticalBoldColGraph from './components/VerticalBoldColGraph'
import VerticalBoldColGraph2 from './components/VerticalBoldColGraph2'
import MmaangCaseGraph from './components/MmaangCaseGraph'
import MostRecentApprovalPieGraph from './components/MostRecentApprovalPieGraph'
import JobTitleDistributionGraph from './components/JobTitleDistributionGraph'

const GeneralVisaStatistics = () => {
    return (
        <>
            <div className="flex flex-col gap-[40px] pt-[60px] py-[40px] max-xl:px-[6vw] px-[10vw]">

                <h1 className='text-[#1D1F2C] text-[48px] font-[700]'>
                    <span className='text-[#164ED4]'>MMAANG</span> Statistics
                </h1>

                <div className="flex flex-col xl:grid xl:grid-cols-3 gap-[32px]">

                    <div className="p-[32px] rounded-[20px] border-[1px] bg-[#FFF] border-[#E9E9EA] flex flex-col gap-[32px] w-full">

                        <div className="flex flex-col gap-[32px]">

                            <div className="flex justify-between items-center">
                                <h2 className='text-[#1D1F2C] text-[24px] font-[700] max-w-[270px]'>
                                    Most Recent Approval Rate (2024)
                                </h2>

                                <ExpandIcon className={'text-[#4A4C56] hover:text-[#164ED4] cursor-pointer transition-all hover:scale-125'} />

                            </div>

                            <img src="./images/graphs/circle.png" alt="" />

                        </div>

                        <div className="flex flex-wrap gap-[12px] w-full">
                            <div className="rounded-full bg-[#F6F8FA] px-[12px] py-[6px] gap-[8px] flex items-center">
                                <div className="w-[16px] h-[16px] bg-[#0081FB] rounded-full"></div>
                                <span className='text-[14px] text-[#4A4C56]'>
                                    Meta
                                </span>
                            </div>
                            <div className="rounded-full bg-[#F6F8FA] px-[12px] py-[6px] gap-[8px] flex items-center">
                                <div className="w-[16px] h-[16px] bg-[#FF9900] rounded-full"></div>
                                <span className='text-[14px] text-[#4A4C56]'>
                                    Amazon
                                </span>
                            </div>
                            <div className="rounded-full bg-[#F6F8FA] px-[12px] py-[6px] gap-[8px] flex items-center">
                                <div className="w-[16px] h-[16px] bg-[#4E4E4E] rounded-full"></div>
                                <span className='text-[14px] text-[#4A4C56]'>
                                    Apple
                                </span>
                            </div>
                            <div className="rounded-full bg-[#F6F8FA] px-[12px] py-[6px] gap-[8px] flex items-center">
                                <div className="w-[16px] h-[16px] bg-[#E50914] rounded-full"></div>
                                <span className='text-[14px] text-[#4A4C56]'>
                                    Netflix
                                </span>
                            </div>
                            <div className="rounded-full bg-[#F6F8FA] px-[12px] py-[6px] gap-[8px] flex items-center">
                                <div className="w-[16px] h-[16px] bg-[#33B5F1] rounded-full"></div>
                                <span className='text-[14px] text-[#4A4C56]'>
                                    Microsoft
                                </span>
                            </div>
                            <div className="rounded-full bg-[#F6F8FA] px-[12px] py-[6px] gap-[8px] flex items-center">
                                <div className="w-[16px] h-[16px] bg-[#5DB975] rounded-full"></div>
                                <span className='text-[14px] text-[#4A4C56]'>
                                    Google
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="p-[32px] rounded-[20px] min-h-[760px] border-[1px] bg-[#FFF] border-[#E9E9EA] flex flex-col gap-[32px] w-full col-start-2 col-end-4 justify-between">

                        <div className="flex flex-col gap-[32px]">

                            <div className="flex justify-between items-center gap-[24px]">
                                <h2 className='text-[#1D1F2C] text-[24px] font-[700]'>
                                    MMAANG Case Status Distribution
                                </h2>
                                <ExpandIcon className={'text-[#4A4C56] hover:text-[#164ED4] cursor-pointer transition-all hover:scale-125'} />
                            </div>

                            <div className="rounded-full bg-[#F6F8FA] px-[12px] py-[6px] w-fit gap-[36px] flex items-center flex-wrap">
                                <div className="flex items-center gap-[8px]">
                                    <div className="w-[16px] h-[16px] bg-[#4ED5BD] rounded-full"></div>
                                    <span className='text-[14px] text-[#4A4C56]'>
                                        Certified
                                    </span>
                                </div>
                                <div className="flex items-center gap-[8px]">
                                    <div className="w-[16px] h-[16px] bg-[#F3617C] rounded-full"></div>
                                    <span className='text-[14px] text-[#4A4C56]'>
                                        Denied
                                    </span>
                                </div>
                                <div className="flex items-center gap-[8px]">
                                    <div className="w-[16px] h-[16px] bg-[#FFD540] rounded-full"></div>
                                    <span className='text-[14px] text-[#4A4C56]'>
                                        Withdrawn
                                    </span>
                                </div>
                            </div>

                        </div>

                        <MmaangCaseGraph />

                    </div>

                </div>

            </div>

            <div className="flex flex-col gap-[40px] py-[40px] max-xl:px-[6vw] px-[10vw]">

                <h1 className='text-[#1D1F2C] text-[48px] font-[700]'>
                    <span className='text-[#164ED4]'>General</span>  Statistics
                </h1>

                <div className="flex flex-col xl:grid xl:grid-cols-3 gap-[32px]">

                    <div className="p-[32px] rounded-[20px] bg-[#FFF] border-[1px] items-center border-[#E9E9EA] flex flex-col gap-[32px] w-full col-start-1 col-end-3 justify-between">
                        <div className="flex justify-between items-center gap-[24px] w-full">
                            <h2 className='text-[#1D1F2C] text-[24px] font-[700]'>
                                Job Title Distribution
                            </h2>
                            <ExpandIcon className={'text-[#4A4C56] hover:text-[#164ED4] cursor-pointer transition-all hover:scale-125'} />
                        </div>

                        <JobTitleDistributionGraph/>

                    </div>

                    <div className="p-[32px] rounded-[20px] border-[1px] bg-[#FFF] border-[#E9E9EA] flex flex-col gap-[32px] w-full">

                        <div className="flex flex-col gap-[32px]">

                            <div className="flex justify-between items-center">
                                <h2 className='text-[#1D1F2C] text-[24px] font-[700] max-w-[270px]'>
                                    Wage Information
                                </h2>

                                <ExpandIcon className={'text-[#4A4C56] hover:text-[#164ED4] cursor-pointer transition-all hover:scale-125'} />
                            </div>


                            <div className="rounded-full bg-[#F6F8FA] px-[12px] py-[6px] w-fit gap-[8px] flex items-center flex-wrap">
                                <div className="w-[16px] h-[16px] bg-[#4571DD] rounded-full"></div>
                                <span className='text-[14px] text-[#4A4C56]'>
                                    Numbers of Employees
                                </span>
                            </div>

                            {/* <img src="./images/graphs/barGraph.png" alt="" /> */}
                            <VerticalBoldColGraph />

                            <h2 className='font-[600] text-[#1D1F2C] text-center w-full text-[18px]'>
                                Wages Range: 60,000k - 110,000k
                            </h2>

                        </div>

                    </div>

                    <div className="verticalBoldColGraph2 p-[32px] rounded-[20px] max-h-[760px] bg-[#FFF] border-[1px] items-center border-[#E9E9EA] flex flex-col gap-[32px] w-full  justify-between">
                        <div className="flex flex-col gap-[20px] w-full">

                            <div className="flex justify-between items-center gap-[24px] w-full">
                                <h2 className='text-[#1D1F2C] text-[24px] font-[700]'>
                                    Job Title Distribution
                                </h2>
                                <ExpandIcon className={'text-[#4A4C56] hover:text-[#164ED4] cursor-pointer transition-all hover:scale-125'} />
                            </div>

                            <p className='text-[#1D1F2C] w-full text-start'>
                                Top 6 states with top approvals
                            </p>

                        </div>

                        {/* <img src="./images/graphs/lineGraph.png" className='' alt="" /> */}
                        <VerticalBoldColGraph2 />

                    </div>

                    <div className="p-[32px] rounded-[20px] border-[1px] bg-[#FFF] border-[#E9E9EA] flex flex-col gap-[32px] w-full col-start-2 col-end-4">

                        <div className="flex flex-col gap-[32px] items-center">

                            <div className="flex flex-col gap-[20px] w-full">

                                <div className="flex justify-between items-center">
                                    <h2 className='text-[#1D1F2C] text-[24px] font-[700] max-w-[270px]'>
                                        Most Recent Approval Rate (2024)
                                    </h2>
                                    <ExpandIcon className={'text-[#4A4C56] hover:text-[#164ED4] cursor-pointer transition-all hover:scale-125'} />
                                </div>

                                <p className='text-[#1D1F2C] text-[14px]'>
                                    Categorize employers based on their type.
                                </p>

                            </div>

                            <MostRecentApprovalPieGraph />

                        </div>

                        <div className="flex flex-wrap gap-[12px] w-full">
                            <div className="rounded-full bg-[#F6F8FA] px-[12px] py-[6px] gap-[8px] flex items-center">
                                <div className="w-[16px] h-[16px] bg-[#0081FB] rounded-full"></div>
                                <span className='text-[14px] text-[#4A4C56]'>
                                    Meta
                                </span>
                            </div>
                            <div className="rounded-full bg-[#F6F8FA] px-[12px] py-[6px] gap-[8px] flex items-center">
                                <div className="w-[16px] h-[16px] bg-[#FF9900] rounded-full"></div>
                                <span className='text-[14px] text-[#4A4C56]'>
                                    Amazon
                                </span>
                            </div>
                            <div className="rounded-full bg-[#F6F8FA] px-[12px] py-[6px] gap-[8px] flex items-center">
                                <div className="w-[16px] h-[16px] bg-[#4E4E4E] rounded-full"></div>
                                <span className='text-[14px] text-[#4A4C56]'>
                                    Apple
                                </span>
                            </div>
                            <div className="rounded-full bg-[#F6F8FA] px-[12px] py-[6px] gap-[8px] flex items-center">
                                <div className="w-[16px] h-[16px] bg-[#E50914] rounded-full"></div>
                                <span className='text-[14px] text-[#4A4C56]'>
                                    Netflix
                                </span>
                            </div>
                            <div className="rounded-full bg-[#F6F8FA] px-[12px] py-[6px] gap-[8px] flex items-center">
                                <div className="w-[16px] h-[16px] bg-[#33B5F1] rounded-full"></div>
                                <span className='text-[14px] text-[#4A4C56]'>
                                    Microsoft
                                </span>
                            </div>
                            <div className="rounded-full bg-[#F6F8FA] px-[12px] py-[6px] gap-[8px] flex items-center">
                                <div className="w-[16px] h-[16px] bg-[#5DB975] rounded-full"></div>
                                <span className='text-[14px] text-[#4A4C56]'>
                                    Google
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default GeneralVisaStatistics