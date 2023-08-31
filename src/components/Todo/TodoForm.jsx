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
  const [isError, setIsError] = useState(true);

  const handleSubmit = function (event) {
    event.preventDefault();
    console.log('submit');
  };

  const handleCancle = function (event) {
    // event.preventDefault();
    console.log('cancle');

    //correctName : setIsOpenForm(false)
    //inCorrectName : undefinded(false) => Broooooooom !!! 
    props.setIsOpenForm(false);
  };

  return (
    <form className={styles.todo__form__container} onSubmit={handleSubmit}>
      {/*	Body */}
      <input className={styles.todo__form__input} placeholder='Task Name' />

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