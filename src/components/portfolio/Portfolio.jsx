import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Modal from 'react-modal';
import ModalOneContent from './modal/ModalOneContent';
import ModalTwoContent from './modal/ModalTwoContent';
import ModalThreeContent from './modal/ModalThreeContent';
import ModalFourContent from './modal/ModalFourContent';
import ModalFiveContent from './modal/ModalFiveContent';
import ModalSixContent from './modal/ModalSixContent';
import ModalSevenContent from './modal/ModalSevenContent';
import ModalEightContent from './modal/ModalEightContent';
import ModalNineContent from './modal/ModalNineContent';
import ModalTenContent from './modal/ModalTenContent';

const Portfolio = () => {
	const [ isOpen, setIsOpen ] = useState(false);
	const [ isOpen2, setIsOpen2 ] = useState(false);
	const [ isOpen3, setIsOpen3 ] = useState(false);
	const [ isOpen4, setIsOpen4 ] = useState(false);
	const [ isOpen5, setIsOpen5 ] = useState(false);
	const [ isOpen6, setIsOpen6 ] = useState(false);
	const [ isOpen7, setIsOpen7 ] = useState(false);
	const [ isOpen8, setIsOpen8 ] = useState(false);
	const [ isOpen9, setIsOpen9 ] = useState(false);
	const [ isOpen10, setIsOpen10 ] = useState(false);

	function toggleModalOne() {
		setIsOpen(!isOpen);
	}
	function toggleModalTwo() {
		setIsOpen2(!isOpen2);
	}
	function toggleModalThree() {
		setIsOpen3(!isOpen3);
	}
	function toggleModalFour() {
		setIsOpen4(!isOpen4);
	}
	function toggleModalFive() {
		setIsOpen5(!isOpen5);
	}
	function toggleModalSix() {
		setIsOpen6(!isOpen6);
	}
	function toggleModalSeven() {
		setIsOpen7(!isOpen7);
	}
	function toggleModalEight() {
		setIsOpen8(!isOpen8);
	}
	function toggleModalNine() {
		setIsOpen9(!isOpen9);
	}
	function toggleModalTen() {
		setIsOpen10(!isOpen10);
	}

	return (
		<Tabs>
			<TabList className="portfolio-tab-list">
				<Tab>ALL</Tab>
				<Tab>REACT</Tab>
				<Tab>DAPP</Tab>
				<Tab>UINTY</Tab>
			</TabList>

			<div className="portfolio-tab-content">
				<TabPanel>
					<ul className="row grid justify-content-center">
						<li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="0">
							<figure onClick={toggleModalOne}>
								<img src="img/projects/safu.PNG" alt="safu" />
								<div className=" hover-content-wrapper">
									<span className="content-title">Crypto Launchpad</span>
								</div>
							</figure>

							{/* Start ModalOneContent */}
							<Modal
								isOpen={isOpen}
								onRequestClose={toggleModalOne}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalOne}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalOneContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalOneContent */}
						</li>

						<li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
							<figure onClick={toggleModalTwo}>
								<img src="img/projects/betting.png" alt="betting" />
								<div className=" hover-content-wrapper">
									<span className="content-title">Betting Site</span>
								</div>
							</figure>

							{/* Start ModalTwoContent */}
							<Modal
								isOpen={isOpen2}
								onRequestClose={toggleModalTwo}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalTwo}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalTwoContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalTwoContent */}
						</li>

						<li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
							<figure onClick={toggleModalThree}>
								<img src="img/projects/lunaland1.png" alt="lunaland" />
								<div className=" hover-content-wrapper">
									<span className="content-title">Dapp</span>
								</div>
							</figure>

							{/* Start ModalThreeContent */}
							<Modal
								isOpen={isOpen3}
								onRequestClose={toggleModalThree}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalThree}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalThreeContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalThreeContent */}
						</li>

						<li
							className="direction-reveal"
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-delay="0"
						>
							<figure className="direction-reveal__card" onClick={toggleModalFour}>
								<img src="img/projects/jackport.png" alt="jackport" />
								<div className=" hover-content-wrapper">
									<span className="content-title">Crypto Miner</span>
								</div>
							</figure>

							{/* Start ModalFourContent */}
							<Modal
								isOpen={isOpen4}
								onRequestClose={toggleModalFour}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalFour}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalFourContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalFourContent */}
						</li>

						<li
							className="direction-reveal"
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-delay="100"
						>
							<figure className="direction-reveal__card" onClick={toggleModalFive}>
								<img src="img/projects/shop.png" alt="shop" />
								<div className=" hover-content-wrapper">
									<span className="content-title">E-commerce Site</span>
								</div>
							</figure>

							{/* Start ModalFiveContent */}
							<Modal
								isOpen={isOpen5}
								onRequestClose={toggleModalFive}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalFive}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalFiveContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalFiveContent */}
						</li>

						<li
							className="direction-reveal"
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-delay="200"
						>
							<figure className="direction-reveal__card" onClick={toggleModalSix}>
								<img src="img/projects/map.png" alt="map" />
								<div className=" hover-content-wrapper">
									<span className="content-title">NextEarth Clone</span>
								</div>
							</figure>

							{/* Start ModalSixContent */}
							<Modal
								isOpen={isOpen6}
								onRequestClose={toggleModalSix}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalSix}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalSixContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalSixContent */}
						</li>

						<li
							className="direction-reveal"
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-delay="0"
						>
							<figure className="direction-reveal__card" onClick={toggleModalSeven}>
								<img src="img/projects/crombie.PNG" alt="crombie" />
								<div className=" hover-content-wrapper">
									<span className="content-title">Defi Project</span>
								</div>
							</figure>

							{/* Start ModalSevenContent */}
							<Modal
								isOpen={isOpen7}
								onRequestClose={toggleModalSeven}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalSeven}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalSevenContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalSevenContent */}
						</li>

						<li
							className="direction-reveal"
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-delay="100"
						>
							<figure className="direction-reveal__card" onClick={toggleModalEight}>
								<img src="img/projects/lillup.png" alt="lillup" />

								<div className=" hover-content-wrapper">
									<span className="content-title">Learn-to-earn Project</span>
								</div>
							</figure>
							{/* Start ModalEightContent */}
							<Modal
								isOpen={isOpen8}
								onRequestClose={toggleModalEight}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalEight}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalEightContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalEightContent */}
						</li>

						<li
							className="direction-reveal"
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-delay="200"
						>
							<figure className="direction-reveal__card" onClick={toggleModalNine}>
								<img src="img/projects/night club.png" alt="unity" />
								<div className=" hover-content-wrapper">
									<span className="content-title">Metaverse Project</span>
								</div>
							</figure>

							{/* Start ModalNineContent */}
							<Modal
								isOpen={isOpen9}
								onRequestClose={toggleModalNine}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalNine}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalNineContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalNineContent */}
						</li>

						<li
							className="direction-reveal"
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-delay="200"
						>
							<figure className="direction-reveal__card" onClick={toggleModalTen}>
								<img src="img/projects/joystream.png" alt="unity" />
								<div className=" hover-content-wrapper">
									<span className="content-title">Video Stream Project</span>
								</div>
							</figure>

							{/* Start ModalTenContent */}
							<Modal
								isOpen={isOpen10}
								onRequestClose={toggleModalTen}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalTen}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalTenContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalTenContent */}
						</li>
					</ul>
				</TabPanel>
				{/* End All Project */}

				<TabPanel>
					<ul className="row grid justify-content-center">
						<li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="0">
							<figure onClick={toggleModalOne}>
								<img src="img/projects/safu.PNG" alt="safu" />
								<div className=" hover-content-wrapper">
									<span className="content-title">Crypto Launchpad</span>
								</div>
							</figure>

							{/* Start ModalOneContent */}
							<Modal
								isOpen={isOpen}
								onRequestClose={toggleModalOne}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalOne}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalOneContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalOneContent */}
						</li>

						<li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
							<figure onClick={toggleModalTwo}>
								<img src="img/projects/betting.png" alt="betting" />
								<div className=" hover-content-wrapper">
									<span className="content-title">Betting Site</span>
								</div>
							</figure>

							{/* Start ModalTwoContent */}
							<Modal
								isOpen={isOpen2}
								onRequestClose={toggleModalTwo}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalTwo}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalTwoContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalTwoContent */}
						</li>

						<li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
							<figure onClick={toggleModalThree}>
								<img src="img/projects/lunaland1.png" alt="lunaland" />
								<div className=" hover-content-wrapper">
									<span className="content-title">Dapp</span>
								</div>
							</figure>

							{/* Start ModalThreeContent */}
							<Modal
								isOpen={isOpen3}
								onRequestClose={toggleModalThree}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalThree}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalThreeContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalThreeContent */}
						</li>

						<li
							className="direction-reveal"
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-delay="0"
						>
							<figure className="direction-reveal__card" onClick={toggleModalFour}>
								<img src="img/projects/jackport.png" alt="jackport" />
								<div className=" hover-content-wrapper">
									<span className="content-title">Crypto Miner</span>
								</div>
							</figure>

							{/* Start ModalFourContent */}
							<Modal
								isOpen={isOpen4}
								onRequestClose={toggleModalFour}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalFour}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalFourContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalFourContent */}
						</li>

						<li
							className="direction-reveal"
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-delay="100"
						>
							<figure className="direction-reveal__card" onClick={toggleModalFive}>
								<img src="img/projects/shop.png" alt="shop" />
								<div className=" hover-content-wrapper">
									<span className="content-title">E-commerce Site</span>
								</div>
							</figure>

							{/* Start ModalFiveContent */}
							<Modal
								isOpen={isOpen5}
								onRequestClose={toggleModalFive}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalFive}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalFiveContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalFiveContent */}
						</li>

						<li
							className="direction-reveal"
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-delay="200"
						>
							<figure className="direction-reveal__card" onClick={toggleModalSix}>
								<img src="img/projects/map.png" alt="map" />
								<div className=" hover-content-wrapper">
									<span className="content-title">NextEarth Clone</span>
								</div>
							</figure>

							{/* Start ModalSixContent */}
							<Modal
								isOpen={isOpen6}
								onRequestClose={toggleModalSix}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalSix}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalSixContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalSixContent */}
						</li>

						<li
							className="direction-reveal"
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-delay="0"
						>
							<figure className="direction-reveal__card" onClick={toggleModalSeven}>
								<img src="img/projects/crombie.PNG" alt="crombie" />
								<div className=" hover-content-wrapper">
									<span className="content-title">Defi Project</span>
								</div>
							</figure>

							{/* Start ModalSevenContent */}
							<Modal
								isOpen={isOpen7}
								onRequestClose={toggleModalSeven}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalSeven}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalSevenContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalSevenContent */}
						</li>

						<li
							className="direction-reveal"
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-delay="100"
						>
							<figure className="direction-reveal__card" onClick={toggleModalEight}>
								<img src="img/projects/lillup.png" alt="lillup" />

								<div className=" hover-content-wrapper">
									<span className="content-title">Learn-to-earn Project</span>
								</div>
							</figure>
							{/* Start ModalEightContent */}
							<Modal
								isOpen={isOpen8}
								onRequestClose={toggleModalEight}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalEight}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalEightContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalEightContent */}
						</li>
					</ul>
				</TabPanel>
				{/* End REACT Project */}

				<TabPanel>
					<ul className="row grid justify-content-center">
						<li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="0">
							<figure onClick={toggleModalOne}>
								<img src="img/projects/safu.PNG" alt="safu" />
								<div className=" hover-content-wrapper">
									<span className="content-title">Crypto Launchpad</span>
								</div>
							</figure>

							{/* Start ModalOneContent */}
							<Modal
								isOpen={isOpen}
								onRequestClose={toggleModalOne}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalOne}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalOneContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalOneContent */}
						</li>

						<li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
							<figure onClick={toggleModalTwo}>
								<img src="img/projects/betting.png" alt="betting" />
								<div className=" hover-content-wrapper">
									<span className="content-title">Betting Site</span>
								</div>
							</figure>

							{/* Start ModalTwoContent */}
							<Modal
								isOpen={isOpen2}
								onRequestClose={toggleModalTwo}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalTwo}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalTwoContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalTwoContent */}
						</li>

						<li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
							<figure onClick={toggleModalThree}>
								<img src="img/projects/lunaland1.png" alt="lunaland" />
								<div className=" hover-content-wrapper">
									<span className="content-title">Dapp</span>
								</div>
							</figure>

							{/* Start ModalThreeContent */}
							<Modal
								isOpen={isOpen3}
								onRequestClose={toggleModalThree}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalThree}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalThreeContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalThreeContent */}
						</li>

						<li
							className="direction-reveal"
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-delay="0"
						>
							<figure className="direction-reveal__card" onClick={toggleModalFour}>
								<img src="img/projects/jackport.png" alt="jackport" />
								<div className=" hover-content-wrapper">
									<span className="content-title">Crypto Miner</span>
								</div>
							</figure>

							{/* Start ModalFourContent */}
							<Modal
								isOpen={isOpen4}
								onRequestClose={toggleModalFour}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalFour}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalFourContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalFourContent */}
						</li>

						<li
							className="direction-reveal"
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-delay="200"
						>
							<figure className="direction-reveal__card" onClick={toggleModalSix}>
								<img src="img/projects/map.png" alt="map" />
								<div className=" hover-content-wrapper">
									<span className="content-title">NextEarth Clone</span>
								</div>
							</figure>

							{/* Start ModalSixContent */}
							<Modal
								isOpen={isOpen6}
								onRequestClose={toggleModalSix}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalSix}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalSixContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalSixContent */}
						</li>

						<li
							className="direction-reveal"
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-delay="0"
						>
							<figure className="direction-reveal__card" onClick={toggleModalSeven}>
								<img src="img/projects/crombie.PNG" alt="crombie" />
								<div className=" hover-content-wrapper">
									<span className="content-title">Defi Project</span>
								</div>
							</figure>

							{/* Start ModalSevenContent */}
							<Modal
								isOpen={isOpen7}
								onRequestClose={toggleModalSeven}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalSeven}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalSevenContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalSevenContent */}
						</li>

						<li
							className="direction-reveal"
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-delay="100"
						>
							<figure className="direction-reveal__card" onClick={toggleModalEight}>
								<img src="img/projects/lillup.png" alt="lillup" />

								<div className=" hover-content-wrapper">
									<span className="content-title">Learn-to-earn Project</span>
								</div>
							</figure>
							{/* Start ModalEightContent */}
							<Modal
								isOpen={isOpen8}
								onRequestClose={toggleModalEight}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalEight}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalEightContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalEightContent */}
						</li>

						<li
							className="direction-reveal"
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-delay="200"
						>
							<figure className="direction-reveal__card" onClick={toggleModalTen}>
								<img src="img/projects/joystream.png" alt="unity" />
								<div className=" hover-content-wrapper">
									<span className="content-title">Video Stream Project</span>
								</div>
							</figure>

							{/* Start ModalTenContent */}
							<Modal
								isOpen={isOpen10}
								onRequestClose={toggleModalTen}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalTen}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalTenContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalTenContent */}
						</li>
					</ul>
				</TabPanel>
				{/* End DAPP Project */}

				<TabPanel>
					<ul className="row grid justify-content-center">
						<li
							className="direction-reveal"
							data-aos="fade-right"
							data-aos-duration="1200"
							data-aos-delay="200"
						>
							<figure className="direction-reveal__card" onClick={toggleModalNine}>
								<img src="img/projects/night club.png" alt="unity" />
								<div className=" hover-content-wrapper">
									<span className="content-title">Metaverse Project</span>
								</div>
							</figure>

							{/* Start ModalNineContent */}
							<Modal
								isOpen={isOpen9}
								onRequestClose={toggleModalNine}
								contentLabel="My dialog"
								className="custom-modal dark"
								overlayClassName="custom-overlay dark"
								closeTimeoutMS={500}
							>
								<div>
									<button className="close-modal" onClick={toggleModalNine}>
										<img src="/img/cancel.svg" alt="close icon" />
									</button>
									{/* End close icon */}

									<div className="box_inner portfolio">
										<ModalNineContent />
									</div>
								</div>
							</Modal>
							{/* End  ModalNineContent */}
						</li>
						{/* <!-- Portfolio Item Ends --> */}
					</ul>
				</TabPanel>
				{/* End UINTY Design Project*/}
				
			</div>
		</Tabs>
	);
};

export default Portfolio;
