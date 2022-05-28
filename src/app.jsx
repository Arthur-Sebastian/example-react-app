import React, {useState} from 'react';
import logo from '../public/logo.svg';
import logo_s from '../public/logo_small.svg';
import './main.css';

import Header from './header';
import PageWrapper from './pagewrapper';
import Banner from './banner';
import Button from './button';
import Expand from './expand';

function App() {

return (
	<>
	<Header 
		theme={{ mainColor: "#833cff", backgroundColor: "#002531" }}
		logos={{ big: logo, small: logo_s }}>
	</Header>
	<Banner img="./turbines.jpg">
	<h3>Cool text idc.</h3>
	<Button text="Contact"/>
	</Banner>
	<PageWrapper>
	<Expand title="EXPAND A" content="content" />
	</PageWrapper>
	</>
);

}

export default App;
