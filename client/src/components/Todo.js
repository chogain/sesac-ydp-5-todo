import React, { useState } from 'react';
export default function Todo({ item, deleteItem, updateItem }) {
  const [todoItem, setTodoItem] = useState(item);
  const { id, title, done } = todoItem;
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteBtnClick = () => {
    deleteItem(todoItem);
  };

  // title 클릭시 readonly를 false로 변경
  const offReadOnlyMode = () => {
    //setReadOnly(false);
  };

  const editEventHandler = (e) => {
    const { title, ...rest } = todoItem;
    console.log(rest);

    setTodoItem({
      title: e.target.value,
      ...rest,
    });
  };

  const editKey = (e) => {
    if (e.key === 'Enter') {
      setReadOnly(true);
    }
  };

  // 포커스 인
  const onFocus = (e) => {
    console.log(e);
    setReadOnly(false);
  };

  // 포커스 아웃
  const onBlur = (e) => {
    console.log(e);
    setReadOnly(true);
  };

  const checkboxEventHandler = (e) => {
    const { done, ...rest } = todoItem;
    const updatedItem = {
      done: e.target.checked,
      ...rest,
    };

    setTodoItem(updatedItem);
    updateItem(updatedItem);
  };

  return (
    <div>
      <input
        type='checkbox'
        name={`todo${id}`}
        id={`todo${id}`}
        defaultChecked={done}
        onChange={checkboxEventHandler}
      ></input>
      {/* <label htmlFor={`todo${id}`}>{title}</label> */}
      <input
        type='text'
        value={todoItem.title}
        readOnly={readOnly}
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        onKeyDown={editKey}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <button onClick={onDeleteBtnClick}>삭제</button>
    </div>
  );
}
