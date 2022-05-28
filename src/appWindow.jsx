import React from 'react';
import styled from 'styled-components';
import device from './device';

const SAppWindow = styled.div`
	background-color: #dddddd;
	border-radius: 1rem;
	border: 0.2rem solid #adadad;
	max-width: 30rem;
	margin: 0.5rem auto;
	height: 20rem;
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-end;
	align-items: center;
	padding: 1rem;
`;

function AppWindow(props) {

return (
	<SAppWindow>
	{props.children}
	</SAppWindow>
);

}

export default AppWindow;
