import Task from "./Task"

const CardDay = () => {
  return (
    <div className='card-day'>
        <h3 className='card-header'>Today</h3>
        <div className='card-tasks'>
            <Task/>
        </div>
    </div>
  )
}

export default CardDay