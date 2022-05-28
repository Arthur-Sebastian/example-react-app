import React from 'react';
import styled from 'styled-components';

const SButton = styled.button
`
	width: 10rem;
	height: 3rem;
	text-transform: uppercase;
	font-size: 1rem;
	font-weight: bold;
	color: black;
	border: 0.2rem solid black;
	border-radius: 0.3rem;
	background: none;
	transition: border-color 0.25s;
	display: block;
	
	&:active {
		border-color: red;
	}
`;

function Button(props) {

return (
	<SButton onClick={props.onClick}>
	{props.text}
	</SButton>
);

}

export default Button; 
