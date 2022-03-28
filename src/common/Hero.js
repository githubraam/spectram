import React from "react";
import { Container } from "react-bootstrap";

class Hero extends React.Component{
    render(){
        return(
            <Container fluid as="section" className="hero  bgNoRepeat bgCover d-flex flex-column justify-content-center" style={HeroDiv} >
                <Container className="container text-white text-center">
                    
                     <h1 className="text-white title">Hero</h1>

                
                </Container>
            </Container>
        )
    }
}
const HeroDiv = {
    backgroundImage: `linear-gradient(rgba(32,32,32,.65),rgba(32,32,32,.65)),url('assets/images/hero.jpg')`,
}
export default Hero;