import React from 'react';
import {
    Button
} from '@material-ui/core';
import { DeleteShip } from "../ReactAPI/ManageApi.js";


function DeletePopup(props) {
    
    function handleSubmit() { DeleteShip(props.shipId) };

    return (
        <div className="deletePopupDiv">
            <form onSubmit={() => handleSubmit()}>
                <div className="DeletePopup">
                    Are you sure you want to delete?
                </div>
                <div className="cancelButton">
                    <Button
                        className="m-2"
                        variant="outlined"
                        color="primary"
                        type="submit"
                        value="submit">
                        Delete
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default DeletePopup;
