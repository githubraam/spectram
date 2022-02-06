import { Carousel, Container, Row } from "react-bootstrap";

const Frontpage = () => {
	return (
		<>
		<Carousel as="section">
			<Carousel.Item>
				<img className="d-block w-100" src="assets/images/banner3.jpg" alt="First slide" />
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
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


		</>

	);
};
export default Frontpage;