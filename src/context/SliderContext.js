import React, { useReducer } from 'react'
import { SliderReducer } from '../reducers/SliderReducer'
export const PictureContext = React.createContext()

function PictureContextProvider(props){
    const data = {
        photos:[
            "images/1.jpeg",
            "images/2.jpeg",
            "images/3.jpeg",
            "images/4.jpeg",
            "images/5.jpeg",
            "images/6.jpeg",
            "images/7.jpeg",
            "images/8.jpeg",
            "images/9.jpeg",
            "images/10.jpeg",
        ],
        currentIndex:0
    }
    const [state, dispatch] = useReducer(SliderReducer, data)

    return <PictureContext.Provider value={{...state, dispatch}}>
        {props.children}
    </PictureContext.Provider>
}

export default PictureContextProvider