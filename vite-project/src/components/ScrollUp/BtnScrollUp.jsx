import React from 'react';
import './BtnScrollUp.scss'

function BtnScrollUp() {
	
	const handlerScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
	}
	
	return (
		<div className={'up'} onClick={handlerScrollUp}>&#9650;</div>
	);
}

export default BtnScrollUp;

