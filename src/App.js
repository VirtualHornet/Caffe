import { AnimatePresence, easeInOut, motion, useAnimation, useCycle } from 'framer-motion';
import './App.css';
import { styled } from "styled-components";
import Pages from './components/Pages';
import Home from './components/Home';
import { useLocation } from 'react-router-dom';
import Img1 from './img/pngwing.com (8).png';
import Img2 from './img/pngwing.com (4).png';
import Img3 from './img/image-3.jpg';
import Img4 from './img/image-4.jpg';
import Img5 from './img/image-5.jpg';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Menu from './components/Menu';
import Products from './components/Products';
import Review from './components/Review';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';




const item = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
   transition: {
      duration: 1.5
    }
  }, 
  exit:{
    y: '100vw',
    transition: {
      ease: "linear",
      duration: 3,
      x: { duration: 1 }
  }
  }
}
const itemMain = {
  hidden: { opacity: 1, y: -800, with:"400px" },
  visible: {
    opacity: 1,
    y:0,
    transition: {
      duration: 1.6,
    },
  },
};

function App() {

 // const location = useLocation();
  const [animation, setAnimation] = useCycle("animationOne", "animationTwo")
  const [imgShow, setImgShow] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(() => {
      setImgShow(false);
    }, 2000);
    return () => clearTimeout(timer);
  },[imgShow])



  return (
    <div className="App">
        <AnimatePresence wait onExitComplete={()=>setImgShow(false)}>
        {imgShow && <Animation
          > <motion.img key="img2" src={Img1} alt="img2" id='img2'
              variants={item}
              initial='hidden'
              animate='visible'
              exit='exit'
            />
           {/* <motion.img key="img1" src={Img1} alt="img1" id='img1'
              variants={item}
            
            /> 
            <motion.img key="img3" src={Img3} alt="img3" id="img3"
              variants={item}
            />
            <motion.img key="img4" src={Img4} alt="img4" id="img4"
              variants={item}
            />
            <motion.img key="img5" src={Img5} alt="img5" id="img5"
              variants={item}
        />*/}
          </Animation> 
      }
        {!imgShow &&
        <Container>
          <Header />
          <Home />
          <AboutUs/>
          <Menu />
          <Products/>
          <Review />
          <ContactUs />
          <Blog />
          <Footer />
        </Container> 
        }
      </AnimatePresence>
       
    
    </div>
  );
}

export default App;

const Animation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  img{
    width: 300px;
  }
`

const Container= styled.div`
  display: block;
  overflow: hidden;
`