import playIcon from "../assets/play.svg"

const Task = () => {
  return (
    <div className='card-task'>
        <p>Ir al gym</p>
        <div className='card-controls'>
        <input className='card-input' value={"12:23:41"}/>
        <button className='card-play'><img className='' src={playIcon} alt="playIcon"/></button>
        </div>
    </div>
  )
}

export default Task