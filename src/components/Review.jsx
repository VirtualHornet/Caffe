import {BiCommentDetail} from "react-icons/bi";
import { AiFillStar} from 'react-icons/ai';
import {GiCursedStar} from 'react-icons/gi';
import { AnimatePresence, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { styled } from "styled-components";
import img from "../img/pngwing.com (10).png";

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

function Review(){

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
        }
    },[isInView])

    return(
        <AnimatePresence await>
        <ReviewContainer id="review">
            <Title>
                <motion.h2
                    variants={right}
                    ref={ref}
                    initial="hidden"
                    animate={mainControls}
                >customer's</motion.h2>
                <motion.span
                    variants={left}
                    ref={ref}
                    initial="hidden"
                    animate={mainControls}
                > review</motion.span>
            </Title>
            <CardContainer>
                <Card
                     variants={boxAnimation}
                     ref={ref}
                     initial="hidden"
                     animate={mainControls}
                     transition={{duration: 0.5, delay: 0.9}}
                     whileHover="shadow"
                >
                    <div>
                           <BiCommentDetail/>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, ű
                        adipisicing elit. Aut culpa, qui animi suscipit perferendis ratione beatae d
                        electus quidem, voluptate accusamus nihil
                         laborum deserunt possimus, voluptas expedita necessitatibus est nulla provident?
                    </p>
                    <ImgContainer>
                          <img src={img} alt="img"/>
                    </ImgContainer>
                    <Stars>
                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><GiCursedStar/>                    
                    </Stars>
                </Card>
                <Card
                     variants={boxAnimation}
                     ref={ref}
                     initial="hidden"
                     animate={mainControls}
                     transition={{duration: 0.5, delay: 0.6}}
                     whileHover="shadow"
                >
                    <div>
                           <BiCommentDetail/>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, ű
                        adipisicing elit. Aut culpa, qui animi suscipit perferendis ratione beatae d
                        electus quidem, voluptate accusamus nihil
                         laborum deserunt possimus, voluptas expedita necessitatibus est nulla provident?
                    </p>
                    <ImgContainer>
                       <img src={img} alt="img"/>
                    </ImgContainer>
                    <Stars>
                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><GiCursedStar/>                    
                    </Stars>
                </Card>
                <Card
                     variants={boxAnimation}
                     ref={ref}
                     initial="hidden"
                     animate={mainControls}
                     transition={{duration: 0.5, delay: 0.3}}
                     whileHover="shadow"
                >
                    <div>
                           <BiCommentDetail/>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, ű
                        adipisicing elit. Aut culpa, qui animi suscipit perferendis ratione beatae d
                        electus quidem, voluptate accusamus nihil
                         laborum deserunt possimus, voluptas expedita necessitatibus est nulla provident?
                    </p>
                    <ImgContainer>
                     <img src={img} alt="img"/>
                    </ImgContainer>
                    <Stars>
                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><GiCursedStar/>                    
                    </Stars>
                </Card>
            </CardContainer>
        </ReviewContainer>
        </AnimatePresence>
    )
}

export default Review;

const ReviewContainer= styled.section`
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
const ImgContainer = styled.div`
    display: flex;
    background: #fff;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex:1 1 1;
    justify-content: space-between;
    @media only screen and (max-width: 1000px) {
        flex-direction: column;
    }
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
    margin: 10px;
    img{
        width: 100px;
    }
    div{
        margin: 10px 0;
    }
    p{
        text-align: center;
        margin: 0 10px;
    }
`
const Stars = styled.div`
    color: #FF6E01;
`