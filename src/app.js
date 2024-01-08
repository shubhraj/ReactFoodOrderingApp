import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import BodyComponent from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";


const Grocery = lazy(() => import("./components/Grocery"));

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "this is custom heading"
);

//JSX is HTML like syntax : Babel transpiles in to react.createElement
// const jsxHeading = (
//   <h1 className="head" tabIndex="1" aria-hidden="true" srcSet="test">
//     This is JSX Heading
//   </h1>
// );

// const Title = () => {
//     return <h2>This is title Components</h2>
// }
// //React Component
// // Class Based Components
// // Functional Components

// const HeadingComponent = () => 
// <div> 
//     <h1> this is Heading Component </h1>
//     <Title/> 
// </div>

// // this nesting of components is called as component Composition


// const RestaurantCard = (props) => { 
//   const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} =  props?.resData?.info;

//   return(
//     <div className="res-card">
//       <img alt="res-logo" 
//       className="res-logo"
//       src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} height={200} width={200}></img>
//       <h3>{name}</h3>
//       <h4>{cuisines.join(', ')}</h4>
//       <h4>{avgRating} Stars</h4>
//       <h4>{costForTwo}</h4>
//     </div>
//   )
// }


const AppLayout = () => {

  //athentication code 
  const [userName, setUserName] = useState(null);

  useEffect(()=> {
      //make API Call to get user Info
      //lets use some dummy response
      const data = {
        name: "Shubham" 
      };

      setUserName(data.name);
    },[]);


  //outlet works as a placeholder and it get replaced by the components linked to that route
  return (
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
      <div className="app">  
          <Header />
          <Outlet /> 
          <Footer /> 
      </div>
    </UserContext.Provider>
)
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyComponent />
      
      },
      {
        path: "/about",
        element: <About />
      
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading ...</h1>}><Grocery /></Suspense>
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />
      },
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <RouterProvider router={appRouter} />
);
