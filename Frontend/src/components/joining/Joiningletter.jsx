import './joining.css'

export default function Joiningletter(props) {
  return (
    <div className='joiningContainer'>
      <div className="joiningWrapper">
        <h3 className="title">Joining Letter</h3>
        <div className="details">
            <h5><b>To;</b></h5>
            <h5>Uma</h5>
            <>{new Date().toLocaleDateString()}</>
        </div>

      </div>
    </div>
  )
}
