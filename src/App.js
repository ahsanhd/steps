import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}> {messages[step - 1]} </StepMessage>
          {/* <p className="message">
            Step {step}: {messages[step - 1]}{" "}
          </p> */}
          <div className="buttons">
            <Button color="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              Previous 👈
            </Button>

            <Button color="#fff" bgColor="#7950f2" onClick={handleNext}>
              👉 Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      Step {step}: {children}
    </p>
  );
}

function Button({ onClick, children, color, bgColor }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
