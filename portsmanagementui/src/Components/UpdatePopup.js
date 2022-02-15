import React, { useState } from 'react';
import {
    TextField,
    Button
} from '@material-ui/core';
import { UpdateShips } from "../ReactAPI/ManageApi.js";

function UpdatePopup(props) {
    const [id, setId] = useState(props.currentShip[0]?.shipId);
    const [name, setName] = useState(props.currentShip[0]?.shipName);
    const [length, setLength] = useState(props.currentShip[0]?.length);
    const [width, setWidth] = useState(props.currentShip[0]?.width);
    const [la, setLA] = useState(props.currentShip[0]?.la);
    const [lo, setLo] = useState(props.currentShip[0]?.lo);
    const [code, setcode] = useState(props.currentShip[0]?.code);
    const [isUpdateClicked, setIsUpdateClick] = useState(false);

    function IsCodePatternMatching(code)
    {
        let regex = /^[a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z]-\d\d\d\d-[a-zA-Z]\d$/gm;
        return regex.test(code);
    }

    function handleSubmit() {
        setIsUpdateClick(true);
        if (name && length && width && la && lo && code && IsCodePatternMatching(code))
        {
            var ship = {};
            if (id !== 0)
            {
                ship.ShipId = id;
            }
            ship.ShipName = name;
            ship.Length = parseInt(length);
            ship.Width = parseInt(width);
            ship.La = parseFloat(la);
            ship.Lo = parseFloat(lo);
            ship.code = code;
            console.log(ship);
            UpdateShips(ship);
            props.onClose();
            window.location.reload(false);
        }
    };
   
    return (
        <div className="updatePopupDiv">
            <form>
                <div className="formName formcss">
                    <label className="titlecss">Name</label><br />
                    <TextField id="standard-basic" className="shipName" type="text" value={name} onChange={event => setName(event.target.value)} label="Name" variant="standard" size="small" required error={!name && isUpdateClicked} /><br />
                    <TextField id="standard-basic" className="shipLocatoin" type="text" value={code} onChange={event => setcode(event.target.value)} label="Code" variant="standard" size="small" required error={(!code || !IsCodePatternMatching(code)) && isUpdateClicked} />
                </div>
                <div className="Dimension formcss">
                    <label className="titlecss">Dimension</label><br />
                    <TextField id="standard-basic" label="Length" value={length} type="number" onChange={event => setLength(event.target.value)} variant="standard" required error={ !length && isUpdateClicked} /><br/>
                    <TextField id="standard-basic" label="Width" value={width} type="number" onChange={event => setWidth(event.target.value)} variant="standard" required error={ !width && isUpdateClicked} />
                </div>
                <div className="Location formcss">
                    <label className="titlecss">Location</label><br />
                    <TextField id="standard-basic" label="LA" value={la} type="number" onChange={event => setLA(event.target.value)} aria-required variant="standard" required error={!la && isUpdateClicked} /><br/>
                    <TextField id="standard-basic" label="Lo" value={lo} type="number" onChange={event => setLo(event.target.value)} variant="standard" required error={ !lo && isUpdateClicked} />
                </div>
                <div className="submitDiv">
                    <Button
                        className="m-2"
                        variant="outlined"
                        color="primary"
                        onClick={handleSubmit}
                        value="submit">
                        Save
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default UpdatePopup
