import React, { Component } from "react";
import { HousesList } from './components/HousesList';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <HousesList />
      </div>
    )
  }
}

// export default function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

export default App;