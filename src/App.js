import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const data = [
    {
      id: 0,
      title: "item-0",
    },
    {
      id: 1,
      title: "item-1",
    },
    {
      id: 2,
      title: "item-2",
    },
    {
      id: 3,
      title: "item-3",
    },
    {
      id: 4,
      title: "item-4",
    },
  ];

  const [dataList, setDataList] = useState(data);

  const listItems = dataList.map(item => 
    <li key={item.id}>
      <img src={logo} className="App-logo" alt="logo" />
      {item.title}
    </li>
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>
          List of Items Rendered in React:
        </p>
        <ul>{listItems}</ul>
      </header>
    </div>
  );
}

export default App;
