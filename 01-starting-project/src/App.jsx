import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx';

function App() {

function handleClick(selectedButton){
  tabContent = selectedButton;
console.log(selectedButton);
}


  return (
    <div>
      <Header />
      <section id = "core-concepts">
    <h2>Core Concepts</h2>
      <ul>
        <CoreConcept 
        title="Components" 
        description = "The Core UI building block"
        alt = "Some image"
        img = {componentsImg}
        />

        <CoreConcept 
        title = {CORE_CONCEPTS[0].title}
        description = {CORE_CONCEPTS[0].description}
        image = {CORE_CONCEPTS[0].image}
        />
        
        <CoreConcept 
        title = {CORE_CONCEPTS[1].title}
        description = {CORE_CONCEPTS[1].description}
        image = {CORE_CONCEPTS[1].image}
        />
        
        <CoreConcept 
        title = {CORE_CONCEPTS[2].title}
        description = {CORE_CONCEPTS[2].description}
        image = {CORE_CONCEPTS[2].image}
        />
      </ul>
      </section>

      <section id="examples">
        <TabButton onSelect={() => handleClick()}>Components</TabButton>
        <TabButton label = "TheLabelButton"></TabButton>
      </section>
      <main>
        {tabContent}
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}


export default App;