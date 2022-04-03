import { useEffect, useState } from "react";

const ImageWithText = (props) => {
    const data = props.layoutdata;
    const [showTopContent, setShowTopContent] = useState(false);
    const [showVideo, setShowVideo] = useState(false);

    let textColor;
    let options = data.options;
    let secBg;
    let contFluidClass;

    useEffect(()=>{
        for(var i =0; i<options.length; i++){
            if(options[i]==='overlayimg'){
                contFluidClass='newAtSpectraSec'
            }
            if(options[i]==='bgcolor'){
                secBg = {
                    backgroundColor: data.background_color
                }
                textColor = 'text-white';
            }
            if(options[i]==='topcontenttitle' || options[i]==='topcontent'){
                setShowTopContent(true)
            }
            if(options[i]==='video'){
                setShowVideo(true)
            }
        }
    },[])




   /*  options.forEach(option => {
        if(option==='overlayimg'){
            contFluidClass='newAtSpectraSec'
        }
        if(option==='bgcolor'){
            secBg = {
                backgroundColor: data.background_color
            }
            textColor = 'text-white';
        }
        if(option==='topcontenttitle' || option==='topcontent'){
            setShowTopContent(true)
        }
        if(option==='video'){
            setShowVideo(true)
        }
    }); */
    return (
        <section className={`container-fluid posRel ${contFluidClass}`} style={secBg}>
            {data.overlay_image && <img src={data.overlay_image} alt="" className="overlay" />}

            <div className="container pt90 pb90">
                <div className="row">
                   
                    {showTopContent && <div className={`col-12 text-center ${textColor}`} >
                        <h2 className={`text-center mb-3 ${textColor}`}>{data.top_content_title}</h2>
                        <div className="mb-3">
                            {data.top_content}
                        </div>
                    </div>}
                    

                    <div className="col-md-6">
                     

                        {showVideo && <div className="videoEmbedWrpr posRel">
                            

                            <img src={data.video_thumbnail.url} loading="lazy" alt="" className="bgImg img-fluid rounded" />
                            
                            <img src={'playbtn.png'} className="playBtn" data-toggle="modal" data-target="#videoEmbedModal" data-type={data.video_type} data-src={data.url} />
                        </div>}


                        {!showVideo && <img src={data.left_image.url} loading="lazy" alt="" className="img-fluid " />}

                    </div>
                    <div className="col-md-6">
                        <h2 className="<?php echo $textColor; ?>">{data.right_title}</h2>
                        <div className="getContent <?php echo $textColor; ?>" dangerouslySetInnerHTML={{ __html: data.right_content}} ></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageWithText;