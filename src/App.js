import logo from './logo.svg';
import './App.css';
import AddVehicle from './components/AddVehicle';
import SearchVehicle from './components/SearchVehicle';
import DeleteVehicle from './components/DeleteVehicle';
import ViewAllVehicle from './components/ViewAllVehicle';

function App() {
  return (
    <div>
      <AddVehicle/>
  <SearchVehicle/>
  <DeleteVehicle/>
  <ViewAllVehicle/>
    </div>
  );
}

export default App;
