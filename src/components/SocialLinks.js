import { BsFillPersonLinesFill, BsMailbox } from 'react-icons/bs';
import{ FaGithub, FaLinkedin,  } from 'react-icons/fa';
const SocialLinks = [
    {
        id: 1,
        child: (
            <>
                LinkedIn <FaLinkedin  size={30}/>
            </>
        ),
        href: 'https://www.linkedin.com/in/nicholas-webb-954a1b239/',
        style: 'rounded-tr-md'

    },
    {
        id:2,
        child: (
            <>
                Github <FaGithub size={30}/>
            </>
        ),
        href: 'https://github.com/Kingnick253',
        

    },
    {
        id:3,
        child: (
            <>
                Resume <BsFillPersonLinesFill size={30}/>
            </>
        ),
        href: '',
        download: true,
        
       

    },
    {
        id:4,
        child: (
            <>
                Contact Me <BsMailbox  size={30}/>
            </>
        ),
        href: 'mailto:nicholaswebb2016@gmail.com',
       style:'rounded-br-md',

    },
]

export default SocialLinks;