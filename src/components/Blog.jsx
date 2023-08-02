import { styled } from "styled-components";
import img from '../img/cof3.jpg';
import AnimatedWord from "./AnimatedWord";
import { AnimatePresence, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

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

function Blog(){

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
        }
    },[isInView])

    return(
        <BlogContainer id="blog">
            <Title>
                <motion.h2
                    variants={right}
                    ref={ref}
                    initial="hidden"
                    animate={mainControls}
                >our</motion.h2>
                <motion.span
                    variants={left}
                    ref={ref}
                    initial="hidden"
                    animate={mainControls}
                > blog</motion.span>
            </Title>
            <Contant>
                <Card
                     variants={boxAnimation}
                     ref={ref}
                     initial="hidden"
                     animate={mainControls}
                     transition={{duration: 0.5, delay: 0.3}}
                     whileHover="shadow"
                >
                    <img src={img} alt="img"/>
                    <h2>Delicious And Refreshing Coffee </h2>
                    <h3>By Admin 12-06-2023 </h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    <Buttons
                         whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: '0px 0px 8px rgb(255,255,255)',
                            transition: {
                                type:"spring",
                                striffness: 200}
                         }}
                    >Read More</Buttons> 
                </Card>
                <Card
                     variants={boxAnimation}
                     ref={ref}
                     initial="hidden"
                     animate={mainControls}
                     transition={{duration: 0.5, delay: 0.6}}
                     whileHover="shadow"
                >
                    <img src={img} alt="img"/>
                    <h2>Delicious And Refreshing Coffee </h2>
                    <h3>By Admin 12-06-2023 </h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    <Buttons
                         whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: '0px 0px 8px rgb(255,255,255)',
                            transition: {
                                type:"spring",
                                striffness: 200}
                         }}
                    >Read More</Buttons> 
                </Card>
                <Card
                     variants={boxAnimation}
                     ref={ref}
                     initial="hidden"
                     animate={mainControls}
                     transition={{duration: 0.5, delay: 0.9}}
                     whileHover="shadow"
                >
                    <img src={img} alt="img"/>
                    <h2>Delicious And Refreshing Coffee </h2>
                    <h3>By Admin 12-06-2023 </h3> 
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    <Buttons
                         whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: '0px 0px 8px rgb(255,255,255)',
                            transition: {
                                type:"spring",
                                striffness: 200}
                         }}
                    >Read More</Buttons>    
                </Card>
            </Contant>
        </BlogContainer>
    )
}
export default Blog;

const BlogContainer= styled.section`
    font-size: 20px;
    color: #fff;
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
const Contant = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1000px) {
        flex-direction: column;
    }
`
const Card = styled(motion.div)`    
    background:#0f0f0f ;
    margin: 10px;
    border-radius: 10px;
    text-align: center;
    h2{
        margin: 0 10px;
    }
    h3{
        color: #FF6E01;
    }
    img{
        width: 80%;
        padding: 30px;
    }
    p{
        line-height: 30px;
    }
`
const Buttons = styled(motion.button)`
    margin-top: 1%;
    margin-left: 0;
    margin-bottom: 5%;
    background: #FF6E01;
    color: #fff;
    border: none;
    padding: 15px;
    cursor: pointer;
    font-weight: 700;
`