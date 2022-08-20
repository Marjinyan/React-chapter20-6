import React, { useContext } from 'react'
import { PictureContext } from '../../context/SliderContext'
import { SliderOrder } from '../../context/SliderOrder'

function Timeline(){
    const context = useContext(PictureContext)
    const data = useContext(SliderOrder)
    const {photos, currentIndex, dispatch} = context
    let cssClass = data.list ? 'photo-list' : 'photo-circle'
    return <div className={cssClass}>
        {
            photos.map((elm, index) => {
                let activeImg=index === currentIndex ? "active" : null
                return <img
                    alt=""
                    className={activeImg}
                    key={index}
                    src={require('../../'+elm)}
                    onClick={() => dispatch({type:"SET_ACTIVE_PICTURE",index})
                }
                />
            })
        }
    </div>
    }
export default Timeline