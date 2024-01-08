import React from 'react';

const personalInfoContent = [
	{ meta: 'first name', metaInfo: 'Stuart' },
	{ meta: 'last name', metaInfo: 'Lee' },
	{ meta: 'Age', metaInfo: '33 Years' },
	{ meta: 'Nationality', metaInfo: 'Singapore' },
	{ meta: 'Freelance', metaInfo: 'Available' },
	{ meta: 'Address', metaInfo: '26 Sin Ming Lane, Singapore' },
	{ meta: 'phone', metaInfo: '+1 413 376 8769' },
	{ meta: 'Email', metaInfo: 'stuartlee.dev@gmail.com' },
	{ meta: 'Skype', metaInfo: 'live:.cid.2c016e69ca4ef739' },
	{ meta: 'langages', metaInfo: 'English, Chinese' }
];

const PersonalInfo = () => {
	return (
		<ul className="about-list list-unstyled open-sans-font">
			{personalInfoContent.map((val, i) => (
				<li key={i}>
					<span className="title">{val.meta}: </span>
					<span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{val.metaInfo}</span>
				</li>
			))}
		</ul>
	);
};

export default PersonalInfo;
