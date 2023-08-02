import { styled } from "styled-components";
import img from '../img/cof1.jpg';
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedWord from "./AnimatedWord";


function AboutUs(){
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();

    const container = {
        hidden: { opacity: 0 },
        visible: {    
            opacity: 1,
            transition: { duration:1, delay: 1 },
        }
      };
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
        <AboutContainer id="about"
            variants={container}
            initial="hidden"
            animate='visible'
        ><Title>
             <motion.span
                variants={right}
                ref={ref}
                initial="hidden"
                animate={mainControls}
            >About </motion.span>
            <motion.h2
                variants={left}
                ref={ref}
                initial="hidden"
                animate={mainControls}
            > Us</motion.h2>
        </Title>
           
            <AboutFlex>
                <motion.div
                    variants={{
                        hidden:{opacity:0, x:-100, y:0},
                        visible: {opacity:1, x:0, y:0}
                    }}
                    ref={ref}
                    initial="hidden"
                    animate={mainControls}
                    transition={{duration: 1.5, delay: 0.25}}
                >
                    <img src={img} alt='img' />
                </motion.div>
                <Text
                    variants={{
                        hidden:{opacity:0},
                        visible: {opacity:1}
                    }}
                    ref={ref}
                    initial="hidden"
                    animate={mainControls}
                    transition={{duration: 1.5, delay: 0.5}}
                >
                    <h3>What Makes Our Coffee Specials</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facilis obcaecati omnis quam quis ducimus nostrum, expedita atque culpa, eius autem soluta cupiditate nihil eaque rem dignissimos iste molestias. Repudiandae?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam sequi ratione magnam voluptates consequatur ut voluptatibus a facilis, earum officia tempora ullam repudiandae pariatur quas veniam obcaecati voluptas iste eveniet.</p>
                    <Buttons
                     whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: '0px 0px 8px rgb(255,255,255)',
                        transition: {
                            type:"spring",
                            striffness: 200}
                     }}
                    >Learn more...</Buttons>
                </Text>
            </AboutFlex>

        </AboutContainer>
    )
}

export default AboutUs;

const AboutContainer = styled(motion.section)`
    width: 100%;
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
    @media only screen and (max-width: 700px) {
        img{
            display: none;
        }
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

const AboutFlex = styled.div`
    display: flex;
    flex: 1 1 ;
    div{
        background: #494949;
        align-items: center;
        justify-content: center;
    }
    div img{
        width: 30vw;
        height: 35vh;
        margin: 10px;
    }
`
const Text = styled(motion.div)`
    background: #494949;
    color: #fff;
    min-height: 35vh;
    h3{
        font-size: 25px;
        margin-left: 2%;
    }
    p{
        margin-left: 2%;
        margin-right: 3%;
    }
`
const Buttons = styled(motion.button)`
    margin-top: 2%;
    margin-left: 15px;
    margin-bottom: 1%;
    background: #FF6E01;
    color: #fff;
    border: none;
    padding: 15px;
    cursor: pointer;
    font-weight: 700;
`