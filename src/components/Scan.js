import { useEffect, useState } from "react";
import Hero from "../common/Hero"
import axios from "axios";
import Loading from "../common/Loading";
import Layout from "../layout/Layout";

const Scan = () => {

    const [scanContent, setScanContent] = useState([]);
    const [heroImg, setHeroImg] = useState('');
    const [layout,setLayout] = useState([]);


    useEffect(()=>{
		fetchPageData();
	},[])


    async function fetchPageData(){
        axios.get(process.env.REACT_APP_WP_URL_JSON+'wp/v2/pages/12?_embed')
		.then((response)=>{
			
            setScanContent(response.data)                
            
		})
        
		.catch((error)=>{
			console.log(error);
			alert('Something went wrong');
		})
    }

    useEffect(()=>{
        if(scanContent.id){
            setHeroImg(scanContent._embedded['wp:featuredmedia'][0].source_url )

            setLayout(scanContent.acf.layout)
        }
    },[scanContent])

    if(scanContent){    


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

export default Scan;