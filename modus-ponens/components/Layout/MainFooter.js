import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.png";

import githubLogo from "../../assets/githubLogo.png";
import { logout } from "../../api/auth";
import { useRouter } from "next/router";
import React, {useEffect, useState} from "react";
import LogoutModal from "../Account/LogoutModal";
// import { getUserData } from "../../api/auth";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const MainFooter = () => {

  const router = useRouter();
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const currentRoute = router.pathname;
  console.log(currentRoute);

  const [user, setUser] = useState("")
  const [displayName, setDisplayName] = useState("");

  const auth = getAuth();

  useEffect( () => {
    onAuthStateChanged(auth, user => {
      setUser(user);
      if(user == null) {
        setDisplayName("Login");
      }
      else {
        console.log("email: "+ user['email'])
        console.log("username: "+ user['displayName'])};
    });
  })

  return (
    <div className="bg-dark-blue-main margin w-full pr-40 pl-40">
      <div className="flex flex-col max-w-7xl w-full m-auto px-[85px]">
        <div className="flex pt-14 pb-32 items-start">
          <div className="appDescript w-[290px]">
            <div className="w-[190px]">
              <Image src={Logo} />
            </div>
            <div className="sm:max-w-xs text-xs text-grey-main">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a{" "}
            </div>
          </div>

          <div className="links flex ml-40 pt-12">
            <div className="mx-5">
              <span className="text-primary text-white m-5">Browse</span>
              <ul className="nav-list text-grey-main">
                <Link href="/">
                  <li className="nav-items text-xs m-5 cursor-pointer hover:underline">
                    Home
                  </li>
                </Link>

                {user != null && <div>
                  <Link href="/tasks">
                    <li className="nav-items text-xs m-5 cursor-pointer hover:underline">
                      Tasks
                    </li>
                  </Link>
                  <Link href="/createRequest">
                    <li className="nav-items text-xs m-5 cursor-pointer hover:underline">
                      Create
                    </li>
                  </Link>
                  <Link href="/myRequests">
                    <li className="nav-items text-xs m-5 cursor-pointer hover:underline">
                      My Requests
                    </li>
                  </Link>
                </div>}
                
                <a href="https://github.com/ReallyEnthusiasticProgrammersDLW2022/Backend" target="_blank" rel="noreferrer noopener">
                  <li className="nav-items text-xs m-5 cursor-pointer hover:underline">
                    How It Works
                  </li>
                </a>
              </ul>
            </div>

            <div className="mx-5">
              <span className="text-primary m-5 text-white">My Account</span>
              <ul className="nav-list text-grey-main">
                { user ?
                  <li onClick={() => setOpenLogoutModal(true)} className="nav-items text-xs m-5 cursor-pointer hover:underline">
                    Logout
                  </li>
                  : <Link href="/account/login">
                  <li className="nav-items text-xs m-5 cursor-pointer hover:underline">
                    Login
                  </li>
                </Link>}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-grey flex justify-center p-7">
          <div className="justify-center  text-grey-main">
            VMP-SG © 2022 All Rights Reserved
          </div>
          <div className="socials mx-5 cursor-pointer">
            <Link href="https://github.com/VMP-SG/PSACodeSprint2022">
              <Image src={githubLogo} />
            </Link>
          </div>
        </div>
      </div>
      <LogoutModal
        open={openLogoutModal}
        onClose={() => setOpenLogoutModal(false)}
        headingText="Logout"
        bodyText="Are you sure that you want to logout?"
        onClickButton={logout}
        blueButtonText="Logout"
        borderButtonText="Cancel"
      />
    </div>
  );
};

export default MainFooter;
