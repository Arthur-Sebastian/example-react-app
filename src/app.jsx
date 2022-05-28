import React, {useState} from 'react';
import logo from '../public/logo.svg';
import logo_s from '../public/logo_small.svg';
import './main.css';

import Header from './header';
import PageWrapper from './pageWrapper';
import AppWindow from './appWindow';
import Banner from './banner';
import Button from './button';
import Expand from './expand';

/*
	
*/

const appTheme = {
	mainColor: '#833cff',
	mainColorDark: '#000000',
	backgroundColor: '#002531'
};

const buttonNormal = {
	main: '#833cff',
	mainHover: '#6a31cc',
	mainActive: '#502599'
}

const buttonAttention = {
	main: '#ffffff',
	mainHover: '#c0bfbc',
	mainActive: '#3d3846',
	border: '#833cff',
	borderHover: '#833cff',
	background: '#833cff',
	backgroundHover: '#833cff',
	backgroundActive: '#833cff'
}

const appLogos = {
	big: logo,
	small: logo_s
};

function App() {

const [slide, setSlide] = React.useState(0);
const slides = [
	'./test1.png',
	'./test2.png',
	'./test3.png'
];

function switchSlide(next) {
	if(next === true) {
		slide < 2 ? (setSlide(slide+1)) : (setSlide(0));
	} else {
		slide > 0 ? (setSlide(slide-1)) : (setSlide(2));
	}
}

return (
	<>
	<Header theme={appTheme} logos={appLogos}>
	</Header>
	<Banner img="./turbines.jpg">
	<h3>Cool text idc.</h3>
	<Button theme={buttonAttention} text="Contact"/>
	</Banner>
	<PageWrapper>
	<AppWindow>
	SLIDESHOW:
	<div style={{width: '100%', margin: 'auto', textAlign: 'center'}}>
		<img style={{height: '12rem', margin: 'auto'}} src={slides[slide]}/>
	</div>
	<div style={{textAlign: 'center'}}>
		<Button theme={buttonNormal} text="previous" onClick={() => switchSlide(false)}/>
		<Button theme={buttonAttention} text="next" onClick={() => switchSlide(true)}/>
	</div>
	</AppWindow>
	</PageWrapper>
	</>
);

}

export default App;
