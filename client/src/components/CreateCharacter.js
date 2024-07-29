import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function CreateCharacter() {
    const navigate = useNavigate();

    const [newChar, setChar] = useState({
        name: "",
        debutFilm: "",
        debutYear: 0
    })

    async function postCharacter() {
        let temp = {};
        try{
            const res = await fetch(`${process.env.REACT_APP_MCU_URL}/api/mcu/createCharacter`, {
                method: "POST",
                body: JSON.stringify(newChar),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });
            const data = await res.json();
            temp = data;
        } catch (err) {
            console.log(err)
        }
        // clears out newChar for future use
        setChar({
            name: "",
            debutFilm: "",
            debutYear: 0
        })
        
        if(temp.payload.name) {
            navigate(`/mcu/${temp.payload.name}`)
        }
    }

    function handleCreateCharacter(e) {
        e.preventDefault();
        postCharacter();
        alert("try a different name")
        e.target.reset(); // clears out on site
    }

    return (
        <form onSubmit={(e => handleCreateCharacter(e))}>
            <input type="text" id="name" onChange={e => setChar({...newChar, name: e.target.value})} placeholder='name' required></input>
            <br />
            <input type="text" onChange={e => setChar({...newChar, debutFilm: e.target.value})} placeholder='debut film'></input>
            <br />
            <input type="number" onChange={e => setChar({...newChar, debutYear: e.target.value})} placeholder='debut year'></input>
            <br />
            <button type="submit">create</button>
        </form>
    )

}

export default CreateCharacter;