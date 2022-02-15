import React, { Fragment, useEffect } from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DialogContentText from '@material-ui/core/DialogContentText';
import UpdatePopup from './UpdatePopup';
import DeletePopup from './DeletePopup';
import axios from 'axios';
import {
    Card,
    CardContent,
    Tooltip,
    Dialog,
    DialogTitle,
} from '@material-ui/core';
import { useState } from 'react';


function SimpleDialog(props) {
    const { onClose, selectedValue, open, dialogTypeID, currentShipID, currentShip } = props;
    const handleClose = () => {
        onClose(selectedValue);
    };
    var popupHeader = "A";
    switch (dialogTypeID) {
        case 1: popupHeader = "Create Ship"; break;
        case 2: popupHeader = "Update Ship"; break;
        case 3: popupHeader = ""; break;
    }


    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
            open={open}>
            <DialogTitle id="simple-dialog-title">
                <div className="cancelPopup" onClick={handleClose}>
                    <CancelTwoToneIcon />
                </div>
                {popupHeader}
            </DialogTitle>
            <DialogContentText>
                {
                    dialogTypeID != 3 ? <UpdatePopup dialogTypeID={dialogTypeID} currentShip={currentShip} shipId={currentShipID} onClose={handleClose} /> : <DeletePopup shipId={currentShipID} />
                }
            </DialogContentText>
        </Dialog>
    );
}

function ShipList(props) {

    const [open, setOpen] = React.useState(false);
    const [dialogType, setdialogType] = React.useState(0);
    const [currentShipID, setcurrentShipID] = React.useState(0);
    const [currentShip, setcurrentShip] = React.useState(0);
    const [ships, setShips] = useState([]);
    const serverURL = process.env.REACT_APP_Env == "prod" ? process.env.REACT_APP_SERVER_API_URL : process.env.REACT_APP_SERVER_API_URL_Dev;

    useEffect(() => {
        axios.get(`${serverURL}/Ship/Get`)
            .then(res => {
                var result = res.data;
                setShips(result);
            })
    }, []);

    const handleClose = value => {
        setOpen(false);
    };

    const handleClickOpen = (typeID, shipID, ships) => {
        setdialogType(typeID);
        setcurrentShipID(shipID);
        var ship = ships.filter(x => x.shipId == shipID);
        setcurrentShip(ship);
        console.log(currentShip);
        setOpen(true);
    };

    return (
        <Fragment>
            <Card className="card-box mb-4">
                <div className="card-header pr-2">
                    Ships status
                    <Tooltip title="add ship details">
                        <span className="circleIcon"> <AddCircleOutlineIcon onClick={() => handleClickOpen(1, -1, ships)} /></span>
                    </Tooltip>
                </div>
                <CardContent className="p-3">
                    <div className="table-responsive">
                        <table className="table table-borderless table-hover text-nowrap mb-0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th className="text-Name">Name</th>
                                    <th className="text-Progress">Dimenstions</th>
                                    <th className="text-Location">Current Location</th>
                                    <th className="text-Action">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {ships.map((item, index) => (
                                    <tr key={item.shipId}>
                                        <td className="vertical-align">{item.shipId}</td>
                                        <td>
                                            <div>
                                                <div
                                                    onClick={e => e.preventDefault()}
                                                    className="font-weight-bold-table text-black"
                                                    title="...">
                                                    {item.shipName}
                                                </div>
                                                <div className="text-black-50 d-block">
                                                    {item.code}
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <div className="text-dimension">
                                                    L: {item.length} Mtrs
                                                </div>
                                                <div className="text-dimension">
                                                    W: {item.width} Mtrs
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <div className="text-coordinates">
                                                    LA : {item.la}
                                                </div>
                                                <div className="text-coordinates">
                                                    LO : {item.lo}
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="ActionIcons">
                                                <span>
                                                    <Tooltip title="Edit ship details">
                                                        <ModeEditIcon onClick={() => handleClickOpen(2, item.shipId, ships)} />
                                                    </Tooltip>
                                                </span>
                                                <span>
                                                    <Tooltip title="delete ship details">
                                                        <DeleteIcon onClick={() => handleClickOpen(3, item.shipId, ships)} />
                                                    </Tooltip>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
            <SimpleDialog
                open={open}
                onClose={handleClose}
                dialogTypeID={dialogType}
                currentShipID={currentShipID}
                handleClose={handleClose}
                currentShip={currentShip}
            />
        </Fragment>
    );
}

export default ShipList;