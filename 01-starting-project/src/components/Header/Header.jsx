import ImageOne from '../assets/react-core-concepts';
import './Header.css'; 

const randomGen = ['amazing', 'brilliant', 'really cool'];
function genRand(max){
  return Math.floor(Math.random() * (max+1));
}

export default function Header() {
  const description = randomGen[genRand(max)];
  return (
    <header>
      <img src={ImageOne} alt = "Stylised atom" />
      <h1>React Essentials</h1>
      <p>
        {description} ipsum dolor sit amet consectetur adipisicing elit. Totam libero
        beatae commodi aut.
      </p>
    </header>
    
  );
}