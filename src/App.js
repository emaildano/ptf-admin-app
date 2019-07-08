import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UpdateForm from "./components/Form/Index";
import { Container } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <UpdateForm />
      </Container>
    </div>
  );
}

export default App;
