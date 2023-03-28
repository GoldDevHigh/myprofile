import React from 'react';

const ModalFourContent = () => {
	return (
		<div className="slideshow">
			<figure>
				{/* Project Details Starts */}
				<figcaption>
					<h3>WEB PROJECT</h3>
					<div className="row open-sans-font">
						<div className="col-12 col-sm-6 mb-2">
							<i className="fa fa-file-text-o pr-2" />
							<span className="project-label">Project </span>:{' '}
							<span className="ft-wt-600 uppercase">Video</span>
						</div>
						{/* End .col */}

						<div className="col-12 col-sm-6 mb-2">
							<i className="fa fa-user-o pr-2" />
							<span className="project-label">Client </span>:{' '}
							<span className="ft-wt-600 uppercase">jose</span>
						</div>
						{/* End .col */}

						<div className="col-12 col-sm-6 mb-2">
							<i className="fa fa-code pr-2" />
							<span className="project-label">Language </span>:{' '}
							<span className="ft-wt-600 uppercase">MERN, SOLIDITY, WEB3</span>
						</div>
						{/* End .col */}

						<div className="col-12 col-sm-6 mb-2">
							<i className="fa fa-external-link pr-2" />
							<span className="project-label">Preview </span>:{' '}
							<span className="ft-wt-600 uppercase">
								<a href="https://lunajackpot.com/" target="_blank" rel="noreferrer">
									Jack Pot (Luna)
								</a>
							</span>
						</div>
						{/* End .col */}
					</div>
					{/* End .row */}
				</figcaption>
				{/* Project Details Ends */}

				{/*  Main Project Content Starts */}
				<div className="videocontainer">
					<img src="/img/projects/jackport.png" alt="jackport" />
				</div>
				{/* Main Project Content Ends */}
			</figure>
		</div>
		//  End .slideshow
	);
};

export default ModalFourContent;
