import { useEffect, useState } from "react";
import Hero from "../common/Hero";
import './lab.css'
import axios from "axios";
import Loading from "../common/Loading";
import Layout from "../layout/Layout";
const Lab = () => {
    const [labContent, setLabContent] = useState([]);
    const [heroImg, setHeroImg] = useState('');
    const [layout,setLayout] = useState([]);
    useEffect(()=>{
		fetchPageData();
	},[])

    async function fetchPageData(){
        axios.get(process.env.REACT_APP_WP_URL_JSON+'wp/v2/pages/10?_embed')
		.then((response)=>{
			console.log(response.data);
            setLabContent(response.data)                
            
		})
        
		.catch((error)=>{
			console.log(error);
			alert('Something went wrong');
		})
    }

    useEffect(()=>{
        if(labContent.id){
            setHeroImg(labContent._embedded['wp:featuredmedia'][0].source_url )

            setLayout(labContent.acf.layout)
        }
    },[labContent])

    
    if(labContent){       


        return (

            <main>
                <Hero imgSrc={heroImg} />


                

                {layout.length && layout.map((section,index)=>{
                    return <Layout type={section} key={index} />
                })}
                
                

                
            </main>
        )
    }
    else{
        return(
            <Loading />
        )
    }
}

export default Lab;