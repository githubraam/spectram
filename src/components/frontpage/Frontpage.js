import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/Globalcontext";
import './frontpage.css';
import Loading from "../../common/Loading";

const Frontpage = () => {
	const {setIsLoading} = useContext(GlobalContext);
	const [homeContent,setHomeContent] = useState(false);
	const [topCarousel,setTopCarousel] = useState(false)


	useEffect(()=>{
		axios.get(process.env.REACT_APP_WP_URL_JSON+'wp/v2/pages/193')
		.then((response)=>{
			//console.log(response.data);
			setHomeContent(response.data)
		})
		.catch((error)=>{
			console.log(error);
			alert('Something went wrong');
		})
	},[])

	useEffect(()=>{
		if(homeContent){
			console.log(homeContent);
			setTopCarousel(homeContent.acf.main_banner_carousel)
		}
	},[homeContent])

	const TopBannerSlider = () =>{
		return(
			<Carousel as="section">
			{topCarousel.map((banner,index)=>{
				return (
				<Carousel.Item key={index}>
					<img className="d-block w-100" src={banner.imgae.url} alt="Second slide" />

					<Carousel.Caption>
						{banner.caption_title && <h2 className="text-white">{banner.caption_title}</h2>}
						<div dangerouslySetInnerHTML={{ __html: banner.caption_blurb }} />
					</Carousel.Caption>
				</Carousel.Item>
				)
			})}
			
			</Carousel>
		)
	}

	if(homeContent){


		return (
			<>
				{topCarousel && <TopBannerSlider />}

				{/* what we offer */}
				<Container fluid as="section" className="container-fluid whatWeOfferSec bgNoRepeat bgCover pt90 pb50">
					<Container >
						<Row>
							<div className="col-12">
								<h1 className="text-center mb50">{homeContent.acf.what_we_offer.main_title}</h1>
							</div>
						</Row>
						<Row className="g-0">
							
							{homeContent.acf.what_we_offer.offer_box.map((box,index) => 
							<div key={index} className="col-md-3">
								<div className="row no-gutters row">
									<div className="col-3 px-2">
										<img src={box.icon.url} alt={box.icon.alt} className="img-fluid" loading="lazy" />
									</div>
									<div className="col-9 px-2">
										<h2 className="font24">{box.title}</h2>
										<p>{box.description}</p>
									</div>
								</div>
							</div>
							)}
						</Row>
					</Container>
				</Container>
				{/* ending what we offer */}

				{/*  after what we offer */}
				<Container fluid as="section" className="container-fluid bgNoRepeat bgCover pb90 pt90 bg-primary" >
					<Container>
						<Row>
						{homeContent.acf.service_section.map((service,index)=>
						<div className="col-lg-3 col-md-6 mb-3" key={index}>
							<div className="boxWithImg" style={{backgroundColor:service.background_color}}>
								<h3 className="text-center font24 weight500 text-white">{service.title}</h3>
									<img src={service.image.url} alt={service.image.alt} className="thumb" />
									<div className="contentWrpr d-flex flex-column">
										<div className="excerpt"><p>{service.description}</p></div>
										<Link className="anchorbtn" to={service.cta.url}>{service.cta.title}</Link>
									</div>
							</div>
						</div>
						)}
							

						</Row>
					</Container>
				</Container>
				{/* ending after what we offer  */}

				{/* single product section */}
				<Container fluid as="section" className="homeSingleProdSec container-fluid bgNoRepeat bgCover bg-dark" style={{backgroundImage: 'url('+homeContent.acf.product_highlights.background_image+')'}}>
					<div className="container text-white">
						<div className="row">
							<div className="col-md-7 font20 weight300">
								<h2 className="text-primary">{homeContent.acf.product_highlights.title}</h2>
								<div dangerouslySetInnerHTML={{ __html: homeContent.acf.product_highlights.description}} />

								<div className="pt-5">
									<a href="#" className="btn btn-primary">View Products</a>
								</div>
							</div>

						</div>
					</div>
				</Container>
				{/* ending single product section  */}

				{<Container fluid as="section" className="hapyToHelpSec container-fluid bgNoRepeat bgCover pt90 pb50">
					<img src="assets/images/bg-help.jpg" className="overlay" alt="" loading="lazy" />
						<div className="container text-center text-white">
							<div className="row">
								<div className="col-10 offset-1">
									{/* <img src="/wp-content/uploads/2021/12/help-icon.png" alt="" loading="lazy" /> */}
									<div dangerouslySetInnerHTML={{ __html: homeContent.acf.happy_to_help.content}} />
								</div>
							</div>

						</div>
				</Container>}


			</>

		);
	}
	else{
		return(<Loading/>)
	}
};
export default Frontpage;