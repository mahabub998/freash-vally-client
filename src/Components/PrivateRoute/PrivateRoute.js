import React from 'react';
import { useContext } from 'react';
//  import { useContext } from 'react';
 import { Redirect, Route } from 'react-router-dom';
 import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    return (
        <div>
             <Route
      {...rest}
      render={({ location }) =>
      loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivateRoute;



// import React from 'react';
// import { useContext } from 'react';
// import { Redirect, Route } from 'react-router-dom';
// import { UserContext } from '../../App';

// const privateRoute = ({ children, ...rest }) => {
//     const [loggedInUser,setLoggedInUser] = useContext(UserContext)
//     return (
        
//              <Route
//       {...rest}
//       render={({ location }) =>
//       loggedInUser.email ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
       
//     );
// };

// export default privateRoute;