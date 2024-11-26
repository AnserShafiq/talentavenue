import { FaQuestion } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";

export const MenuItems = [
    {
        Name: 'Home',
        Link: '/',
    },
]


export const whyTalentAvenue = {
    Name: 'About Us',
    Icon: <FaQuestion/>,
    TaglineSimple: 'Need knowledge about',
    TaglineUnderlined: 'Talent avenue?',
    ChildPages: [
        {
            ChildName: 'Why Talent Avenue',
            Link: '/why-talent-avenue',
        },{
            ChildName: 'How we work',
            Link: '/how-we-work',
        },{
            ChildName: "FAQ's",
            Link: '/faqs',
        },
    ]
}


export const industriesWeSupport = {
    Name: 'Industries we deal',
    Icon: <LuCrown/>,
    Link:'/industries-we-deal',
    TaglineSimple: 'Have a look on',
    TaglineUnderlined: 'industries we deal?',
}
export const employersData = {
    Name: 'Employers',
    Icon: <LuCrown/>,Link:'/employers',
    TaglineSimple: 'Gather more info about',
    TaglineUnderlined: 'Talent we provides!!',
}
export const jobseekersData = {
    Name: 'Job Seekers',
    Icon: <LuCrown/>,
    Link:'/job-seekers',
    TaglineSimple: 'Looking for Job options',
    TaglineUnderlined: 'enrol to attract',
}

export const FooterPages = [
    {
        Name: 'About Us',
        Link: '/',
    },{
        Name: 'Privacy Policy',
        Link: '/',
    },{
        Name: 'Security & Phishing',
        Link: '/',
    },{
        Name: 'Cookies Policy',
        Link: '/',
    },{
        Name: 'Terms Of Use',
        Link: '/',
    },
]