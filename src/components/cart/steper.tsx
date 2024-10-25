'use client'

import { useState } from "react";
import styled from "@emotion/styled";
import { Step, StepConnector, stepConnectorClasses, StepLabel, Stepper } from "@mui/material";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddCardIcon from '@mui/icons-material/AddCard';

const Steper = () => {
  const steps = ["سبد خرید", "آدرس و نحوه ارسال", "روش پرداخت"];
  const [activeStep, setActiveStep] = useState(0); // State برای استپ فعال

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        background: '#FF7900',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        background: '#FF7900',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      borderRadius: 1,
      backgroundColor: "#ccc",
    },
  }));

  const ColorlibStepIconRoot = styled("div")(({ ownerState }) => ({
    backgroundColor: ownerState.active || ownerState.completed ? "transparent" : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    transition: "transform 0.3s ease, background 0.3s ease", // ترینزیشن برای انیمیشن نرم
    transform: ownerState.active ? "scale(1.1)" : "scale(1)", // تغییر سایز هنگام فعال شدن
    ...(ownerState.active && {
      background: '#FF7900',
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
        background: '#FF7900',
    }),
  }));

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
      1: <ShoppingCartIcon />,
      2: <LocationOnIcon />,
      3: <AddCardIcon />,
    };

    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  const handleStepClick = (step) => {
    setActiveStep(step); // تغییر استپ فعال بر اساس کلیک
  };

  return (
    <div style={{ direction: "rtl" }} className="p-5 rounded-md border border-gray-300 m-5">
      <Stepper
        alternativeLabel
        activeStep={activeStep} // استپ فعال از state گرفته می‌شود
        connector={<ColorlibConnector />}
        sx={{ flexDirection: "row-reverse" }}
      >
        {steps.map((label, index) => (
          <Step key={index} onClick={() => handleStepClick(index)} style={{ cursor: "pointer" }}>
            <StepLabel
              StepIconComponent={ColorlibStepIcon}
              sx={{
                textAlign: "right",
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default Steper;
