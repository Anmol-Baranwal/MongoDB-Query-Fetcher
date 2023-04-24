import styles from "./table.module.css";
const Table = (props) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Phone</th>
          <th>Car</th>
          <th>Quote</th>
          <th>Income ($)</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {props.userData &&
          props.userData.map((user) => (
            <tr key={user._id}>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>
              <td>{user.car}</td>
              <td>{user.quote}</td>
              <td>{user.income}</td>
              <td>{user.city}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;

// const Table = ({ userData, fieldsToShow }) => {
//   return (
//     <table className={styles.table}>
//       <thead>
//         <tr>
//           {fieldsToShow.map((field) => (
//             <th key={field}>{field}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {userData &&
//           userData.map((user) => (
//             <tr key={user._id}>
//               {fieldsToShow.map((field) => (
//                 <td key={`${user._id}-${field}`}>{user[field]}</td>
//               ))}
//             </tr>
//           ))}
//       </tbody>
//     </table>
//   );
// };
