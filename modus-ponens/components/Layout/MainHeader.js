import React , {useState, useEffect} from 'react';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import Logo from "../../assets/logo.png";
import LoginIcon from "../../assets/loginIcon.png";
import LogoutModal from '../Account/LogoutModal';

// import { getUserData } from "../../api/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const MainHeader = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [user, setUser] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  const auth = getAuth();
  useEffect(() => {
    // const user = getUserData();
    // if (user) {
    //   setUser(user);
    // }
    onAuthStateChanged(auth, user => {
      setUser(user);
      if (user) {
        const name = user.displayName.split("/")[1];
        setDisplayName(name.length > 7 ? `${name.substring(0,7)}...` : name);
      } else {
        setDisplayName("Login");
      }
    });
  },[]);


  return (
    <nav className="flex bg-dark-blue-main justify-center items-center w-[var(--max-screen-width)] px-40">
      
      <div className="flex container max-w-7xl justify-between items-center">
        <div className="nav-img flex-start">
          <Link href="/">
            <Image src={Logo} />
          </Link>
        </div>

        <div class="nav-items flex-grow items-start pl-24">
        <ul className="nav-list flex text-white">
          <Link href="/">
            <li
              className={
                "nav-items mx-5 border-b-2 border-b-transparent hover:border-b-2 hover:border-grey-main cursor-pointer" +
                (currentRoute == "/" ? " border-b-2 border-white" : "")
              }
            >
              Home
            </li>
          </Link>
          
          
          {user != null && <div className="flex">
          
            <Link href="/tasks">
              <li
                className={
                  "nav-items mx-5 border-b-2 border-b-transparent hover:border-b-2 hover:border-grey-main cursor-pointer" +
                  (currentRoute == "/tasks" ? " border-b-2 border-white" : "")
                }
              >
                Tasks
              </li>
            </Link>

            <Link href="/createRequest">
              <li
                className={
                  "nav-items mx-5 border-b-2 border-b-transparent hover:border-b-2 hover:border-grey-main cursor-pointer" +
                  (currentRoute == "/createRequest"
                    ? " border-b-2 border-white"
                    : "")
                }
              >
                Create
              </li>
            </Link>

            <Link href="/myRequests">
              <li
                className={
                  "nav-items mx-5 border-b-2 border-b-transparent hover:border-b-2 hover:border-grey-main cursor-pointer" +
                  (currentRoute == "/myRequests"
                    ? " border-b-2 border-white"
                    : "")
                }
              >
                My Requests
              </li>
            </Link>

          </div>}


          <Link href="/pageGuide">
            <li
              className={
                "nav-items mx-5 border-b-2 border-b-transparent hover:border-b-2 hover:border-grey-main cursor-pointer" +
                (currentRoute == "/pageGuide" ? " border-b-2 border-white" : "")
              }
            >
              How It Works
            </li>
          </Link>
        </ul>
        </div>

        <Link href="/account/login"> 
          <div className="nav-button flex justify-center items-center px-6 py-3  rounded bg-white text text-black cursor-pointer">
            <Image src={LoginIcon} />
            <span className="ml-3">{displayName}</span>
          </div>
        </Link>
      </div>
      <LogoutModal open={openLogoutModal} onClose={() => setOpenLogoutModal(false)} headingText="Logout" />
    </nav>
  );
};

export default MainHeader;
