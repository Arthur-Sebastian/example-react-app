import React from 'react';
import styled from 'styled-components';
import device from './device';

const SPageWrapper = styled.div`
	box-sizing: border-box;
	padding: 0 0.2rem;
	
	@media ${device.desktop} {
		max-width: ${device.maxPageWidth};
		margin: 0 auto;
	}
`;

function PageWrapper(props) {

return (
	<SPageWrapper>
	{props.children}
	</SPageWrapper>
);

}

export default PageWrapper
