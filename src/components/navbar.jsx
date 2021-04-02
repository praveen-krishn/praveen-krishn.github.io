import React from 'react';

//stateless functional component
// as navbar do not have any state or props in this

//destructuing Objects
const NavBar =({totalCounters, sumCounters}) => {
        return ( 
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand" >
                    My Cart 
                <span className="badge badge-pill badge-secondary mx-2"> uniq:{totalCounters}</span>
                <span className="badge badge-pill badge-secondary mx-2"> sum: {sumCounters}</span>
                </span>
            </nav>
         );
    
    }
    

// const NavBar =(props) => {
//     return ( 
//         <nav className="navbar navbar-light bg-light">
//             <span className="navbar-brand" >
//                 My Cart 
//             <span className="badge badge-pill badge-secondary mx-2"> uniq:{props.totalCounters}</span>
//             <span className="badge badge-pill badge-secondary mx-2"> sum: {props.sumCounters}</span>
//             </span>
//         </nav>
//      );

// }

// class NavBar extends Component {
//     render() { 
//         return ( 
//             <nav className="navbar navbar-light bg-light">
//                 <span className="navbar-brand" >
//                     My Cart 
//                 <span className="badge badge-pill badge-secondary mx-2"> total:{this.props.totalCounters}</span>
//                 <span className="badge badge-pill badge-secondary mx-2"> unique: {this.props.sumCounters}</span>
//                 </span>
//             </nav>
//          );
//     }
// }
 
export default NavBar