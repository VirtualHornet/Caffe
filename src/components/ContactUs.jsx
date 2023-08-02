import { styled } from "styled-components";
import {AiOutlineUser,AiOutlineMail, AiOutlinePhone} from 'react-icons/ai';
import World from '../img/world.jpg';
import { AnimatePresence, animationControls, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useMediaQuery } from 'react-responsive';



function ContactUs(){

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();
    const matches = useMediaQuery({minWidth: 1000})

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
    const boxAnimation={
        hidden:{opacity:0, y:100 },
        visible: {opacity:1, y:0, x:0},
        mobVisible:{opacity:0.3},
        transition:{
            duration: 1, delay:0 
        }
    }
    const titleAnimation={
        title:{
            scale: [1, 1.5, 1.5, 1, 1],
            color: ["#fff", "#FF6E01", "#FF6E01", "#fff", "#fff"],
            transition: {repeat: Infinity, duration: 3}
        }
        
    }

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
        }
    },[isInView])

    return(
        <ContactContainer id="contact" >
             <Title>
                <motion.h2
                    variants={right}
                    ref={ref}
                    initial="hidden"
                    animate={mainControls}
                >contact</motion.h2>
                <motion.span
                    variants={left}
                    ref={ref}
                    initial="hidden"
                    animate={mainControls}
                > us</motion.span>
            </Title>

            <ContactContent
                variants={boxAnimation}
                ref={ref}
                initial={{
                    opacity:0,
                }}
                animate={mainControls}
            >
                <motion.div
                    variants={boxAnimation}
                    ref={ref}
                    initial="hidden"
                    animate={mainControls}
                    transition={{duration: 0.5, delay: 0.3}}
                >
                    <img src={World} alt="img" />
                </motion.div>
                <FormStyle
                    variants={boxAnimation}
                    ref={ref}
                    initial="hidden"
                    animate={mainControls}
                    transition={{duration: 0.5, delay: 0.3}}
                >
                    <motion.h3
                        variants={titleAnimation}
                        animate="title"
                    
                    >Get in touch
                    </motion.h3>
                    <form>
                        <div>
                            <label for="fname"><AiOutlineUser/></label>
                            <input type="text" id="fname" name="fname" placeholder="NAME"/>
                        </div>
                        <div>
                            <label for="lname"><AiOutlineMail/></label>
                            <input type="text" id="lname" name="lname" placeholder="EMAIL"/>
                        </div>
                        <div>
                            <label for="lname"><AiOutlinePhone/></label>
                            <input type="text" id="lname" name="lname" placeholder="PHONE"/>
                        </div>
                        
                    </form>
                   
                </FormStyle> 
               
            </ContactContent> 


            <Buttons
                        variants={boxAnimation}
                        ref={ref}
                        initial="hidden"
                        animate={mainControls}
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: '0px 0px 8px rgb(255,255,255)',
                            transition: {
                                type:"spring",
                                striffness: 200}
                         }}
                    >SEND
            </Buttons>


        </ContactContainer>
    )
}



const ContactContainer = styled.div`
     font-size: 20px;
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
const Buttons = styled(motion.button)`
    margin-top: 1%;
    margin-left: 5px;
    margin-bottom: 5%;
    background: #FF6E01;
    color: #fff;
    border: none;
    padding: 15px;
    cursor: pointer;
    font-weight: 700;
`
const ContactContent = styled(motion.div)`
    background: #0f0f0f;
    display: flex;
    flex-direction: row;
    flex:1 1;  
    img{
        width: 30vw;
        padding: 30px;
    }
    @media only screen and (max-width: 800px) {
        img{
            display: none;
        }
    }
`
const FormStyle = styled(motion.div)`
    color: #fff;
    width: 100%;
    margin-left: 5px;
    margin-right: 5px;
    text-align: center;
    h3{
        margin: 5% 0;
        font-size: 25px;
        text-transform: uppercase;
    }
    div{
        margin: 15px 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    label{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
       margin-right: 15px;
       font-size: 30px;
    }
    input{
        width: 80%;
        padding: 10px;
        border-radius: 10px;
        border: none;
        transition: padding 0.4s ease-in-out;
    }
    input:focus{
        border: 3px solid orange;
        outline: none;
        padding:12px;
    }
    @media only screen and (max-width: 800px) {
        margin-bottom: 30px;
    }
`


export default ContactUs;