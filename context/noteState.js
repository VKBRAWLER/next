import { useState, useEffect} from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const s1 = {
        "name": "varun",
        "class": "A",
    }
    const [state, setState] = useState(s1);
    const update = () => {
            setState({
                "name": "larry",
                "class": "B",
            })
    }
    useEffect(() => {
        update();
      }, []);
    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;