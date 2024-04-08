import Button from "@/components/ui/Button";
import styles from "./Users.module.scss";
import AdminLayout from "@/components/layouts/AdminLayout";

type Proptypes = {
  users: any;
};

const UserAdminView = (props: Proptypes) => {
  const { users } = props;

  return (
    <AdminLayout>
      <div className={styles.users}>
        <h1>User Management</h1>
        <table className={styles.users__table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Fullname</th>
              <th>Emain</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any, index: number) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td>
                  <div className={styles.users__table__action}>
                  <Button type="button">Update</Button>
                  <Button type="button">Delete</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default UserAdminView;
