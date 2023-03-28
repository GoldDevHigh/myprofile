import React from 'react';

const educationContent = [
	{
		year: '2015',
		degree: 'Bachelor in Computer Science',
		institute: 'Shasta College',
		details: 'Computer Analysis, Digital computing, Data Management, AI'
	},
	{
		year: '2019',
		degree: 'Diploma',
		institute: 'Coursera',
		details: 'Decentralized Applications (Dapps)'
	}
];

const Education = () => {
	return (
		<ul>
			{educationContent.map((val, i) => (
				<li key={i}>
					<div className="icon">
						<i className="fa fa-briefcase" />
					</div>
					<span className="time open-sans-font text-uppercase">{val.year}</span>
					<h5 className="poppins-font text-uppercase">
						{val.degree}
						<span className="place open-sans-font">{val.institute}</span>
					</h5>
					<p className="open-sans-font">{val.details}</p>
				</li>
			))}
		</ul>
	);
};

export default Education;
