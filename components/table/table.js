import styles from "./table.module.css";

const Table = ({ userData }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.tableheading}>id</th>
          <th className={styles.tableheading}>First Name</th>
          <th className={styles.tableheading}>Last Name</th>
          <th className={styles.tableheading}>Email</th>
          <th className={styles.tableheading}>Gender</th>
          <th className={styles.tableheading}>Income ($)</th>
          <th className={styles.tableheading}>City</th>
          <th className={styles.tableheading}>Car</th>
          <th className={styles.tableheading}>Quote</th>
          <th className={styles.tableheading}>Phone Price</th>
        </tr>
      </thead>
      <tbody>
        {userData?.map((user) => (
          <tr key={user.id}>
            <td className={styles.tablerow}>{user.id}</td>
            <td className={styles.tablerow}>{user.first_name}</td>
            <td className={styles.tablerow}>{user.last_name}</td>
            <td className={styles.tablerow}>{user.email}</td>
            <td className={styles.tablerow}>{user.gender}</td>
            <td className={styles.tablerow}>{user.income}</td>
            <td className={styles.tablerow}>{user.city}</td>
            <td className={styles.tablerow}>{user.car}</td>
            <td className={styles.tablerow}>{user.quote}</td>
            <td className={styles.tablerow}>{user.phone_price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
