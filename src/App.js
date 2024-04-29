import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Details from './pages/app/details/Details';
import Learn from './pages/app/learn/Learn';
import Chapter from './pages/app/chapter/Chapter';

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <Nav />,
      children: [
        { path: '', element: <Hero /> },
        { path: '/courses', 
        children:[
          {
            index:true,element:<Courses/>

          },
          {
            path:':courseId',
            element:<Details/>
          }
        ]
      
      },
      {
        path:'/learn/:courseId',
        element:<Learn/>,
        children:[
          {
            path:'chapter/:chapterId',
            element:<Chapter/>
          }
        ]
      }
      ]

    }])
  return (
   <RouterProvider router={browserRouter}/>
  );
}

export default App;