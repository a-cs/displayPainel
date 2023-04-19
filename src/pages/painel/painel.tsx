import React, { useState } from 'react';
import './index.css'
  
const Painel = () => {
	const [painel, setPainel] = useState("")

	function check() {
		setPainel(localStorage.getItem("painel") || "")
	}

	setInterval(() => {
		check();
	   }, 2000);

	return (
		<div className='painel'>
			<h1 className='title'>Senha:</h1>
			<h1 className='content'>{painel}</h1>
		</div>
	);
};
  
export default Painel;