import React from 'react';

const experienceContent = [
	{
		year: ' 2020,',
		position: 'Software Engineer Contractor',
		compnayName: 'SmartAppSolutions.net',
		details: ` one of the premier companies that provides outstanding services in the field of web design and development of all kinds of websites`
	},
	{
		year: '2018 - 2019,',
		position: 'Blockchain Contractor',
		compnayName: 'Rocketdollar.com',
		details: `U.S.-based financial services company`
	}
];

const Experience = () => {
	return (
		<ul>
			{experienceContent.map((val, i) => (
				<li key={i}>
					<div className="icon">
						<i className="fa fa-briefcase" />
					</div>
					<span className="time open-sans-font text-uppercase">{val.year}</span>
					<h5 className="poppins-font text-uppercase">
						{val.position}
						<span className="place open-sans-font">{val.compnayName}</span>
					</h5>
					<p className="open-sans-font">{val.details}</p>
				</li>
			))}
		</ul>
	);
};

export default Experience;
