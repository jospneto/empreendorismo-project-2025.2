//Primeiro componente 
interface ButtonProps {
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  return <button onClick={props.onClick}>Clique aqui</button>
}