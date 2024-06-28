import { NavLink } from "react-router-dom"
import { ArrowIcon, MenuIcon } from "../../Icons"
import { ROUTES } from "../../reactRoute/RouteConstants"

function Navbar() {
    return (
        <div className="bg-[#FFF] flex items-center justify-between gap-[32px] py-[26px] max-xl:px-[6vw] px-[10vw] w-full">
            <img src="./images/logo.svg" className="max-w-[160px] max-md:max-w-[120px]" alt="" />
            <div className="flex items-center max-xl:gap-[24px] gap-[44px] max-lg:hidden">
                <NavLink
                    to={ROUTES.home}
                    className={({ isActive }) =>
                        isActive
                            ? "text-[#164ED4] cursor-pointer transition-all font-[500]"
                            : "text-[#4A4C56] cursor-pointer hover:text-[#164ED4] transition-all font-[500]"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to={ROUTES.generalVisaStatistics}
                    className={({ isActive }) =>
                        isActive
                            ? "text-[#164ED4] cursor-pointer transition-all font-[500]"
                            : "text-[#4A4C56] cursor-pointer hover:underline transition-all font-[500]"
                    }
                >
                    General Visa Statistics
                </NavLink>
                <NavLink
                    to={ROUTES.companyStatistics}
                    className={({ isActive }) =>
                        isActive
                            ? "text-[#164ED4] cursor-pointer transition-all font-[500]"
                            : "text-[#4A4C56] cursor-pointer hover:underline transition-all font-[500]"
                    }
                >
                    Company Statistics
                </NavLink>
            </div>
            <div className="flex items-center gap-[16px]">
                <MenuIcon className={' text-[#4A4C56] transition-all hover:text-[#164ED4] cursor-pointer lg:hidden'} />
                <span className="max-md:hidden text-[#164ED4] font-[600] py-[11px] px-[20px] lg:px-[36px] rounded-[4px] border-[#164ED4] border-[1px] cursor-pointer">
                    Log in
                </span>
                <span className="flex items-center gap-[8px] relative text-[#FFF] font-[600] py-[11px] group px-[16px] pr-[44px] rounded-[4px] bg-[#164ED4] cursor-pointer">
                    Sign Up
                    <ArrowIcon className={'duration-500 absolute top-[14px] right-[16px] group-hover:translate-x-[10px] group-hover:-translate-y-[10px] group-hover:opacity-0 group-hover:scale-0 origin-center transition-all'} />
                    <ArrowIcon className={'duration-500 absolute top-[32px] right-[32px] group-hover:translate-x-[18px] group-hover:-translate-y-[18px] group-hover:opacity-100 opacity-0 scale-0 group-hover:scale-100 origin-center transition-all'} />
                </span>
            </div>
        </div>
    )
}

export default Navbar