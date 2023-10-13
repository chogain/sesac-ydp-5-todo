import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import './styles/App.css';
import AddTodo from './components/AddTodo';
import axios from 'axios';

function App() {
  // console.log(process.env.REACT_APP_DB_HOST);
  // const [todoItems, setTodoItems] = useState([
  //   {
  //     id: 1,
  //     title: 'my todo1',
  //     done: false,
  //   },
  //   {
  //     id: 2,
  //     title: 'my todo2',
  //     done: false,
  //   },
  //   {
  //     id: 3,
  //     title: 'my todo3',
  //     done: true,
  //   },
  //   {
  //     id: 4,
  //     title: '토이프로젝트 완성',
  //     done: false,
  //   },
  // ]);

  const [todoItems, setTodoItems] = useState([]);
  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get(`${process.env.REACT_APP_DB_HOST}/todos`);
      setTodoItems(res.data);
    };

    getTodos();
  }, []);

  // todoItems 상태에 새로운 todo를 추가하는 일
  const addItem = async (newItem) => {
    // console.log(newItem); // { title: '저녁먹기' }

    // // newItem id 키 값, done 키 값 넣기
    // newItem.id = todoItems.length + 1;
    // newItem.done = false;

    // // todoItems 배열에 새로운 todoItem 추가
    // setTodoItems([...todoItems, newItem]);

    const res = await axios.post(`${process.env.REACT_APP_DB_HOST}/todo}`, {
      newItem,
    });

    setTodoItems([...todoItems, res.data]);
  };

  // todoItems에서 todo 삭제
  const deleteItem = async (item) => {
    await axios.delete(`${process.env.REACT_APP_DB_HOST}/todo/${item.id}}`);

    const newTodo = todoItems.filter((rowData) => rowData.id !== item.id);
    setTodoItems(newTodo);
  };

  const updateItem = async (targetItem) => {
    await axios.patch(
      `${process.env.REACT_APP_DB_HOST}/todo/${item.id}}`,
      targetItem
    ); // axios.patch('url', {})
  };

  return (
    <div className='App'>
      <AddTodo addItem={addItem} />
      {/* todoItems 반복, props로 데이터(투두 객체)를 자식 컴포넌트에게 전달 */}
      <div>{todoItems.length} Todos</div>
      {todoItems.reverse().map((item) => {
        return (
          <Todo
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
        );
      })}
    </div>
  );
}
export default App;
