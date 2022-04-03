import { Container, Row,Table } from "react-bootstrap";
const Content =(props) =>{
    const data = props.layoutdata;
    return <div dangerouslySetInnerHTML={{ __html: data.content}} ></div>;
}

export default Content;