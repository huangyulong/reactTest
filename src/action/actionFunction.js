import * as lights from  './index' ;

export default function changeRed(){
    return { type:lights.CHANGE_RED }
}

export default function changeGreen(){
    return { type:lights.CHANGE_GREEN }
}

export default function changeYellow(){
    return { type:lights.CHANGE_YELLOW }
}
