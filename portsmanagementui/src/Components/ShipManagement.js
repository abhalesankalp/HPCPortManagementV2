import ShipMap from './ShipMap';
import ShipList from './ShipList';
import Header from './Header';
import Dashboard from './Dashboard';
function ShipManaement(props) {
    return (
            <div>
                    <Header name="Header" />
                    <Dashboard name="Dashboard" />
                    <ShipList name="ShipList" />
                    <ShipMap name="ShipMap" />
            </div>
          );
}

export default ShipManaement;