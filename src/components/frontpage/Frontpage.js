import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import { GlobalContext } from "../../context/Globalcontext";
import './frontpage.css';


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
			console.log(homeContent.acf.main_banner_carousel);
			setTopCarousel(homeContent.acf.main_banner_carousel)
		}
	},[homeContent])

	const TopBannerSlider = () =>{
		return(
			<Carousel as="section">
			{topCarousel.map(banner=>{
				return (
				<Carousel.Item>
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



	return (
		<>
			{topCarousel && <TopBannerSlider />}
			{/*
			<Carousel as="section">
				
				
				 <Carousel.Item>
					<img className="d-block w-100" src="assets/images/banner3.jpg" alt="Second slide" />

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="assets/images/banner3.jpg" alt="Third slide" />

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			 */}

			{/* what we offer */}
			<Container fluid as="section" className="container-fluid whatWeOfferSec bgNoRepeat bgCover pt90 pb50">
				<Container >
					<Row>
						<div className="col-12">
							<h1 className="text-center mb50">What We Offer</h1>
						</div>
					</Row>
					<Row className="g-0">
						<div className="col-md-3">
							<div className="row no-gutters row">
								<div className="col-3 px-2">
									<img src="assets/images/film-processing.png" alt="" className="img-fluid" loading="lazy" />
								</div>
								<div className="col-9 px-2">
									<h2 className="font24">Film Processing</h2>
									<p>Premium lab services, specializing in negative and reversal chemical processing.</p>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="row no-gutters row">
								<div className="col-3 px-2">
									<img src="assets/images/film-scanning.png" alt="" className="img-fluid" loading="lazy" />
								</div>
								<div className="col-9 px-2">
									<h2 className="font24">Film Scanning</h2>
									<p>Spectra suites now offer true RGB 4K or hi-definition SCANITY &nbsp; Spirit Datacine scans.</p>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="row no-gutters row">
								<div className="col-3 px-2">
									<img src="assets/images/product-supply.png" alt="" className="img-fluid" loading="lazy" />
								</div>
								<div className="col-9 px-2">
									<h2 className="font24">Product Supply</h2>
									<p>We are factory direct distributors for Kodak, Hama, Tayloreel and other major manufacturers.</p>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="row no-gutters row">
								<div className="col-3 px-2">
									<img src="assets/images/rental-service.png" alt="" className="img-fluid" loading="lazy" />
								</div>
								<div className="col-9 px-2">
									<h2 className="font24">Rental Service</h2>
									<p>Spectra provides reasonably priced, well maintained equipment for projects.</p>
								</div>
							</div>
							<div>

							</div>
						</div>
					</Row>
				</Container>
			</Container>
			{/* ending what we offer */}

			{/*  after what we offer */}
			<Container fluid as="section" className="container-fluid bgNoRepeat bgCover pb90 pt90 bg-primary" >
				<Container>
					<Row>
						<div className="col-lg-3 col-md-6 mb-3">
							<div className="boxWithImg bg-dark">
								<h3 className="text-center font24 weight500 text-white">Lab</h3>
								{/* <img src="/wp-content/uploads/2021/12/lab.jpg" alt="" className="thumb" /> */}
									<div className="contentWrpr d-flex flex-column">
										<div className="excerpt"><p>We process 35mm &nbsp; Super 35, 16mm &bsp; Super 16, Regular 8mm and Super 8! Film is processed in batches and...</p></div>
										<a href="#" className="anchorbtn">Learn More</a>
									</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-3">
							<div className="boxWithImg bg-dark">
								<h3 className="text-center font24 weight500 text-white">Scanning</h3>
								{/* <img src="/wp-content/uploads/2021/12/scan.jpg" alt="" className="thumb" /> */}
									<div className="contentWrpr d-flex flex-column">
										<div className="excerpt"><p>Spectra suites now offer true RGB 4K or hi-definition SCANITY and Spirit Datacine scans complete with multi...</p></div>
										<a href="#" className="anchorbtn">Learn More</a>
									</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-3">
							<div className="boxWithImg bg-dark">
								<h3 className="text-center font24 weight500 text-white">Film</h3>
								{/* <img src="<?php echo site_url(); ?>/wp-content/uploads/2021/12/filming.jpg" alt="" className="thumb" /> */}
									<div className="contentWrpr d-flex flex-column">
										<div className="excerpt"><p>We carry only factory fresh films! No recans!  No Re-branding!  Refrigerated for freshness...</p></div>
										<a href="#" className="anchorbtn">Learn More</a>
									</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-3">
							<div className="boxWithImg bg-dark">
								<h3 className="text-center font24 weight500 text-white">Products</h3>
								{/* <img src="<?php echo site_url(); ?>/wp-content/uploads/2021/12/products.jpg" alt="" className="thumb" /> */}
									<div className="contentWrpr d-flex flex-column">
										<div className="excerpt"><p>Spectra Film and Video carries a variety of hard to find items to make shooting and editing your projects easier...</p></div>
										<a href="#" className="anchorbtn">View Products</a>
									</div>
							</div>
						</div>
					</Row>
				</Container>
			</Container>
			{/* ending after what we offer  */}

			{/* single product section */}
			<Container fluid as="section" className="homeSingleProdSec container-fluid bgNoRepeat bgCover bg-dark">
				<div className="container text-white">
					<div className="row">
						<div className="col-md-7 font20 weight300">
							<h2 className="text-primary">Cameras</h2>
							<p>Need a camera rental for your next film shoot? We carry classic camera models in 16mm &nbsp; Super 8mm film formats. Daily &nbsp; weekly rates available.</p>
							<p>Have a camera in need of servicing or repair? Check out our resourceful referral list for facilities all over the country.</p>

							<div className="pt-5">
								<a href="#" className="btn btn-primary">View Products</a>
							</div>
						</div>

					</div>
				</div>
			</Container>
			{/* ending single product section  */}

			{<Container fluid as="section" className="hapyToHelpSec container-fluid bgNoRepeat bgCover pt90 pb50">
				{/* <img src="/wp-content/uploads/2021/12/bg-help.jpg" className="overlay" alt="" loading="lazy" /> */}
					<div className="container text-center text-white">
						<div className="row">
							<div className="col-10 offset-1">
								{/* <img src="/wp-content/uploads/2021/12/help-icon.png" alt="" loading="lazy" /> */}
									<h2 className="mt-4 text-white">Happy to Help <span className="text-primary">Filmmakers</span></h2>
									<p>We enjoy assisting our clients and customers and will respond to any of your questions about Spectra products and services. Our team of experienced and knowledgeable personnel advises and offers agreeable solutions for all filmmakers' film and digital inquiries. Visit our <a href="#">contact page</a> for more information.</p>
							</div>
						</div>

					</div>
			</Container>}


		</>

	);
};
export default Frontpage;