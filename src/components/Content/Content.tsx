import { useState } from 'react';
import { Button } from '../Button';

export const Content = () => {
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState('');

  const handleClick = () => {
    setContador(prev => prev + 1);

    if (contador === 5) {
      setNome('Wacelys');
    }

    if (contador === 8) {
      setNome('Nicollas');
    }
  }

  return (
    <div>
      <p>Você clicou {contador} vezes!</p>
      {nome && <p>Parabéns, seu nome é {nome}</p>}
      <Button onClick={handleClick} />
    </div>
  );
}