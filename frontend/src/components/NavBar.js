import React, { useEffect, useState } from 'react'

const NavBar = ({credit}) => {
  const [user,setUser] = useState(localStorage.getItem('User'));
  const logout = () =>{
    localStorage.removeItem('User');
    setUser(null);
    localStorage.setItem('saving',0);
    localStorage.setItem('Credit', 0);
  }
  useEffect(()=>{
    setUser(localStorage.getItem('User'));
    // localStorage.setItem('credit', 0);
    },[])
  
  return (
    // <header class="flex bg-slate-300 flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-4">
    <nav
      class="bg-gray-300 sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-black bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div class="flex items-center justify-between text-blue-gray-900">
        <a href="/"
          class="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
         <div className='left text-red-500 font-bold font-Handjet tracking-wider text-3xl  left-10 relative '>
             <p className='text-black'><span className='text-yellow-500' >EDU</span> Finance</p>  
           </div>
        </a>
        <div className='   text-xl text-blackS font-bold'>
          Credits : {credit}
        </div>
        <div class="flex items-center gap-4">
          <div class="hidden mr-4 lg:block">
            <ul class="flex flex-col gap-2 mt-2  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li class="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <a href="/scholorship" class="flex items-center">
                  Scholorship
                </a>
              </li>
              <li class="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <a href="/" class="flex items-center">
                  Personal Expenditure
                </a>
              </li>
              <li class="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <a href="/courses" class="flex items-center">
                  Courses
                </a>
              </li>
              {/* <li class="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <a href="#" class="flex items-center">
                  Docs
                </a>
              </li> */}
            </ul>
          </div>
        {!user && <div class="flex items-center gap-x-1">
        <a href='/login'>
          <button
            class="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="button">
            <span>Log In</span>
          </button>
              </a>
              <a href="/signup">
          <button
            class="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="button">
            <span>Sign in</span>
          </button>
              </a>
        </div>}
        {user && <a href="login"> <button onClick={logout}
            class="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="button">
            <span>Log out</span>
          </button>
        </a>

        }

          <button
            class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            type="button">
            <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor"
                stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </nav>
  // </header>
  )
}

export default NavBar


// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import {BsSendFill} from 'react-icons/bs'
// import { sendEmail } from '../utils/renders';
// import LoadingBar from 'react-top-loading-bar';
// import { useRef } from 'react';

// function NavBar(props) {

//   const [isPressed,setIsPressed] = useState(false);
//   // eslint-disable-next-line
//   const [userEmail , setUserEmail] = useState('');
//   const ref = useRef(null);

//   // eslint-disable-next-line
//   const userData = props.data;


//   const navigate = useNavigate();
//   const logoutHandle = async ()=>{
//     try {
//       ref.current.staticStart();

//       localStorage.removeItem('User');
//       toast.success("Logout Successfully!!")
//       ref.current.complete();

//       navigate('/login');
//     } catch (error) {
//       console.log(error.message)
//     }
//   }


//   return (
//     <div>
//             <LoadingBar color='orange' ref={ref}  ></LoadingBar>

//          <div className=' flex flex-row  justify-between w-screen h-24 bg-neutral-950' >
//           <div className='left text-red-500 font-bold font-Handjet tracking-wider text-6xl top-5 left-10 relative '>
//             <p className='text-black'><span className='text-yellow-500' >Expense</span> Tracker</p>  
//           </div>
        
//         <div>

//         </div>
//         <div className='flex flex-row justify-end w-1/3'>
            
//         <div className='pl-4 mr-16 pr-4 w-auto  rounded-xl mt-6 mb-6 '>

//               <div className="relative z-50 inline-flex  group" onClick={()=>setIsPressed(!isPressed)} >
//               <div
//                   className="absolute transitiona-all duration-700 opacity-70 inset-16 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:inset-1 group-hover:duration-200 animate-tilt">
//               </div>
//               <div  title=""
//                   className="relative inline-flex items-center justify-center px-8 py-4 text-sm tracking-wider font-bold text-black transition-all duration-200 bg-neutral-950 font-pj rounded-xl focus:outline-none focus:ring-1  focus:ring-offset-1 focus:ring-gray-900"
//                   role="button">Send Email
//               </div>
//             </div>
//             {
//               <>
//               <div className={`flex flex-col  overflow-hidden ${isPressed ? 'opacity-100 mt-8 w-1/4' : 'opacity-0 ml-20 w-0 -mt-10'} justify-between transition-all duration-500  h-50 bg-blue-500  gap-3 absolute  p-3 z-40 -ml-48 rounded-xl`}  >
//               <div className=' text-black absolute -inset-x-2 -inset-y-2 bg-black font-bold rounded-full w-6 pt-0.5 text-center left-0.5 top-1 cursor-pointer h-fit border-2' onClick={()=>setIsPressed(!isPressed)} ><p className='-mt-1' >x</p></div>
//                   <div className='flex flex-row gap-3 justify-between ' >
//                   <input placeholder='Your Email' onChange={(e)=>{
//                     setUserEmail(e.target.value);
//                   }} type='email' className=' outline-none p-2 pl-4 w-full rounded-2xl'></input>
//                   <button onClick={()=>{
//                       sendEmail(userEmail , userData)
//                   }}  className=' rounded-xl w-fit  bg-neutral-800 p-3 text-2xl text-black'  ><BsSendFill></BsSendFill></button>
//               </div>
//                   <p className='text-xs text-center text-black whitespace-nowrap '>**Get your expenses in <b>one month</b>, On Your Email</p>
//               </div>
//               </>
//             }
//         </div>

//             <div>
//                   <a onClick={logoutHandle} href="#_" className=" text-xl mt-5 mb-5 right-10 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
//                   <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
//                   </span>
//                   <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">LogOut</span>
//                   <span className="relative invisible">LogOut</span>
//                   </a>
//             </div>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default NavBar

