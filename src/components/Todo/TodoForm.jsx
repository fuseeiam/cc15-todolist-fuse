import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button } from '../Common/Button/Button';
import styles from './TodoForm.module.scss';
/*
  props = {
    textSubmit : string
  }
*/
/*
CC1- Form Handle
- ใช้ FN ไปผูกกับ Event ชื่อ onSubmit
- FN จะถูก Browserเรียกใช้ (เมื่อไหร่ ?) โดยส่ง parameter มา 1 ตัว (event Object)
- โดย default ทุกปุ่มใน <form> จะทำหน้าที่ submit
- วิธีแก้ ต้องกำหนด type ของปุ่ม
  - type="submit" :  <button type='button'>1</button>
  - type="button" :  <button type='submit'>2</button>
*/

/* 
props = {
  textSubmit : string
  setIsOpenForm : FN
}
*/
function TodoForm(props) {
  const [isError, setIsError] = useState(false);
  const [taskInput, setTaskInput] = useState(props.oldTodo?.task || '');

  const handleChangeInput = function (event) {
    if (isError) setIsError(false);
    setTaskInput(event.target.value);
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    // START LOGIC : For CreateTODO
    // FormValidation
    if (taskInput.trim() === '') {
      console.log('Error');
      setIsError(true);
      return;
    }
    if (props.addTodo) props.addTodo(taskInput);
    else if (props.editTodo && props.oldTodo) {
      props.editTodo(props.oldTodo.id, { task: taskInput });
    }

    const newTodo = {
      id: nanoid(),
      task: taskInput,
      status: false,
      due_date: '2023-01-09',
    };
    // const newTodoLists = [newTodo, ...props.data];
    // END LOGIC : For CreateTODO

    // Update State
    props.setTodo((prev) => [newTodo, ...prev]);

    //send taskInput to addTodo
    props.setIsOpenForm(false);
  };

  const handleCancel = function () {
    props.setIsOpenForm(false);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.todo__form__container}>
      <input
        className={styles.todo__form__input}
        placeholder='Task Name'
        value={taskInput}
        onChange={handleChangeInput}
      />
      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        {isError ? <p className={styles.todo__error}>Title is required</p> : null}
        <div className={styles.todo__form__buttons}>
          <Button text='Cancel' active={false} type='button' onClick={handleCancel} />
          <Button text={props.textSubmit} active={true} type='submit' />
        </div>
      </div>
    </form>
  );
}

export default TodoForm;