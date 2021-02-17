import React from 'react'
import './BackgroundColorChanger.css'

const BackgroundColorChanger = ({onInputChange1,onInputChange2, color1, color2,randomColor }) => {
    return (
        <div>
                <h4 className="dib bg-h4">Change Colors</h4>
                <input className="color1" type="color" value={color1} name="color1" onInput={onInputChange1}/>
                <input className="color1" type="color" value={color2} name="color2" onInput={onInputChange2}/>
                <a href="#" id= "random" className="f6 link dim ph3 pv2 mb2 dib white bg-purple" onClick={randomColor}>Random</a>
        </div>
    )
}
export default BackgroundColorChanger;