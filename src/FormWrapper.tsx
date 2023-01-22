import { FormWrapperProps } from "./Models";

export const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <div>
      <h2 className="title">{title}</h2>
      <div className="form_wrapper">{children}</div>
    </div>
  );
};
