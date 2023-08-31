import { useState } from 'react';
import { Button } from '../Common/Button/Button';
import styles from './TodoForm.module.scss';
/*
  props = {
    textSubmit : string
  }
*/
/*
cc1-Form Handle
- ใช้ FN ไปผูกกับ Event ชื่อ OnSubmit
- FN จะถูก Browser เรียนกใช้ (เมื่อไร?) โดยส่ง parameter  มา 1 ตัว (Event Object)
- วิธีแก้ ต้องกำหนด Type ของปุ่ม
  -Type = 'submit'
  -Type = 'botton'
*/
/*
props = {
  textSubmit : string
  setIsOpenForm : FN
}
*/
function TodoForm(props) {
  const [isError, setIsError] = useState(false);
  const [taskInput, setTaskInput] = useState('');

  const handleChangeInput = function (event) {
    if (isError) setIsError(false);
    if (event.target.value.trim() === '') setIsError(true);
    // console.log('user typing...', event.target.value);
    setTaskInput(event.target.value);
  }

  const handleSubmit = function (event) {
    //1. PreventDefalse
    event.preventDefault();
    //2. ต้องรู้ก่อนว่า User พิมพ์อะไร (อยู่ใน state : taskInput)

    //3. FormValidation
    // Case 1 : submit ได้
    // Case 2 : submit ไม่ได้ => แสดง Error

    if (taskInput.trim() === '') {
      console.log("Error");
      setIsError(true);
      return;
    }
    console.log('submit');
  };

  const handleCancle = function (event) {
    // event.preventDefault();
    // console.log('cancle');

    //correctName : setIsOpenForm(false)
    //inCorrectName : undefinded(false) => Broooooooom !!! Cocoaaaaa
    props.setIsOpenForm(false);
  };

  return (
    <form className={styles.todo__form__container} onSubmit={handleSubmit}>
      {/*	Body */}
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
          <Button
            text='Cancel'
            active={false}
            type='button'
            onClick={handleCancle}
          />
          <Button
            text={props.textSubmit}
            active={true}
            type='submit'
          />
          {/* <button type='botton' onClick={handleCancle}>POC</button> */}

        </div>
      </div>
    </form>
  );
}

export default TodoForm;