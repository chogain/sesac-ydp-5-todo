import { useState } from 'react';
import Todo from './components/Todo';
import './styles/App.css';
import AddTodo from './components/AddTodo';

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

  // todoItems 상태에 새로운 todo를 추가하는 일
  const addItem = (newItem) => {
    console.log(newItem); // { title: '저녁먹기' }

    // newItem id 키 값, done 키 값 넣기
    newItem.id = todoItems.length + 1;
    newItem.done = false;

    // todoItem 배열에 newItem을 추가
    setTodoItems([...todoItems, newItem]);
  };

  return (
    <div className='App'>
      <AddTodo addItem={addItem} />
      {todoItems.map((item) => (
        <Todo key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;
