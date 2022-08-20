import React from 'react'
import { PictureContext } from '../../context/SliderContext'
import { SliderOrder } from '../../context/SliderOrder'
import Timeline from '../Timeline'

class Slider extends React.Component{
    static contextType = PictureContext
    render(){
        const {photos, currentIndex} = this.context
        const {dispatch} = this.context

        return <SliderOrder.Consumer>
            {
                data => {
                    return <div className="slider">
                        <div className="form">
                            <label><b>Toggle Timeline?</b></label>
                            <select onChange={data.fn} value={data.list}>
                                <option>true</option>
                                <option>false</option>
                            </select>
                        </div>
                        <img 
                            src={require("../../"+photos[currentIndex])} 
                            className="main-photo"
                            alt='maim'
                        />
                        <div>
                            <button onClick={() =>dispatch({type:"GO_PREV"})}>prev</button>
                            <button onClick={() =>dispatch({type:"GO_NEXT"})}>next</button>
                        </div>
                        <Timeline/>
                    </div>
                }
            }
        </SliderOrder.Consumer>


        
    }
}
export default Slider