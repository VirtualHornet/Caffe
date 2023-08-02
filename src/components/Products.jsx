import { styled } from "styled-components";
import { AnimatePresence, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {AiOutlineShoppingCart, AiFillHeart, AiFillStar} from 'react-icons/ai';
import {GiCursedStar} from 'react-icons/gi';
import img1 from '../img/cof1.jpg';
import img2 from '../img/cof5.jpg';
import img3 from '../img/cof3.jpg';

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

function Products (){

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
        }
    },[isInView])

    return(
        <PorductContainer id="product">
             <Title>
             <motion.span
                variants={right}
                ref={ref}
                initial="hidden"
                animate={mainControls}
            >LASTED </motion.span>
            <motion.h2
                variants={left}
                ref={ref}
                initial="hidden"
                animate={mainControls}
            > PRODUCTS</motion.h2>
            </Title>
            <CardContainer>
                <Card
                    variants={boxAnimation}
                    ref={ref}
                    initial="hidden"
                    animate={mainControls}
                    transition={{duration: 0.5, delay: 0.3}}
                    whileHover="shadow"
                >
                    <div><i><AiOutlineShoppingCart/></i><i><AiFillHeart/></i></div>
                    <img src={img2} alt ="img2"/>
                    <h4>Fresh Coffee</h4>
                    <Stars>
                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><GiCursedStar/>                    
                    </Stars>
                    <div>
                        $15.99
                    </div>
                </Card>
                <Card
                    variants={boxAnimation}
                    ref={ref}
                    initial="hidden"
                    animate={mainControls}
                    transition={{duration: 0.5, delay: 0.6}}
                    whileHover="shadow"
                    style={{background:"#fff", color: "#000"}}
                >
                    <div><i><AiOutlineShoppingCart/></i><i><AiFillHeart/></i></div>
                    <img src={img2} alt ="img2"/>
                    <h4>Fresh Coffee</h4>
                    <Stars>
                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><GiCursedStar/>                    
                    </Stars>
                    <div>
                        $15.99
                    </div>
                </Card>
                <Card
                     variants={boxAnimation}
                     ref={ref}
                     initial="hidden"
                     animate={mainControls}
                     transition={{duration: 0.5, delay: 0.9}}
                     whileHover="shadow"
                >
                    <div><i><AiOutlineShoppingCart/></i><i><AiFillHeart/></i></div>
                    <img src={img2} alt ="img2"/>
                    <h4>Fresh Coffee</h4>
                    <Stars>
                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><GiCursedStar/>                    
                    </Stars>
                    <div>
                        $15.99
                    </div>
                </Card>
            </CardContainer>
        </PorductContainer>
    )
}

export default Products;

const PorductContainer = styled.section`
    font-size: 18px;
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

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Card = styled(motion.div)`
    display: flex;
    flex-direction: column;
    background: #0f0f0f;
    color: #fff;
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    h4{
        font-size: 25px;
    }
    img{
        width:300px ;
        margin:0 5px;
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0 10px 0;
    }
    i{
        padding: 15px;
        margin:0;
    }
    @media only screen and (max-width: 1000px) {
        flex: 50%;
    }
    @media only screen and (max-width: 800px) {
        flex: 60%;
    }
`
const Stars = styled.div`
    color: #FF6E01;
`