import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <div className="App container">
        <h1 className="text-primary">Olá mundo!</h1>
        <DataTable/>
      </div>
      <Footer/>
    </Fragment>
  );
}

export default App;
