import React, { useEffect, useState } from 'react'
import MainHead from '../../Components/SectionsHead/MainHead'
import Main from '../../Images/Recruitment/Main.png'
import RC1 from '../../Images/Recruitment/Temporary.png'
import RC2 from '../../Images/Recruitment/Permanent.png'
import RC3 from '../../Images/Recruitment/Business.png'
import RC4 from '../../Images/Recruitment/Managed.png'
import RC5 from '../../Images/Recruitment/Ourtrainings.png'
import { Link } from 'react-router-dom'
const RecruitmentCard = ({type,mobileView, title, targetIcon,desc,link }) => {
    return(
        <div className=''>
            {
                type=== 'Main' ? (
                    <div className={`h-[57vh] lg:h-[66vh] 2xl:h-[50vh] my-4 lg:my-0 ${mobileView ? 'flex flex-col': 'hidden lg:flex flex-col'} relative shadow-xl shadow-[#bc9a640f] bg-[#0000007f] rounded-[25px] rounded-[25px]`}>
                        <img className='w-full h-[100%] rounded-[25px] object-center' src={targetIcon} alt='Recruitment Solutions By Talent Avenue' />
                    </div>
                ) :(
                    <div className={`h-[60vh] lg:h-[66vh] 2xl:h-[50vh] my-4 lg:my-0 ${mobileView ? 'flex flex-col': 'hidden lg:flex flex-col'} relative shadow-xl shadow-[#bc9a640f] bg-[#0000007f] justify-center px-4 items-center text-center h-[100%] rounded-[25px]`} >
                        <img className='w-auto mb-5 h-[9rem]' src={targetIcon} alt={`${title}'s Icon`}/>
                        <h3 className='text-[2rem] text-g-1 font-bold capitalize tracking-wider leading-none'>{title}</h3>
                        <p className=' text-cardText-d text-w-1 leading-tight font-normal my-4'>{desc}</p>
                        <Link className='text-g-1 text-[1.3rem] bg-[#ffffff21] px-3 py-1 my-2 rounded-xl' to={link}>{title}</Link>
                    </div>
                )
            }
        </div>
    )
}

const RecruitmentSols = () => {
    const BodyText = {
        D_Name: 'Recruitment Solutions',
        M_Name: 'Recruitment Sols',
        Para: 'Unlock your business potential with Talent Avenue Staffing Solutions. Explore our complete range of services, tailored for organizations of every size and scale.'
    }

    const [mobileCheck, setMobileView] = useState(false);

    useEffect(() => {
        if(window.innerWidth < 1000){
            setMobileView(true);
        }else{
            setMobileView(false)
        }
    },[setMobileView])

    const Recruitments = [
        {
            type: '',
            mobile:true,
            title:'Contractual Placements',
            img: RC1,
            desc: 'We manage the entire contract based recruitment process, from candidate search to payroll and administration.',
            link:'/',
        },{
            type:'Main',
            mobile:false,
            img: Main,
        },{
            type: '',
            mobile:true,
            title:'Permanent Placements',
            img: RC2,
            desc: 'From sourcing to shortlisting, we guarantee the right match for your direct hire needs.',
            link:'/',
        },{
            type: '',
            mobile:true,
            title:'Business Essentials',
            img: RC3,
            desc: 'Use our expertise to find the most diverse and capable talent in the market. And become a well managed business.',
            link:'/',
        },{
            type: '',
            mobile:false,
            title:'Managed Outsourcing',
            img: RC4,
            desc: 'Use our expertise to find the most diverse and capable talent in the market. And become a well managed business.',
            link:'/',
        },{
            type: '',
            mobile:false,
            title:'Our Trainings',
            img: RC5,
            desc: 'Use our expertise to find the most diverse and capable talent in the market. And become a well managed business.',
            link:'/',
        },
    ]

    return (
        <div className='flex flex-col justify-center items-center my-sm w-[95%] lg:w-[80%] 2xl:w-[70%] h-[100%] mx-auto'>
            <MainHead title={
                mobileCheck ? (BodyText.M_Name) : (BodyText.D_Name)
            } titleColor={'w-1'} description={BodyText.Para} descriptionColor={'w-1'}/>
            <div className='flex flex-col lg:grid lg:grid-cols-3 w-[80%] 2xl:w-[90%] gap-x-[6%] gap-y-[4%] mt-5 mb-3' >
                {
                    Recruitments.map((Child, index) => (  <RecruitmentCard type={Child.type} mobileView={Child.mobile} title={Child.title} desc={Child.desc} link={Child.link} targetIcon={Child.img} key={index} />))
                }
            </div>
            <Link className='block lg:hidden text-[1.3rem] hover:bg-g-1 text-g-1 hover:text-w-1 px-4  py-1 rounded-[20px] border-g-1 mb-7 border-2' to={'/'}>View More</Link>
        </div>
    )
}

export default RecruitmentSols