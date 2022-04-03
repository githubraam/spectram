import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
const ContainerWithCard = (props)=>{
    const data = props.layoutdata;

    let BgColor = {}
    if(data.container_background_color){
        BgColor = {
            backgroundColor: data.container_background_color
        }
    }
    


    return (
        <Container fluid as="section" className="container-fluid bg-light" style={BgColor} >
            <Container className="pt90 pb50">
                <Row>
                    {data.card_row.length>=0 && 
                        data.card_row.map((card,index)=>{
                            return(<div className="col-md-4" key={index}>
                                <figure className="figureImgBox">
                                    <img src={card.image.url} className="rounded img-fluid" loading="lazy" alt="" />

                                    <figcaption className="mt-3">
                                        <h3 className="title">{card.title}</h3>
                                        <div className="getContent weight300">
                                            <p>{card.description}</p>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>)
                        })
                    }
                </Row>
            </Container>
        </Container>
    )
}

export default ContainerWithCard;