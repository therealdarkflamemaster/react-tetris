import {useCallback, useState} from "react";
import { randomTetromions } from "../tetromions";

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: {x:0,y:0},
        tetromion: randomTetromions().shape,
        collided: false,
    })

    const updatePlayerPos = ({x, y, collided}) => {
        setPlayer(prev =>({
            ...prev,
            pos: {x:(prev.pos.x += x), y:(prev.pos.y += y)},
            collided,
        }))
    }

    const resetPlayer = useCallback(() => {

    },[])


    return [player];





}
