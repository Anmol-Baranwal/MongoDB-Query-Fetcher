import styles from "./table.module.css";

const Table = ({ userData }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Income ($)</th>
          <th>City</th>
          <th>Car</th>
          <th>Quote</th>
          <th>Phone Price</th>
        </tr>
      </thead>
      <tbody>
        {userData?.map((user) => (
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.income}</td>
            <td>{user.city}</td>
            <td>{user.car}</td>
            <td>{user.quote}</td>
            <td>{user.phone_price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
