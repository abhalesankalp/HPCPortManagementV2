import React from 'react';
import DashboardContainer from './DashboardContainer';
function Dashboard(props) {
    return (
        <div className="Dashboard">
            <DashboardContainer Increase="20%" IncreaseText="increase this month" TopValue="420" Header="New Ships" IsGrapImage="false"/>
            <DashboardContainer Increase="20%" IncreaseText="increase this month" TopValue="$400" Header="Sales" IsGrapImage="true"/>
            <DashboardContainer Increase="20%" IncreaseText="increase this month" TopValue="$800" Header="Revenues" IsGrapImage="false"/>
        </div>
    );
}

export default Dashboard;