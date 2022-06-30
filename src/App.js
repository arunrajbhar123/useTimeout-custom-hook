
import "./App.css";
import useTimeout from "./TimeOutHook/useTimeout.jsx";


function App() {
  const { ready } = useTimeout(5000);

  return (
    <div className="App">
      <h1>useTimeout custom hook 5 second</h1>
      <p>{ready ? "Ready" : "Not-Ready"}</p>
    </div>
  );
}

export default App;
