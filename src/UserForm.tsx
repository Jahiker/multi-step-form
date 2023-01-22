import { FormWrapper } from "./FormWrapper";
import { UserFormProps } from "./Models";

export const UserForm = ({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) => {
  return (
    <FormWrapper title="User">
      <label>First Name</label>
      <input
        type="text"
        autoFocus
        required
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        type="text"
        required
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label>Age</label>
      <input
        type="number"
        min={1}
        required
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  );
};
