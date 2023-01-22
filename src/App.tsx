import { useState, FormEvent } from "react";
import { useMultistepForm } from "./useMultistepForm";
import { UserForm } from "./UserForm";
import { AddressForm } from "./AddressForm";
import { AccountForm } from "./AccountForm";
import { FormData } from "./Models";

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const [Sending, setSending] = useState(false);

  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const {
    setCurrentStepIndex,
    currentStep,
    currentStepIndex,
    steps,
    next,
    back,
    isFirstStep,
    isLastSetp,
  } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
  ]);

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target;
    if (!isLastSetp) return next();
    setSending(true);
    setTimeout(() => {
      alert("Information has been sent!");
      setSending(false);
      setCurrentStepIndex(0);
      setData(INITIAL_DATA);
    }, 2000);
  };

  return (
    <div className="App">
      {Sending && <h2 className="sending">Sending...</h2>}
      {!Sending && (
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <div className="step_indicator">{`${currentStepIndex + 1} / ${
            steps.length
          }`}</div>
          {currentStep}
          <div className="buttons_container">
            {!isFirstStep && (
              <button type="button" onClick={back}>
                Back
              </button>
            )}
            <button type="submit">{isLastSetp ? "Finish" : "Next"}</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default App;
