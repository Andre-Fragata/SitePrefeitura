import React, { useState } from 'react';
import MainLampada from './MainLampada.module.css'

function MainLampadaPage() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    //lógica para enviar os dados do formulário para o banco de dados
  }

  return (
    <main className={MainLampada.estilo}>
      <h1>Iluminação Pública</h1>
      <form className={MainLampada.form} id="lampada-form" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />

        <label htmlFor="endereco">Endereço:</label>
        <input type="text" id="endereco" name="endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />

        <label htmlFor="numero">Número:</label>
        <input type="text" id="numero" name="numero" value={numero} onChange={(e) => setNumero(e.target.value)} required />

        <label htmlFor="bairro">Bairro:</label>
        <input type="text" id="bairro" name="bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} required />

        <label htmlFor="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />

        <input type="submit" value="Enviar" />
      </form>
    </main>
  );
}

export default MainLampadaPage;
