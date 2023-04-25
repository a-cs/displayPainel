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

	function increaseBy(x: number) {
		let n = Number(painel) + x
		setPainel(String(n))
		localStorage.setItem("painel",String(n))
	}

	setInterval(() => {
		check();
	   }, 100);
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
				<button type='button' onClick={() => increaseBy(1)}>Próximo</button>
				<button type='button' onClick={() => increaseBy(-1)}>Anterior</button>
			</form>
			
		</div>
  );
};

export default Home;