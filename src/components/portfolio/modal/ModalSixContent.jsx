import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ModalSixContent = () => {
	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false
	};

	return (
		<div className="slideshow">
			<figure>
				{/* Project Details Starts */}
				<figcaption>
					<h3>Web Project</h3>
					<div className="row open-sans-font">
						<div className="col-12 col-sm-6 mb-2">
							<i className="fa fa-file-text-o pr-2" />
							<span className="project-label">Project </span>:{' '}
							<span className="ft-wt-600 uppercase">Website</span>
						</div>
						{/* End .col */}

						<div className="col-12 col-sm-6 mb-2">
							<i className="fa fa-user-o pr-2" />
							<span className="project-label">Client </span>:{' '}
							<span className="ft-wt-600 uppercase">Envato</span>
						</div>
						{/* End .col */}

						<div className="col-12 col-sm-6 mb-2">
							<i className="fa fa-code pr-2" />
							<span className="project-label">Langages </span>:{' '}
							<span className="ft-wt-600 uppercase">REACT, NFT, MONGO</span>
						</div>
						{/* End .col */}

						<div className="col-12 col-sm-6 mb-2">
							<i className="fa fa-external-link pr-2" />
							<span className="project-label">Title </span>:{' '}
							<span className="ft-wt-600 uppercase">
								<a href="#" target="_blank" rel="noreferrer">
									CRONOS MAP
								</a>
							</span>
						</div>
						{/* End .col */}
					</div>
					{/* End .row */}
				</figcaption>
				{/* Project Details Ends */}

				{/*  Main Project Content Starts */}
				<Slider {...settings}>
					<div className="slide_item">
						<img src="img/projects/map.png" alt="slide 1" />
					</div>
					<div className="slide_item">
						<img src="img/projects/map2.png" alt="slide 1" />
					</div>
					<div className="slide_item">
						<img src="img/projects/map3.png" alt="slide 1" />
					</div>
					<div className="slide_item">
						<img src="img/projects/map4.png" alt="slide 1" />
					</div>
				</Slider>
				{/* Main Project Content Ends */}
			</figure>
		</div>
		//  End .slideshow
	);
};

export default ModalSixContent;
