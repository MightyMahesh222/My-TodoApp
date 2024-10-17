import {MdDelete} from 'react-icons/md'
import './index.css'

const TodoPage = props => {
  const {todoList, deleting, check} = props
  const {todo, id, checkedTodo} = todoList
  console.log(checkedTodo)
  const deleteTodo = () => {
    deleting(id)
  }

  const checking = () => {
    check(id)
  }

  const className = checkedTodo ? 'lineThrough' : null
  return (
    <div className="todoRow">
      <input
        value={checkedTodo}
        type="checkbox"
        onChange={checking}
        className="checkBox"
        checked={checkedTodo}
      />
      <div className='rowedDiv'>
      <div className={`${className} todoDiv`}>
        <p className="todo">{todo}</p>
        
      </div>
      <div>
          <button className="deleteBtn" onClick={deleteTodo} type="button">
            <MdDelete />
          </button>
        </div>
        </div>
    </div>
  )
}

export default TodoPage
