import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ModalOneContent = () => {
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
					<h3>Safu Project</h3>
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
							<span className="ft-wt-600 uppercase">Safu</span>
						</div>
						{/* End .col */}

						<div className="col-12 col-sm-6 mb-2">
							<i className="fa fa-code pr-2" />
							<span className="project-label">Langages </span>:{' '}
							<span className="ft-wt-600 uppercase">
								HTML, CSS, REACT, SOLIDITY, MONGODB, WEB3,NODE, ...
							</span>
						</div>
						{/* End .col */}

						<div className="col-12 col-sm-6 mb-2">
							<i className="fa fa-external-link pr-2" />
							<span className="project-label">Preview </span>:{' '}
							<span className="ft-wt-600 uppercase">
								<a href="https://safutrendzpad.com/" target="_blank" rel="noreferrer">
									SafuTrendz LaunchPad
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
						<img src="img/projects/safu.PNG" alt="safu" />
					</div>
					<div className="slide_item">
						<img src="img/projects/safu1.PNG" alt="safu" />
					</div>
					<div className="slide_item">
						<img src="img/projects/safu2.PNG" alt="safu" />
					</div>
				</Slider>

				{/* Main Project Content Ends */}
			</figure>
		</div>
		//  End .slideshow
	);
};

export default ModalOneContent;
