import { useState } from 'react';
import { auth } from './config/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

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
      <form onSubmit={autenticarComFirebase}>
        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <label htmlFor="password">Senha:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={senha}
          onChange={(evento) => setSenha(evento.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}
