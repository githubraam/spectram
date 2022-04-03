import { Container, Table, Row } from "react-bootstrap";
const VideoWithContent = (props) =>{
    const data = props.layoutdata
    return(
        <Container fluid as="section" className="container-fluid">
            <Container className="container pt90 pb90">
                <Row>
                    <div className="col-md-6">
                        <img src={data.video_thumbnail.url} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>{data.right_title}</h2>
                        <div className="getContent">
                            <div  dangerouslySetInnerHTML={{ __html: data.right_content}} ></div>
                        </div>
                    </div>
                </Row>
            </Container>
        </Container>
    )
}

export default VideoWithContent;