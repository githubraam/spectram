import ContainerWithCard from "./Container_with_card";
import Container_with_overlay from "./Container_with_overlay";
import Content from "./Content";
import Dual_column_content from "./Dual_column_content";
import ImageWithText from "./Image_with_text";
import VideoWithContent from "./Video_with_content";
import './layout.css'

const Layout = (props) =>{
    const data = props.type;
    const type = props.type.acf_fc_layout;
    return(
        <>
        
        {type==='video_with_content' && <VideoWithContent layoutdata={data} />}
        {type==='image_with_text' && <ImageWithText layoutdata={data}  />}
        {type==='content' && <Content  layoutdata={data} />}
        {type==='container_with_card' && <ContainerWithCard  layoutdata={data}  />}
        {type==='dual_column_content' && <Dual_column_content  layoutdata={data} />}
        {type==='container_with_overlay' && <Container_with_overlay  layoutdata={data} /> }
        </>
    )
}

export default Layout;