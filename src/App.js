import { Provider } from 'react-redux';
import './App.css';

import Body from './Components/Body';
import Head from './Components/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainComponent from './Components/MainComponent';
import WatchPage from './Components/WatchPage';
import Demo from './Components/Demo';


const appRouter = createBrowserRouter([
  {
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainComponent/>
    },
    {
      path:"/watch",
      element:<WatchPage/>
    },
    {
      path:"/demo",
      element:<Demo/>
    },
  ],
},
]);

function App() {
  return (
    <Provider store={store}>
    <div >
       <Head/>
       <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
