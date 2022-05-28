import React, {useState} from 'react';
import styled from 'styled-components';
import Button from './button';

function Expand(props) {

const [expand, setExpand] = useState(false);

return (<>{
	expand ?
	(
		<div>
		<Button text={props.title} onClick={() => setExpand(false)}/>
		<div>
		{props.content}
		</div>
		</div>
	) : (
		<div>
		<Button text={props.title} onClick={() => setExpand(true)}/>
		</div>
	)
	}</>);

}

export default Expand;
