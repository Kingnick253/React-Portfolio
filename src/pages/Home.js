import React from 'react'
import ProfilePic from '../images/profile-picture.jpg';
import { BsForwardFill } from "react-icons/bs"
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name="Home" className="h-screen w-full bg-gradient-to-b from-FrostOne to-FrostTwo text-white">
        <div className='max-w-sceen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row'>
            <div  className='flex flex-col justify-center h-full'>
                <img src={ProfilePic} alt=" myself with the sun hitting my skin" className= "  h-auto w-96 mx-auto pr-4 pt-4 rounded-3xl md:min-h"/>
            </div>
            <div> 
                <h2 className='text-4xl sm:text-7xl font-bold'>Software Engineer </h2>
                <p className= " text-white-500  py-6 max-w-md">Front-end & Back-end web developer leveraging an artistic and performance background, looking to collaborat and build an engaging abd inclusive experiences on the web. Thank you and Welcome to my Portfolio!
                </p>

                <div>
                    <Link to="Projects" smooth duration={400} className="group cursor-pointer text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-DeepOne to-DeepTwo  hover:from-OrangeOne hover:to-OrangeTwo">
                        Projects  
                        <span className=' cursor-pointer group-hover:rotate-90 duration-300'>
                            <BsForwardFill  size={20} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Home