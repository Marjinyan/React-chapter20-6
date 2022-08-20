export const SliderReducer = (state, action) => {
    const prevState = {...state}
    switch(action.type){
        case 'GO_NEXT':
            if (prevState.currentIndex<prevState.photos.length-1) {
                prevState.currentIndex++
            } else{
                prevState.currentIndex = 0
            }
            break;
        case 'GO_PREV':
            prevState.currentIndex--
            if (prevState.currentIndex<0)
                prevState.currentIndex = prevState.photos.length-1
            break;
        case "SET_ACTIVE_PICTURE":
            prevState.currentIndex = action.index
            break;
    }
    return {...prevState}
}

