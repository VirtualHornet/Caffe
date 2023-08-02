import {BsFacebook}from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';
import {BiLogoInstagramAlt} from 'react-icons/bi';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';




function Footer (){
    return(
        <FooterContainer>
            <div>
                <i><BsFacebook /></i>
                <i><BiLogoInstagramAlt /></i>
                <i><AiFillLinkedin /></i>
            </div>
            <Foo>©2023 Created by <Link to="https://github.com/VirtualHornet?tab=repositories">Attila Celluska </Link> </Foo>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    div{
        font-size: 20px;
        color: #fff;
       
    }
    div i{
         margin: 30px;
         font-size: 30px;
         cursor: pointer;
    }
`

const Foo = styled.div`
    display: flex;
    bottom: 5px;
    color: #fff;
    margin-top: 10px;
    a{
        text-decoration: none;
        color: #fff;
        padding-left: 5px;
    }
    @media only screen and (max-width: 912px) {
        font-size: 11px;
    }

`