import './App.css';
import Item from './Item';

function App() {
  return (
    <div className="App">
      <Item 
        id="47314fa1-ae56-4eae-80be-af6691145951" 
        name="tv" 
        price="219.99"
        description="A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself." 
        image_url="https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue" 
      />
      <Item 
        id="47314fa1-ae56-4eae-80be-af6691145951" 
        name="tv" 
        price="219.99"
        description="A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself." 
        image_url="https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue" 
      />
    </div>
  );
}

export default App;
