import React from 'react';
import { Link } from 'react-router';

// Example without Link
// export default props => (
//   <li>
//     <a href={props.path}>
//       <i className={`fa fa-${props.icon}`}></i> {props.label}
//     </a>
//   </li>
// )
export default props => (
  <li>
    <Link to={props.path}>
      <i className={`fa fa-${props.icon}`}></i> {props.label}
    </Link>
    <a href={props.path}>
      <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
    </a>
  </li>
)
