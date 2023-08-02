import { styled } from "styled-components";
import img from "../img/peakpx.jpg";
import { easeInOut, motion } from "framer-motion";
import AnimatedWord from "./AnimatedWord";

const container = {
    hidden: { opacity: 0 },
    visible: {    
        opacity: 1,
        transition: { duration:0.2 },
    }
  };

const mositonp= {
    hidden:{
        opacity: 0,
        transition: {
            duration: 1, 
            delay: 1
        }
    },
    visible:{
        opacity:1,
        transition: {
            duration: 1, 
            delay: 1
        }
    }
}

function Home (){
    return(
        <HomeContainer id="home"
            variants={container}
            initial="hidden"
            animate="visible"
        >
        <Content >
            <h1><AnimatedWord text="FRESH COFFEE IN" /></h1>
            <h2><AnimatedWord text="THE MORNING" /></h2>
            <motion.p
                variants={mositonp}
                initial="hidden"
                animate="visible"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus porro voluptatum fugit molestias corporis iure assumenda, magnam enim, dolore expedita consectetur !"</motion.p>
            <Buttons
             variants={mositonp}
             initial="hidden"
             animate="visible"
             whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: '0px 0px 8px rgb(255,255,255)',
                transition: {
                    type:"spring",
                    striffness: 200}
             }}
            >Get your coffee</Buttons>
         </ Content>
        </HomeContainer>
    )
}
export default Home;

const HomeContainer = styled(motion.section)`
    //position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${img});
    background-repeat: 'no-repeat';
    background-size: 'cover';
    background-position: 'center';
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    width: 100%;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    color: #fff;
    margin-top: 80px;
    #mainImg{
        width: 100%;
        margin-top: 80px;
        margin-bottom: 15px;
    }
    h1{
        position: absolute;
        top: 270px;
        left: 15%;
        font-size: 70px;
        background: rgba(3, 3, 3, 0.7);
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
       
    }
    h2{
        position: absolute;
        top: 344px;
        left: 15%;
        font-size: 70px;
        background: rgba(3, 3, 3, 0.7);
        border-bottom-left-radius: 10px;
       
    }
    p{
        position: absolute;
        top: 480px;
        left: 15%;
        margin-right: 400px;
        line-height: 1.8;
       
    }
   @media only screen and (max-width: 1000px) {
        h1{
            left: 10%;
            font-size: 60px;
        }
        h2{
            left: 10%;
            font-size: 60px;
        }
        p{
            left: 10%;
            margin-right: 200px;
        }    
    }
    @media only screen and (max-width: 600px) {
        h1{
            font-size: 50px;
        }
        h2{
            font-size: 50px;
        }
        p{
            line-height: 1.2;
            margin-right: 10%;
        }
    }
    @media only screen and (max-width: 500px) {
        h1{
            font-size: 40px;
        }
        h2{
            font-size: 40px;
        }
    }
    @media only screen and (max-width: 400px) {
        h1{
            font-size: 30px;
        }
        h2{
            font-size: 30px;
        }
    }
    @media only screen and (max-width: 290px) {
        h1{
            font-size: 25px;
        }
        h2{
            top:300px;
            font-size: 25px;
        }
        p{
            font-size: 10px;
        }
    }
`
const Content = styled(motion.div)`
    display: flex;
    flex-direction: column;
`
const Buttons = styled(motion.button)`
    position: absolute;
    top: 570px;
    left: 15%;
    background: #FF6E01;
    color: #fff;
    border: none;
    padding: 15px;
    cursor: pointer;
    font-weight: 700;
    @media only screen and (max-width: 1200px) {
        top: 670px;
    }
    @media only screen and (max-width: 800px) {
        left: 10%;
    }
`