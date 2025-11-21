import { useForm } from "../../FormProvider";
import { Button } from "../ui/Button";

const CTAButton = () => {
  const { setShowForm } = useForm();

  return (
    <Button
      onClick={() => {
        console.log("Button clicked");
        setShowForm(true);
      }}
      className=" mr-16 md:mr-0"
      aria-label="Book a Strategy Call"
    >
      Book a Strategy Call
    </Button>
  );
};

export default CTAButton;
