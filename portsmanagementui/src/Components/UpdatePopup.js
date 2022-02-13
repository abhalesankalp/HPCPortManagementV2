import React, { useState } from 'react';
import {
    TextField,
    Tooltip,
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
    const [location, setLocation] = useState(props.currentShip[0]?.location);
    const [isUpdateClicked, setIsUPdateClick] = useState(false);
    function handleSubmit() {
        setIsUPdateClick(true);
        if (name !== "" && length !== "" && width !== "" && la !== "" && lo !== "")
        {
            var ship = {};
            if (id != 0)
            {
                ship.ShipId = id;
            }
            ship.ShipName = name;
            ship.Length = parseInt(length);
            ship.Width = parseInt(width);
            ship.La = parseFloat(la);
            ship.Lo = parseFloat(lo);
            ship.location = location;
            console.log(ship);
            UpdateShips(ship);
            props.onClose();
        }
        window.location.reload(false);
    };
   
    return (
        <div className="updatePopupDiv">
            <form>
                <div className="formName formcss">
                    <label className="titlecss">Name</label><br />
                    <TextField id="standard-basic" className="shipName" value={name} onChange={event => setName(event.target.value)} label="Name" variant="standard" size="small" required error={name === "" && isUpdateClicked} /><br />
                    <TextField id="standard-basic" className="shipLocatoin" value={location} onChange={event => setLocation(event.target.value)} label="Location" variant="standard" size="small" required error={location === "" && isUpdateClicked} />
                </div>
                <div className="Dimension formcss">
                    <label className="titlecss">Dimension</label><br />
                    <TextField id="standard-basic" label="Length" value={length} onChange={event => setLength(event.target.value)} variant="standard" required error={length === "" && isUpdateClicked} /><br/>
                    <TextField id="standard-basic" label="Width" value={width} onChange={event => setWidth(event.target.value)} variant="standard" required error={width === "" && isUpdateClicked} />
                </div>
                <div className="Location formcss">
                    <label className="titlecss">Location</label><br />
                    <TextField id="standard-basic" label="LA" value={la} onChange={event => setLA(event.target.value)} aria-required variant="standard" required error={la === "" && isUpdateClicked} /><br/>
                    <TextField id="standard-basic" label="Lo" value={lo} onChange={event => setLo(event.target.value)} variant="standard" required error={lo === "" && isUpdateClicked} />
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
