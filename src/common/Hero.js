import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import {GlobalContext} from '../context/Globalcontext'



class Hero extends React.Component{
    static contextType = GlobalContext
    state={
        bgSrc: 'assets/images/hero.jpg',
        headerHeight: ''
    }
    
    componentDidUpdate(prevProps) {
        if ( this.props.imgSrc !==  prevProps.imgSrc) {
            this.setState({bgSrc: this.props.imgSrc})
        }
        this.setState(()=>{
            this.headerHeight = this.context.headerHeight
        })

    }

    render(){
        
        return(
            <Container fluid as="section" className="hero  bgNoRepeat bgCover d-flex flex-column justify-content-center" style={{backgroundImage: `linear-gradient(rgba(32,32,32,.65),rgba(32,32,32,.65)),url(${this.state.bgSrc})`, marginTop:this.headerHeight}} >
                <Container className="container text-white text-center" >
                    
                     <h1 className="text-white title">Hero</h1>

                
                </Container>
            </Container>
        )
    }
}

export default Hero;