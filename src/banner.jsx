import React, {useState} from "react";
import styled from 'styled-components';
import device from './device';

const SBanner = styled.div`
	height: 15rem;
	box-sizing: border-box;
	padding-top: 2.5rem;
	
	background-image: url(${props => props.img});
	background-size: 100% auto;
	background-position: center;
	background-repeat: no-repeat;
	filter: grayscale(70%);
	
	@media ${device.tablet} {
		height: 20rem;
		padding-top: 5rem;
	}
	
	@media ${device.desktop} {
		height: 25rem;
	}
`;

const SBannerFlex = styled.div`
	box-sizing: border-box;
	height: 10rem;
	padding: 1rem;
	
	text-align: left;
	color: white;
	text-shadow: 0.2rem 0.2rem 0.3rem gray;
	font-size: 2rem;
	
	@media ${device.desktop} {
		max-width: ${device.maxPageWidth};
		height: 15rem;
		margin: 0 auto;
	}
	
	> * {
		margin: 0;
		margin-bottom: 1rem;
	}
`;

function Banner(props) {

return (
	<SBanner img={props.img}>
	<SBannerFlex>
	{props.children}
	</SBannerFlex>
	</SBanner>
);

}

export default Banner;
