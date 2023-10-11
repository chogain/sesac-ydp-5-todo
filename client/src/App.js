import { useState } from 'react';
import Todo from './components/Todo';
import './styles/App.css';

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: 'my todo1',
      done: false,
    },
    {
      id: 2,
      title: 'my todo2',
      done: false,
    },
    {
      id: 3,
      title: 'my todo3',
      done: true,
    },
    {
      id: 4,
      title: '토이프로젝트 완성',
      done: false,
    },
  ]);

  return (
    <div className='App'>
      {todoItems.map((item) => (
        <Todo key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;
