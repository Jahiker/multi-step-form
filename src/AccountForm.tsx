import { FormWrapper } from "./FormWrapper";
import { AccountFormProps } from "./Models";

export const AccountForm = ({
  email,
  password,
  updateFields,
}: AccountFormProps) => {
  return (
    <FormWrapper title="Account creation">
      <label>Email</label>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
};
