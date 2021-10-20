import { useState } from "react";
import Alert from "./components/Alert";
import Darkmode from "./components/Darkmode";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  let c = document.querySelector("body");

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("Disable Dark Mode");
      showAlert("Dark Mode has been Enabled.", "success");
      document.title = "Dark Mode";
      c.style.backgroundColor = "black";
      c.style.color = "white";
    } else {
      setMode("light");
      setText("Enable Dark Mode");
      showAlert("Light Mode has been Enabled.", "success");
      document.title = "Light Mode";
      c.style.backgroundColor = "white";
      c.style.color = "black";
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(showAlert, 2500);
  };

  return (
    <div className="App">
      <Router>
        <Navbar home="prop Home" mode={mode} toggle={togglemode} />

        <Alert mode={mode} alert={alert} />

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/">
            <Textarea mode={mode} alert={showAlert} />
          </Route>
        </Switch>

        <Darkmode mode={mode} text={text} toggle={togglemode} />
      </Router>
    </div>
  );
}

export default App;
