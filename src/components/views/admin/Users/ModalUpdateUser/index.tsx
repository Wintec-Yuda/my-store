import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import Select from "@/components/ui/Select";
import userServices from "@/services/user";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";

const ModalUpdateUser = (props: any) => {
  const { updatedUser, setUpdatedUser, setUsersData } = props;
  const [isLoading, setIsLoading] = useState(false);

  const session: any = useSession();

  const handleUpdateUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    const form: any = event.target as HTMLFormElement;
    const data = {
      role: form.role.value,
    };

    await userServices.updateUser(updatedUser.id, data, session.data?.accessToken);

    setIsLoading(false);
    setUpdatedUser({});
    const users = await userServices.getAllUsers();
    setUsersData(users.data.data);
  };

  return (
    <Modal onClose={() => setUpdatedUser({})}>
      <h1>Update User</h1>
      <form onSubmit={handleUpdateUser}>
        <Input type="text" label="Fullname" name="fullname" defaultValue={updatedUser.fullname} disabled />
        <Input type="text" label="Email" name="email" defaultValue={updatedUser.email} disabled />
        <Input type="text" label="Phone" name="phone" defaultValue={updatedUser.phone} disabled />
        <Select
          label="Role"
          name="role"
          defaultValue={updatedUser.role}
          options={[
            { value: "admin", label: "Admin" },
            { value: "member", label: "Member" },
          ]}
        />
        <Button type="submit">Update</Button>
      </form>
    </Modal>
  );
};

export default ModalUpdateUser;
