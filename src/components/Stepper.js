import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1
  }
});

export default function DotsMobileStepper(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(props.page - 1);
  const [slug] = React.useState(props.slug);
  const [prev, setPrev] = React.useState(props.prev);
  const [next, setNext] = React.useState(props.next);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  useEffect(() => {
    if (activeStep === 0) {
      setNext(`${slug}/${props.next}`);
    }
    if (activeStep === 1) {
        setPrev(`../${slug}`)
    }
  }, [activeStep, setNext, setPrev, slug, props.next]);

  console.log(
    "active step " +
      activeStep +
      " prev " +
      prev +
      " next " +
      next +
      " slug " +
      slug
  );

  return (
    <MobileStepper
      variant="dots"
      steps={props.numPages}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          href={next}
          disabled={activeStep === props.numPages - 1}
        >
          Next
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button
          size="small"
          onClick={handleBack}
          href={prev}
          disabled={activeStep === 0}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
}
