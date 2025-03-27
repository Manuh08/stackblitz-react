import { useState } from 'react';
import { auth } from './config/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './App.css/style.css'

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const autenticarComFirebase = async (evento) => {
    evento.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      alert('Logado com sucesso!');
    } catch (err) {
      alert('Erro no processo ', err);
    }
  };

  return (
    <main>
      <div className='Container'>
        <div className='form'>
          <h1>Login</h1>
        </div>
      <form onSubmit={autenticarComFirebase}>
        <div className='email'>
        <label htmlFor="email">E-mail:</label>
        <div className='grupo box'>
          <div className='caixa-email'>
        <input
          id="email"
          name="email"
          placeholder='manuzinha@gmail.com'
          type="email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        </div>
        </div>
        <label htmlFor="password">Senha:</label>
        <div className='caixa-senha'>
        <input
          id="password"
          name="password"
          type="password"
          value={senha}
          onChange={(evento) => setSenha(evento.target.value)}
        />
        </div>
        </div>
        <div className='Login'>
        <button type="submit">Entrar</button>
        </div>

      </form>
      </div>

    </main>
  );
}
