import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import {AiOutlineMenu} from 'react-icons/ai';
import { useState, useEffect } from "react";
//import "./Header.css";

const item = {
  exit:{
    opacity: 0,
    height:0,
    transition:{
      ease: "easeInOut",
      duration: 0.3,
      delay: .9
    }
  }
};

const Header = () => {

  const [open, setOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const currentScrollPos = window.pageYOffset;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
          setActiveMenuItem(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuItemClick = (id) => {
    setActiveMenuItem(id);
    const section = document.getElementById(id);
    const sectionTop = section.offsetTop - 20;
    window.scrollTo({ top: sectionTop, behavior: 'smooth' });
  };


  return (
     <Menu
        initial = {{y: -250}}
        animate={{ y: 0}}
        transition={{delay: 0.2,duration: 2 }}
        className='header'>
        <div className='logo'>COFFEE</div>
        <nav className='nav'>
          <li className={activeMenuItem === 'home' ? 'active' : ''} onClick={() => handleMenuItemClick('home')}>
            <a href="#home" >Home</a> 
          </li>
          <li className={activeMenuItem === 'about' ? 'active' : ''} onClick={() => handleMenuItemClick('about')}>
            <a href="#about" >About</a> 
          </li>
          <li className={activeMenuItem === 'menu' ? 'active' : ''} onClick={() => handleMenuItemClick('menu')}>
            <a href='#menu'>Menu</a>
          </li>
          <li className={activeMenuItem === 'product' ? 'active' : ''} onClick={() => handleMenuItemClick('product')}>
            <a href='#product'>Products</a>
          </li>
          <li className={activeMenuItem === 'review' ? 'active' : ''} onClick={() => handleMenuItemClick('review')}>
            <a href='#review'>Review</a>
          </li>
          <li className={activeMenuItem === 'contact' ? 'active' : ''} onClick={() => handleMenuItemClick('contact')}>
            <a href='#contact'>Contact</a>
          </li>
          <li className={activeMenuItem === 'blog' ? 'active' : ''} onClick={() => handleMenuItemClick('blog')}>
            <a href='#blog'>Blog</a>
          </li>
        </nav>
        <Hamburger className='hamburger-menu'>
          <AiOutlineMenu onClick={()=>setOpen(!open)}/>
        </Hamburger>
        <AnimatePresence>
          {open?<MenuContainer>
            <motion.div
              variants={item}
              initial={{height:0, opacity:0}}
              animate={{height:"100vh", opacity:1}}
              transition={{duration:.3}}
              exit="exit"
            >
              <div className="btn-close" onClick={()=>setOpen(!open)}>X</div>
              <motion.a 
                  initial={{y:80,opacity:0}}
                  animate={{y:0, opacity:1}}
                  transition={{delay:.8}}
                  exit={{
                   opacity:0,
                   y:90,
                     transition:{
                       ease:"easeInOut",
                       delay:1
                     }
                  }}
                href="#home" onClick={()=>setOpen(!open)}>Home</motion.a>
              <motion.a 
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.7}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.8
                    }
                 }}
                href="#about" onClick={()=>setOpen(!open)}>About</motion.a>
              <motion.a 
                initial={{y:80,opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{delay:.6}}
                exit={{
                 opacity:0,
                 y:90,
                   transition:{
                     ease:"easeInOut",
                     delay:.6
                   }
                }}
                href="#menu" onClick={()=>setOpen(!open)}>Menu</motion.a>
              <motion.a 
                initial={{y:80,opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{delay:.5}}
                exit={{
                 opacity:0,
                 y:90,
                   transition:{
                     ease:"easeInOut",
                     delay:.4
                   }
                }}
                href="#product" onClick={()=>setOpen(!open)}>Products</motion.a>
              <motion.a 
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.4}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.2
                    }
                 }}
                href="#review" onClick={()=>setOpen(!open)}>Review</motion.a>
              <motion.a 
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.3}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.1
                    }
                 }}
                href="#contact" onClick={()=>setOpen(!open)}>Contact</motion.a>
              <motion.a 
                initial={{y:80,opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{delay:.2}}
                exit={{
                 opacity:0,
                 y:90,
                   transition:{
                     ease:"easeInOut",
                     delay:0
                   }
                }}
                href="#blog" onClick={()=>setOpen(!open)}>Blog</motion.a>
            </motion.div>
          </MenuContainer>:""}
        </AnimatePresence>
      </Menu>
  );
};

export default Header;


const Menu = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 80%;
  margin: 0 auto;
  background: #1a1a1a;
  color: #fff;
  z-index: 100;
  .logo{
    //padding: 25px;
    font-size: 25px;
    font-style: italic;
  }
  .hamburger-menu{
    padding: 25px;
    font-size: 25px;
    cursor: pointer;
  }
  nav{
    display: flex;
    li{
      display: flex;
      list-style: none;
      justify-content: center;
      align-items: center;
    }
    li a{
      text-decoration: none;
      color: #fff;
      cursor: pointer;
      padding: 25px;
    }
    li a:hover{
      transition: all 0.3s ease-in-out;
      font-size: 18px;
    }
    li a:active{
      font-size: 23px;
    }
    .active a, .active a:active{
      background: #FF6E01;
      color: #fff;
    }
    @media only screen and (max-width: 1000px) {
    display: none;
    }
  }
  @media only screen and (max-width: 1000px) {
    width: 90%;
    justify-content: space-between;

  }
`
const Hamburger = styled.div`
  display: none;
  @media only screen and (max-width: 1000px) {
    display: block;
    cursor: pointer;
    
  
}
`
const MenuContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 200vh;
  background: #1a1a1a;
  color: #fff;
  div{
    display: flex;
    position: absolute;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
  div a{
    color: #fff;
    display: inline-flex;
    text-decoration: none;
    height: 50px;
    overflow: hidden;
    font-size: 18px;
    text-transform: uppercase;
    margin-top: 2vw;
  }
  .btn-close{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 58px;
    height: 58px;
    border: solid 1px #bdbdbd;
    color: #000;
    background: #fff;
    border-radius: 58px;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2;
    cursor: pointer;
    font-size: 18px;
  }
`