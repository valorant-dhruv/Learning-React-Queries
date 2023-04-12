import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "react-query";

function QueryComponent() {}
function App() {


  //This is the useQuery function or we can say a hook which returns a data value in the form of resolved promise and isLoading is a state
  //Here we are creating our own promise but in real life applications we fetch the data from an api
  const { data, isLoading } = useQuery("dhruv", () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(100);
      }, 2000)
    );
  });

  console.log(data);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="App">
      <h1>Welcome to the react-query practice tutorials</h1>
      <h2>{data}</h2>
    </div>
  );
}

export default App;
