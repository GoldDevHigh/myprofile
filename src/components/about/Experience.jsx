import React from 'react';

const experienceContent = [
	{
		year: '2019-2023,',
		position: 'Frontend & discord-bot developer',
		compnayName: 'Joystream.org',
		details: `Joystream aims to empower users to create and manage their own decentralized applications and content platforms, while also providing a fair and transparent system for rewarding active participants.`
	},
	{
		year: '2016 - 2019,',
		position: 'Freelancer',
		compnayName: 'upwork.com',
		details: `frontend, backend, blockchain and unity nft development for client.`
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
