import React from 'react';
import styled from 'styled-components';
import device from './device';

const SSpacer = styled.div`
	height: ${props => props.height || "4rem"};
`;

const SLogoSmall = styled.img`
	display: block;
	margin-left: 0.5rem;
	height: 50%;
	
	@media ${device.tablet} {
		display: none;
	}
`;

const SLogoBig = styled(SLogoSmall)`
	display: none;
	
	@media ${device.tablet} {
		display: block;
	}
`;

const SHeader = styled.div`
	z-index: 5;
	top: 0;
	position: fixed;
	background-color: ${props => props.theme.backgroundColor || "#3d3846"};
	border-bottom: 0.4rem solid ${props => props.theme.mainColor || "#c061cb"};
	height: ${props => props.height || "3.6rem"};
	width: 100%;
`;

const SHeaderFlex = styled.div`
	box-sizing: border-box;
	height: 100%;
	overflow: hidden;
	display: flex;
	padding: 0 0.2rem;
	
	@media ${device.desktop} {
		max-width: ${device.maxPageWidth};
		margin: auto auto;
	}
	
	> * {
		margin-top: auto;
		margin-bottom: auto;
		max-height: 80%;
	}
`;

function Header(props) {

return (
	<>
	<SSpacer height={props.height}/>
	<SHeader height={props.height} theme={props.theme}>
	<SHeaderFlex>
	{
		props.logos ? (
		<>
		<SLogoBig src={props.logos.big}/>
		<SLogoSmall src={props.logos.small}/>
		</>
		) : (
		<>
		</>
		)
	}
	{props.children}
	</SHeaderFlex>
	</SHeader>
	</>
);

}

export default Header;
