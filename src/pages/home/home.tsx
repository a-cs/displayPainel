import React, { useState } from 'react';
import './index.css'

const Home = () => {
	const [value, setValue] = useState("")
	const [painel, setPainel] = useState("")

	function check() {
		setPainel(localStorage.getItem("painel") || "")
	}

	function handleChange(event: any){
		setValue(event.target.value)
	}

	function handleSubmit(event: any){
		event.preventDefault()
		localStorage.setItem("painel",value)
		setValue("")
	}

	setInterval(() => {
		check();
	   }, 2000);
	return (
		<div className='home'>
			<div className="wrapper">
				<h1 className='title'>Senha Atual:</h1>
				<h1 className='content'>{painel}</h1>
			</div>
			<form className="wrapper" onSubmit={handleSubmit}>
				<label className='title'>Nova senha:</label>
				<input className='input' type="number" value={value} onChange={handleChange} />
				<button type='submit'>Atualizar</button>
			</form>
			
		</div>
  );
};
  
export default Home;