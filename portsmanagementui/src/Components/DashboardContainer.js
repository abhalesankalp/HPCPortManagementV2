import React from 'react';

function DashboardContainer(props) {
    return (
        <div className="ShipsDashboardContainer">
            <div class="">
                <div class="font-new-account">
                    { props.Header }
                </div>
                <span class="font-weight-bold">{props.TopValue}</span>
                <div className="text-statistics-div">
                    <span class="text-success">{props.Increase}</span>
                    <span class="text-white">{props.IncreaseText}</span>
                </div>
            </div>
            <div className={props.IsGrapImage == "false" ? "DashboardLogo ShipsCountLogo" : "DashboardLogo RevenueLogo"} />
        </div>
    );
}


export default DashboardContainer;