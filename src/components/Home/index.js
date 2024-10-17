import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import TodoPage from '../TodoPage'
import MyPage from '../MyPage'
import './index.css'

const HomePage = () => {
  const [userInput, setUserInput] = useState('')
  const getData = localStorage.getItem('storedTodo')
  const initialTodoList = getData ? JSON.parse(getData) : []
  const [todoList, setTodoList] = useState(initialTodoList)

  const changeInput = event => {
    setUserInput(event.target.value)
  }

  const checkTodo = id => {
    setTodoList(prev =>
      prev.map(every => {
        if (every.id === id) {
          return {...every, checkedTodo: !every.checkedTodo}
        }
        return every
      }),
    )
  }

  const userTodo = {
    id: uuidv4(),
    checkedTodo: false,
    todo: userInput.trim() !== '' ? userInput : 'Add a Todo',
  }

  const addToList = () => {
    setTodoList(prev => [...prev, userTodo])
    setUserInput('')
  }

  const deleteTheTodo = id => {
    setTodoList(todoList.filter(every => every.id !== id))
  }

  const saveLocalStorage = () => {
    localStorage.setItem('storedTodo', JSON.stringify(todoList))
  }

  return (
    <div className="mainDiv">
      <MyPage />
      <h1 className="heading">Simple Todo App</h1>
      <div className="rowDiv">
        <input
          type="text"
          placeholder="Enter todo"
          value={userInput}
          onChange={changeInput}
          className="input"
        />
        <div>
          <button className="add" type="button" onClick={addToList}>
            Add
          </button>
        </div>
      </div>
      <div className="allTodo">
        {todoList.length > 0
          ? todoList.map(every => (
              <TodoPage
                todoList={every}
                deleting={deleteTheTodo}
                key={every.id}
                check={checkTodo}
              />
            ))
          : null}
      </div>
      <div>
        <button className="saveBtn" type="button" onClick={saveLocalStorage}>
          Save
        </button>
      </div>
    </div>
  )
}

export default HomePage
