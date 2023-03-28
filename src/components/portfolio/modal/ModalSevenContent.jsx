import React from 'react';

const ModalSevenContent = () => {
	return (
		<div className="slideshow">
			<figure>
				{/* Project Details Starts */}
				<figcaption>
					<h3>Crombie Project</h3>
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
							<span className="ft-wt-600 uppercase">jose</span>
						</div>
						{/* End .col */}

						<div className="col-12 col-sm-6 mb-2">
							<i className="fa fa-code pr-2" />
							<span className="project-label">Langages </span>:{' '}
							<span className="ft-wt-600 uppercase">MERN,WEB3, SOLIDITY</span>
						</div>
						{/* End .col */}

						<div className="col-12 col-sm-6 mb-2">
							<i className="fa fa-external-link pr-2" />
							<span className="project-label">Preview </span>:{' '}
							<span className="ft-wt-600 uppercase">
								<a href="https://crombie.live/" target="_blank" rel="noreferrer">
									CROMBIE FINANCE|Auto-Staking
								</a>
							</span>
						</div>
						{/* End .col */}
					</div>
					{/* End .row */}
				</figcaption>
				{/* Project Details Ends */}

				{/*  Main Project Content Starts */}
				<img src="img/projects/crombie.png" alt="Portolio" />
				{/* Main Project Content Ends */}
			</figure>
		</div>
		//  End .slideshow
	);
};

export default ModalSevenContent;
