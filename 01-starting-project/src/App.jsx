
import ImageOne from './assets/react-core-concepts.png';
const randomGen = ['amazing', 'brilliant', 'really cool'];

function genRand(max){
  return Math.floor(Math.random() * (max+1));
}

function Header() {
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

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}


export default App;