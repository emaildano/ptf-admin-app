import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form/Index";
import { Container } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Form />
      </Container>
    </div>
  );
}

export default App;
