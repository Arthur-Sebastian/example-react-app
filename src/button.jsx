import React from 'react';
import styled from 'styled-components';

const SButton = styled.button`
	width: 9rem;
	height: 3rem;
	text-transform: uppercase;
	font-size: 1rem;
	font-weight: bold;
	color: ${props => props.theme.main || '#dc8add'};
	border: 0.2rem solid ${
	(props => props.theme.border) ||
	(props => props.theme.main) ||
	'#dc8add'};
	background: ${props => props.theme.background || 'none'};
	border-radius: 0.3rem;
	transition: border-color 0.2s, color 0.2s, background 0.2s;
	display: inline-block;
	margin: 0.2rem;
	
	&:hover {
		border-color: ${
		(props => props.theme.borderHover) ||
		(props => props.theme.mainHover) || 
		'#c061cb'};
		background: ${props => props.theme.backgroundHover || 'none'};
		color: ${props => props.theme.mainHover || '#c061cb'};
	}
	
	&:active {
		border-color: ${
		(props => props.theme.mainActive) ||
		(props => props.theme.borderActive) ||
		'#613583'};
		background: ${(props => props.theme.backgroundActive) || 'none'};
		color: ${(props => props.theme.mainActive) || '#613583'};
	}
`;

function Button(props) {

return (
	<SButton theme={props.theme} onClick={props.onClick}>
	{props.text}
	</SButton>
);

}

export default Button; 
