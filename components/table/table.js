import styles from "./table.module.css";

const Table = ({ userData, apiSelection }) => {
  return (
    <>
      {userData.length > 0 && apiSelection === "5" && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableheading}>City</th>
              <th className={styles.tableheading}>Count</th>
              <th className={styles.tableheading}>Average Income ($)</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((city) => (
              <tr key={city._id} className={styles.tablerow}>
                <td className={styles.tablecell}>{city._id}</td>
                <td className={styles.tablecell}>{city.count}</td>
                <td className={styles.tablecell}>
                  {city.avg_income.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <table className={styles.table}>
        <thead>
          <tr className={styles.tablerow}>
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
            <tr key={user.id} className={styles.tablerow}>
              <td className={styles.tablecell}>{user.id}</td>
              <td className={styles.tablecell}>{user.first_name}</td>
              <td className={styles.tablecell}>{user.last_name}</td>
              <td className={styles.tablecell}>{user.email}</td>
              <td className={styles.tablecell}>{user.gender}</td>
              <td className={styles.tablecell}>{user.income}</td>
              <td className={styles.tablecell}>{user.city}</td>
              <td className={styles.tablecell}>{user.car}</td>
              <td className={styles.tablecell}>{user.quote}</td>
              <td className={styles.tablecell}>{user.phone_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
