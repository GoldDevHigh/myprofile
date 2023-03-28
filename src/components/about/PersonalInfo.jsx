import React from 'react';

const personalInfoContent = [
	{ meta: 'first name', metaInfo: 'Jose' },
	{ meta: 'last name', metaInfo: 'Ducque' },
	{ meta: 'Age', metaInfo: '40 Years' },
	{ meta: 'Nationality', metaInfo: 'American' },
	{ meta: 'Freelance', metaInfo: 'Available' },
	{ meta: 'Address', metaInfo: '7131 Sands Lane, Anderson, CA 96007, United States' },
	{ meta: 'phone', metaInfo: '+1 5307107475' },
	{ meta: 'Email', metaInfo: 'chrlschwb77@gmail.com' },
	{ meta: 'Skype', metaInfo: 'ive:.cid.418bf82b89cdf729' },
	{ meta: 'langages', metaInfo: 'English' }
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
