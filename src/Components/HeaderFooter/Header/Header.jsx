import React, { useEffect, useState } from 'react';
import { employersData, industriesWeSupport, jobseekersData, whyTalentAvenue } from '../MenuItems';
import { IoMenu as MobileIcon} from "react-icons/io5";
import MobileSideMenu from './MobileSideMenu';
import DropDown from './DropDown';
import { Link } from 'react-router-dom';
import Logo from '../../../Images/HeaderFooter/Logo1.png'

const Header = () => {
    const [wtaCheck, setWTACheck] = useState(false);
    const [empCheck, setEmpCheck] = useState(false);
    const [iwsCheck, setIWSCheck] = useState(false);
    const [jsCheck, setJSCheck] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const [ShowHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScroll] = useState(0)
    

    const HandleScroll = () => {
        if(window.scrollY > lastScrollY && lastScrollY > 100){
            setShowHeader(false)
        }else{
            setShowHeader(true)
        }
        setLastScroll(window.scrollY)
    }


    useEffect(() => {
        window.addEventListener('scroll', HandleScroll);
        return(() => {
            window.removeEventListener('scroll', HandleScroll);
        })
    })

    return (
    <>
    <div className='w-full bg-[#707070] py-1 hidden lg:flex flex-row justify-center'>  
        <Link className='leading-none text-g-1 font-semibold underline underline-offset-[3px]' to={'/job-seekers/application-form'}>Looking for a job?</Link>
        <Link className='leading-none text-g-1 font-semibold underline underline-offset-[3px] ml-4' to={'/employers/application-form'}>Looking for the candidates?</Link>
    </div>
    
    <div className={`flex flex-wrap flex-row bg-[#000000] px-X-Header py-Y-Header sticky left-0 top-0 z-10 w-[100%] transition-transform ease-in-out duration-500 shadow-sm shadow-[#bd996055] transform ${ShowHeader ? 'translate-y-0':'-translate-y-full'}`}>
        {/* Mobile Menu */}
        <div className='w-[25%] flex lg:w-[0%] lg:hidden justify-start items-center'>
            <MobileIcon className='text-g-1 text-[2rem]' onClick={() => setOpenMobileMenu(true)}/>
            <MobileSideMenu callMobileMenu={setOpenMobileMenu} mobileMenuCalled={openMobileMenu} />
        </div> 

        {/* Logo Section */}
        <div className='w-[50%] lg:w-[20%]'>
            <img src={Logo} alt='Talent Avenue' className='h-auto w-[200px] cursor-pointer lg:w-[12rem] 2xl:w-[200px]' onClick={() => window.location.href='/'} />
        </div>

        {/* Desktop Menu Section */}
        <div className='w-[60%] hidden lg:flex justify-center items-center space-x-7'>

            {/* About Us */}
            <DropDown 
                title={whyTalentAvenue.Name}
                link={'/why-talent-avenue'}
                content={{
                    left: (
                        <>
                            <h2 className='text-g-1 text-[4rem] mb-3'>{whyTalentAvenue.Icon}</h2>
                            <h3 className='text-[1.3rem] capitalize tracking-wider font-[600] text-w-1'>{whyTalentAvenue.TaglineSimple}</h3>
                            <Link to={'/'} className='text-[1.5rem] capitalize tracking-wider font-[700] text-g-1 pb-0 border-b-[2px] border-g-1'>{whyTalentAvenue.TaglineUnderlined}</Link>
                        </>
                    ),
                    right:whyTalentAvenue.ChildPages,
                }}
                isOpen={wtaCheck}
                setIsOpen={setWTACheck}
            />
            {/* Employers */}
            <DropDown 
                title={employersData.Name}
                link={employersData.Link}
                content={{
                    left: (
                        <>
                            <h2 className='text-g-1 text-[4rem] mb-3'>{employersData.Icon}</h2>
                            <h3 className='text-[1.3rem] capitalize tracking-wider font-[600] text-w-1'>{employersData.TaglineSimple}</h3>
                            <Link to={employersData.Link} className='text-[1.5rem] capitalize tracking-wider font-[700] text-g-1 pb-0 border-b-[2px] border-g-1'>{employersData.TaglineUnderlined}</Link>
                        </>
                    ),
                }}
                isOpen={empCheck}
                setIsOpen={setEmpCheck}
            />

            {/* Job Seekers */}
            <DropDown 
                title={jobseekersData.Name}
                link={jobseekersData.Link}
                content={{
                    left: (
                        <>
                            <h2 className='text-g-1 text-[4rem] mb-3'>{jobseekersData.Icon}</h2>
                            <h3 className='text-[1.3rem] capitalize tracking-wider font-[600] text-w-1'>{jobseekersData.TaglineSimple}</h3>
                            <Link to={jobseekersData.Link} className='text-[1.5rem] capitalize tracking-wider font-[700] text-g-1 pb-0 border-b-[2px] border-g-1'>{jobseekersData.TaglineUnderlined}</Link>
                        </>
                    ),
                }}
                isOpen={jsCheck}
                setIsOpen={setJSCheck}
            />

            {/* Industries We Support */}
            <DropDown 
                title={industriesWeSupport.Name}
                link={industriesWeSupport.Link}
                content={{
                    left:(
                        <>
                            <h2 className='text-g-1 text-[4rem] mb-3'>{industriesWeSupport.Icon}</h2>
                            <h3 className='text-[1.3rem] capitalize tracking-wider font-[600] text-w-1'>{industriesWeSupport.TaglineSimple}</h3>
                            <Link to={industriesWeSupport.Link} className='text-[1.5rem] capitalize tracking-wider font-[700] text-g-1 pb-0 border-b-[2px] border-g-1'>{industriesWeSupport.TaglineUnderlined}</Link>
                        </>
                    ),
                    // right: industriesWeSupport.ChildPages,
                }}
                isOpen={iwsCheck}
                setIsOpen={setIWSCheck}
            />
            
            {/* <DropDown title={'Find Candidates'} link={'/'} isOpen={findCheck} setIsOpen={setFindCheck}/>     */}
        </div>

        {/* Logo Section */}
        <div className='hidden lg:flex justify-end items-center lg:w-[20%]'>
            <Link className='text-[1.05rem] relative 2xl:text-[1.2rem] uppercase px-3 py-1 border-[1.5px] border-g-1 bg-transparent leading-tight font-semibold text-g-1 hover:text-w-1 hover:border-[1.5px] rounded-[20px] hover:border-w-1 transform hover:scale-[1.05] transition-all duration-500 ease-in-out ' to={'/contact-us'}>Contact Us</Link>
        </div>

    </div>

    </>
    );
};


export default Header;
