import { PickValue } from "common/interface";
import { StepperStaticComponentProps } from "components/Stepper/StepperStatic/StepperStatic.interface";
import { EducationIcon } from "components/Icons/EducationIcon";

export const useStepperStaticData = () => {
  const stepperStaticData: PickValue<StepperStaticComponentProps, "data"> = [
    {
      name: "Practical learning",
      description:
        "Practical knowledge really matters because it turns what you know into what you can do. It’s huge for solving real issues and makes you super valuable in the job market. Plus, it speeds up your career growth in this fast-changing field.",
      icon: <EducationIcon />,
    },
    {
      name: "Keep motivated",
      description:
        "In our course, you'll hit quizzes after each section. They’re key for nailing down what you've learned and spotting any weak spots. Think of them as quick checks that keep you on track and boost your confidence as you go!",
      icon: <EducationIcon />,
    },
    {
      name: "Follow a structured plan",
      description:
        "In our course, you'll follow a structured plan. It guides you step by step through everything, making sure you don’t miss a beat. Think of it as your roadmap that keeps you focused and on track to mastering web development!",
      icon: <EducationIcon />,
    },
  ];

  return { stepperStaticData };
};
