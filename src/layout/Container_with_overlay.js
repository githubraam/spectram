import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Container_with_overlay = (props) =>{
    const [sectionColor, setSectionColor] = useState('highLightSection');
    const [overlayOpacity, setOverlayOpacity] = useState(1)
    const data = props.layoutdata;

    useEffect(()=>{
        if(data.background_color === 'purple'){
            setSectionColor('bgPurple')
        }
        if(data.overlay_opacity){
            setOverlayOpacity(data.overlay_opacity);
        }
    },[])
    return(

        <Container fluid as="section" className={`haveOverlay pb90 pt90 ${sectionColor}`}>

                {data.overlay_image.url && <img src={data.overlay_image.url} alt={data.overlay_image.link.alt} className="overlay" style={{opacity: overlayOpacity}} />}
            <Container className="text-center text-white" dangerouslySetInnerHTML={{ __html: data.content}}>
            </Container>
        </Container>
    )
}

export default Container_with_overlay;