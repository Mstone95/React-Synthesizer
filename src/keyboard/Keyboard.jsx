import React, { useEffect, useState } from 'react';
import * as Tone from 'tone'



const synth = new Tone.PolySynth(Tone.Synth, 2).toDestination();
const now = Tone.now()

const Keyboard = () => {

    //useState returns an array with two items inside. First is the current state, second is the function to change it. 
    const [key, setKey] = useState("")
    const [octave, setOctave] = useState(4)
    useEffect(() => {
        console.log("octave", octave)
    })

    const detectKeyDown = (e) => {
        e.preventDefault()
        const newKey = e.key
        setKey(e.key)
        console.log(newKey)
        // w e   t y u   o p   
        //a s d f g h j k l ; ' 
        if (newKey === "a") {
            synth.triggerAttackRelease("C" + octave, "8n",);
        }
        else if (newKey === "w") {
            synth.triggerAttackRelease("C#" + octave, "8n",);
        }
        else if (newKey === "s") {
            synth.triggerAttackRelease("D" + octave, "8n",);
        }
        else if (newKey === "e") {
            synth.triggerAttackRelease("D#" + octave, "8n");
        }
        else if (newKey === "d") {
            synth.triggerAttackRelease("E" + octave, "8n");
        }
        else if (newKey === "f") {
            synth.triggerAttackRelease("F" + octave, "8n");
        }
        else if (newKey === "t") {
            synth.triggerAttackRelease("F#" + octave, "8n");
        }
        else if (newKey === "g") {
            synth.triggerAttackRelease("G" + octave, "8n");
        }
        else if (newKey === "y") {
            synth.triggerAttackRelease("G#" + octave, "8n");
        }
        else if (newKey === "h") {
            synth.triggerAttackRelease("A" + octave, "8n");
        }
        else if (newKey === "u") {
            synth.triggerAttackRelease("A#" + octave, "8n");
        }
        else if (newKey === "j") {
            synth.triggerAttackRelease("B" + octave, "8n");
        }
        if (newKey === "k") {
            synth.triggerAttackRelease("C" + (octave + 1), "8n");
        }
        else if (newKey === "o") {
            synth.triggerAttackRelease("C#" + (octave + 1), "8n");
        }
        else if (newKey === "l") {
            synth.triggerAttackRelease("D" + (octave + 1), "8n");
        }
        else if (newKey === "p") {
            synth.triggerAttackRelease("D#" + (octave + 1), "8n");
        }
        else if (newKey === ";") {
            synth.triggerAttackRelease("E" + (octave + 1), "8n");
        }
        else if (newKey === "'") {
            synth.triggerAttackRelease("F" + (octave + 1), "8n");
        }
        else if (newKey === "ArrowLeft") {
            setOctave(Math.max(octave - 1, 0))
        }
        else if (newKey === "ArrowRight") {
            setOctave(Math.min(9, octave + 1))
        }

    }

    // useEffect(() => {
    //     document.addEventListener('keydown', detectKeyDown, true)
    // }

    // on every time octave/secondOctave changes, 

    return (
        <div
            onKeyDown={detectKeyDown}
            tabIndex={0}
            style={{
                border: "2px solid blue",
                height: "95vh",
                backgroundColor: (key.toUpperCase() === "A") ? "blue" : "red"
            }}
        >
            <p>Please click to start playing</p>
            <p>Key pressed is: {key.toString()}</p>
            <p>Octave is: {octave}</p>
            <div>
                <div></div>
            </div>
            {/* Passing the key pressed to the handler function */}

        </div>
    );
};

export default Keyboard;
