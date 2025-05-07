import React, { useState } from 'react';


function Stepper() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Step 1: Personal Information",
    "Step 2: Address",
    "Step 3: Review"
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
  };

  return (
    <div className="stepper-container">
      <div className="stepper-header">
        <h2>Stepper</h2>
        <div className="step-indicator">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step ${currentStep === index + 1 ? 'active' : ''}`}
            >
              <span>{index + 1}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="step-content">
        <h3>{steps[currentStep - 1]}</h3>
        <div className="step-actions">
          {currentStep > 1 && (
            <button onClick={handleBack}>Back</button>
          )}
          {currentStep < steps.length ? (
            <button onClick={handleNext}>Next</button>
          ) : (
            <button onClick={handleReset}>Reset</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Stepper;
