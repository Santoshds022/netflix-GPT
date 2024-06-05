import './App.css';
import Body from './components/Body';
import {Provider} from "react-redux"
import appStor from './utils/appStor';



function App() {
  return (
    <Provider store = {appStor} >
      <Body />
    </Provider>
    
   
    
  );
}

export default App;
