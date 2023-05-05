import React from 'react';
import '../css/Display.css';

//We are defining the component as a conts that the display value does not change
//This structure is used for simpler components that only have a presentation and no logic or functions.
const Display = ({ input }) => (
	<div className='input'>
		{input}
	</div>

);

export default Display;