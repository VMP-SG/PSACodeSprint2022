import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'

import Logo from "../../assets/logo.png";
import LoginIcon from "../../assets/loginIcon.png"



const MainHeader = () => {
    const router = useRouter();
    const currentRoute = router.pathname;
    console.log(currentRoute);

    return (
        <nav className="flex justify-center items-center pr-40 pl-40 bg-dark-blue-main">
            <div className ="flex container max-w-7xl justify-between items-center ">

                <div className="nav-img flex-start">
                    <Link href='/'><Image src={Logo}/></Link>
                </div>
                <ul className="nav-list flex ">
                    <Link href="/"><li className={"nav-items mx-5 hover:border-b-2 hover:border-grey-main" + (currentRoute == "/" ? " border-b-2 border-white" : "")}>Home</li></Link>
                    <Link href="/tasks"><li className={"nav-items mx-5 hover:border-b-2 hover:border-grey-main" + (currentRoute == "/tasks" ? " border-b-2 border-white" : "")}>Tasks</li></Link>
                    <Link href="/createRequest"><li className={"nav-items mx-5 hover:border-b-2 hover:border-grey-main" + (currentRoute == "/createRequest" ? " border-b-2 border-white" : "")}>Create</li></Link>
                    <Link href="/myRequests"><li className={"nav-items mx-5 hover:border-b-2 hover:border-grey-main" + (currentRoute == "/myRequests" ? " border-b-2 border-white" : "")}>My Requests</li></Link>
                    <Link href="/pageGuide"><li className={"nav-items mx-5 hover:border-b-2 hover:border-grey-main" + (currentRoute == "/pageGuide" ? " border-b-2 border-white" : "")}>How It Works</li></Link>
                </ul> 
                
                <Link href="/login">
                    <div className='nav-button flex justify-center items-center px-6 py-3  rounded bg-white text text-black'>
                        <Image src={LoginIcon}/>
                        <span className='ml-3' >Login</span>
                    </div>
                </Link>
            </div>
            
        </nav>
    )
}

export default MainHeader
