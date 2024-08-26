import {useEffect, useRef, useContext} from 'react';
import logo from '../../assets/images/logo.png';
import {NavLink, Link} from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'
import { AuthContext } from '../../context/AuthContext.jsx'
import chatbotIcon from '../../assets/images/chatbot.png'


const navLinks = [
{
  path : '/home',
  display :'Home'
},
{
  path : '/doctors',
  display :'Find a Doctor'
},  
{
  path : '/services',
  display :'Services'
},
{
  path : '/contact',
  display :'Contact'
},

]





const Header = () => {

  const headerRef = useRef (null)
  const menuRef = useRef (null)
  const {user, role, token} = useContext(AuthContext)

  const handleStickyHeader = () => {
    window.addEventListener('scroll', ()=> {
      if(document.body.scrollTop > 80 || document.body.scrollTop > 80){
        headerRef.current.classList.add ('sticky_header')
      }else{
        headerRef.current.classList.add ('sticky_header')
      }
    })
  }

  useEffect (()=> {
    handleStickyHeader()
    return ()=> window.removeEventListener('scroll',handleStickyHeader)
  });

    const toggleMenu =() => menuRef.current.classList.toggle('show_menu')

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* LOGO */}

          <div>
            <img src={logo} alt="Logo" />
          </div>


          {/* MENU */}

        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <ul className="menu flex items-center gap-[2.7rem]">
            {
              navLinks.map((Link,index)=> (
                <li key={index}>
                  <NavLink to={Link.path}
                  className={navClass => 
                  navClass.isActive
                  ? "text-primaryColor text-[16px] leading-7 font[600]"
                  : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"

                  }>
                    {Link.display}
                  </NavLink>
                </li>
              ))
            }
            </ul> 
        </div>
           
           {/* NAV RIGHT */}
<div className="flex items-center gap-4">
  <div><Link to='/chatbot'>
    <button> <figure className='w-[90px] h-[90px] pt-9 mt-2.5 rounded-full cursor-pointer'>
      <img src= {chatbotIcon} className='w-full rounded-full' alt="" />
    </figure></button>
    </Link>
    </div>

  {token && user ?  <div>
    <Link to={`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}`} >
    <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
      <img src= {user?.photo} className='w-full rounded-full' alt="" />
    </figure>
    <h2 className='hidden'>{user?.name} </h2>
    </Link>
  </div> : <Link to='/login'>
            <button className='bg-primaryColor py-2 text-white font-[600] h-[44px] w-[70px] flex items-center justify-center rounded-[25px]'>Login</button>
            
            </Link>
  }
           

           

            

            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer' />
            </span>



</div>







        </div>
      </div>
    </header>
  );
}

export default Header;
