const bpoints = {
	mobileBig: '',
	tablet: '720px',
	desktop: '1280px'
};

const device = {
	
	tablet: `(min-width: ${bpoints.tablet})`,
	desktop: `(min-width: ${bpoints.desktop}) and (orientation: landscape)`,
	maxPageWidth: '80rem'
};

export default device;
