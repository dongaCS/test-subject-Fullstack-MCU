import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";



function OneCharacter() {
    const { name } = useParams();
    const navigate = useNavigate();

    const [char, setChar] = useState({
        debutFilm: "",
        debutYear: 0
    });
    const [isEditing, setEdit] = useState(false);

    // loads character info on land
    useEffect(() => { 
        async function getByName() {
            try {
                const res = await fetch(`${process.env.REACT_APP_MCU_URL}/api/mcu/getCharacterByName/${name}`, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
                const data = await res.json();
                setChar(data.payload);
            } catch (err) {
                console.log(err)
            }
        }
        getByName();
    }, [name]);

    
    async function handleEditCharacter(e) {
        e.preventDefault();
        const newChar = {...char, 
            debutFilm: e.target.debutFilm.value || char.debutFilm, 
            debutYear: e.target.debutYear.value || char.debutYear
        }
        setChar(newChar);  // we have to create a new obj because if we pass char to JSON.stringify, its the old char still
        
        try {
            const res = await fetch(`${process.env.REACT_APP_MCU_URL}/api/mcu/updateCharacter/${char.name}`, {
                method: "put",
                body: JSON.stringify(newChar),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });
            const data = await res.json();
        } catch (err) {
            console.log(err)
        }
        setEdit(false);
    }

    async function handleDelete() {
        const res = await fetch(`${process.env.REACT_APP_MCU_URL}/api/mcu/deleteCharacter/${char.name}`, {
            method: "delete",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
        navigate(`/mcu`);
    }


    return(
        <form onSubmit={(e) => handleEditCharacter(e)}>
            <h1> {char.name} </h1> 
            <p> Debate film: {isEditing ? <input type="text" name="debutFilm" placeholder={char.debutFilm}></input> :  
            <Link to={`/movie/${char.debutFilm}`}><b>{char.debutFilm}</b></Link> } </p>
            <p> Release in: {isEditing ? <input type="text" name="debutYear" placeholder={char.debutYear}></input> :  <b>{char.debutYear}</b> } </p>
            <button type="button" onClick={() => setEdit(!isEditing)}> {isEditing ? "Unedit" : "Edit" } </button>  
            &nbsp;&nbsp;&nbsp;
            {isEditing ? <button type="submit"> Save </button> : <button type="button" onClick={() => handleDelete()}>Delete</button> }
            
        </form>
    )

}

export default OneCharacter;