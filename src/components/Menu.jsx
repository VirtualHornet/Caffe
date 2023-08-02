import { styled } from "styled-components";
import { AnimatePresence, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Img1 from "../img/cof1.jpg";
import Img2 from "../img/cof2.jpg";
import Img3 from "../img/cof3.jpg";
import Img4 from "../img/peakpx.jpg";
import Img5 from "../img/cof5.jpg";
import Img6 from "../img/cof6.jpg";
import { useMediaQuery } from 'react-responsive';




function Menu(){

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();
    const matches = useMediaQuery({minWidth: 1000})


    const container = {
        hidden: { opacity: 0 },
        visible: {    
            opacity: 1,
            transition: { duration:1, delay: 1 },
        }
    };

    const boxAnimation={
        hidden:{opacity:0, y:100 },
        visible: {opacity:1, y:0},
        transition:{duration: 0.5, delay: 0.6}, 
        shadow:{
            boxShadow: '0px 0px 8px rgb(255,255,255)',
            transition: {
                type:"spring",
                striffness: 200
            }}
    }
    
    const left = {
        hidden: { opacity: 0, x:-300 },
        visible: {    
            opacity: 1,
            x:0,
            transition: { duration:1, delay:0 },
        }
    };
    const right = {
        hidden: { opacity: 0, x:300 },
        visible: {    
            opacity: 1,
            x:0,
            transition: { duration:1, delay:0 },
        }
    };

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
        }
    },[isInView])

    return(
        <AnimatePresence wait>
        <MenuContainer id="menu"
            variants={container}
            initial="hidden"
            animate='visible'
        >
            <Title>
             <motion.span
                variants={right}
                ref={ref}
                initial="hidden"
                animate={mainControls}
            >Our </motion.span>
            <motion.h2
                variants={left}
                ref={ref}
                initial="hidden"
                animate={mainControls}
            > Menu</motion.h2>
            </Title>
            <MenuFlex>
                <Card
                    variants={boxAnimation}
                    ref={ref}
                    initial="hidden"
                    animate={mainControls}
                    whileHover="shadow"
                    transition={{duration: 0.5, delay: 0}}
                >
                    <img src={Img1} alt="img1"/>
                    <h3>Tasty and Healthy</h3>
                    <Buttons
                         whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: '0px 0px 8px rgb(255,255,255)',
                            transition: {
                                type:"spring",
                                striffness: 200}
                         }}
                    >$15.3</Buttons>
                </Card>
                {matches ? <Card
                       variants={boxAnimation}
                       ref={ref}
                       initial="hidden"
                       animate={mainControls}
                       whileHover="shadow"
                       transition={{duration: 0.5, delay: matches?0.8:0.2}}
                >
                    <img src={Img2} alt="img2"/>
                    <h3>Tasty and Healthy</h3>
                    <Buttons
                         whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: '0px 0px 8px rgb(255,255,255)',
                            transition: {
                                type:"spring",
                                striffness: 200}
                         }}
                    >$15.3</Buttons>
                </Card> : 
                <Card
                       variants={boxAnimation}
                       ref={ref}
                       initial="hidden"
                       animate={mainControls}
                       whileHover="shadow"
                       transition={{duration: 0.5, delay: matches?0.8:0.4}}
                >
                    <img src={Img2} alt="img2"/>
                    <h3>Tasty and Healthy</h3>
                    <Buttons
                         whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: '0px 0px 8px rgb(255,255,255)',
                            transition: {
                                type:"spring",
                                striffness: 200}
                         }}
                    >$15.3</Buttons>
                </Card>}
                <Card
                       variants={boxAnimation}
                       ref={ref}
                       initial="hidden"
                       animate={mainControls}
                       whileHover="shadow"
                       transition={{duration: 0.5, delay: matches?0.4:0.6}}
                >
                    <img src={Img3} alt="img3"/>
                    <h3>Tasty and Healthy</h3>
                    <Buttons
                         whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: '0px 0px 8px rgb(255,255,255)',
                            transition: {
                                type:"spring",
                                striffness: 200}
                         }}
                    >$15.3</Buttons>
                </Card>
         
                <Card
                        variants={boxAnimation}
                        ref={ref}
                        initial="hidden"
                        animate={mainControls}
                        whileHover="shadow"
                        transition={{duration: 0.5, delay:matches?0.6:0.8}}
                >
                    <img src={Img4} alt="img4"/>
                    <h3>Tasty and Healthy</h3>
                    <Buttons
                         whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: '0px 0px 8px rgb(255,255,255)',
                            transition: {
                                type:"spring",
                                striffness: 200}
                         }}
                    >$15.3</Buttons>
                </Card>
                <Card style={{background:"#fff", color: "#000"}}
                        variants={boxAnimation}
                        ref={ref}
                        initial="hidden"
                        animate={mainControls}
                        whileHover="shadow"
                        transition={{duration: 0.5, delay:matches?0.2:1.2}}
                >
                    <img src={Img5} alt="img5"/>
                    <h3>Tasty and Healthy</h3>
                    <Buttons
                         whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: '0px 0px 8px rgb(255,255,255)',
                            transition: {
                                type:"spring",
                                striffness: 200}
                         }}
                    >$15.3</Buttons>
                </Card>
                <Card
                        variants={boxAnimation}
                        ref={ref}
                        initial="hidden"
                        animate={mainControls}
                        whileHover="shadow"
                        transition={{duration: 0.5, delay:matches?1:1.2}}
                >
                    <img src={Img6} alt="img6"/>
                    <h3>Tasty and Healthy</h3>
                    <Buttons
                         whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: '0px 0px 8px rgb(255,255,255)',
                            transition: {
                                type:"spring",
                                striffness: 200}
                         }}
                    >$15.3</Buttons>
                </Card>
            </MenuFlex>
        </MenuContainer>
        </AnimatePresence>
    )
}
export default Menu;

const MenuContainer= styled(motion.section)`
    h2{
        text-align: center;
        text-transform: uppercase;
        font-size: 30px;
        color: #fff;
    }
    span{
        color: #FF6E01;
        font-size: 30px;
        margin: 10px;
        text-transform: uppercase;
    } 
`
const Title = styled.div`
    margin-top: 85px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: center;
`
const MenuFlex = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    div{
        display: flex;
        flex-direction: column;
        width: 18vw;
        background: #0f0f0f;
        color: #fff;
        margin-bottom: 30px;
        margin-right: 10px;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }
   
    img{
        margin-top: 2%;
        width: 95%;
        height: 200px;
    } 
    @media only screen and (max-width: 1000px) {
        div{
            margin-right: 1px;
            margin-left: 1px;
        }   
    }
`

const Buttons = styled(motion.button)`
    margin-top: 2%;
    margin-left: 15px;
    margin-bottom: 5%;
    background: #FF6E01;
    color: #fff;
    border: none;
    padding: 15px;
    cursor: pointer;
    font-weight: 700;
`

const Card = styled(motion.div)`
        display: flex;
        flex-direction: column;
        width: 18vw;
        flex: 30%;
        background: #0f0f0f;
        color: #fff;
        margin-bottom: 30px;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        @media only screen and (max-width: 1000px) {
            flex: 40%;
        }
        @media only screen and (max-width: 600px) {
            flex: 50%;
        }
`