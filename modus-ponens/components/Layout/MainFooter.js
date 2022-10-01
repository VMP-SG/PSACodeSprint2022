import Link from 'next/link'
import Image from 'next/image'
import Logo from "../../assets/logo.png";
import LoginIcon from "../../assets/loginIcon.png"
import githubLogo from "../../assets/githubLogo.png"

const MainFooter = () => {
    return (
        <div className='bg-dark-blue-main margin w-[var(--max-screen-width)] pr-40 pl-40'>

            <div className='flex  pt-14 pb-32 items-start'>

                <div className='appDescript w-[290px]'>
                    <div className='w-[190px]'>
                        <Image src={Logo}/>
                    </div>
                    <div className="sm:max-w-xs text-xs text-grey-main">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a </div>

                </div>



                <div className="links flex ml-40 pt-12">
                    <div className="mx-5">
                        <span className='text-primary m-5'>Browse</span>
                        <ul className="nav-list text-grey-main">
                            <Link href="/"><li className="nav-items text-xs m-5 hover:underline">Home</li></Link>
                            <Link href="/tasks"><li className="nav-items text-xs m-5 hover:underline">Tasks</li></Link>
                            <Link href="/createRequest"><li className="nav-items text-xs m-5 hover:underline">Create</li></Link>
                            <Link href="/myRequests"><li className="nav-items text-xs m-5 hover:underline">My Requests</li></Link>
                            <Link href="/pageGuide"><li className="nav-items text-xs m-5 hover:underline">How It Works</li></Link>
                        </ul> 
                    </div>
                    <div className="mx-5">
                        <span className='text-primary m-5'>My Account</span>
                        <ul className="nav-list text-grey-main">
                            <Link href="/Login"><li className="nav-items text-xs m-5 hover:underline">Logout</li></Link>
                        </ul> 
                    </div>
                </div>
            </div>


            <div className="border-t-2 border-grey flex justify-center p-7">
                <div className="justify-center  text-grey-main">
                    VMP-SG © 2022 All Rights Reserved
                </div>
                <div className="socials mx-5">
                    <Link href="https://github.com/VMP-SG/PSACodeSprint2022">
                        <Image src={githubLogo}/>
                    </Link>
                </div>
            </div>

            
            
        </div>
    )
}

export default MainFooter
