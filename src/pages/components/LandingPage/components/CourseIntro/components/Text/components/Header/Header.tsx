import classes from "./Header.module.scss";

export const CourseIntroTextHeader = () => {
  return (
    <div className={classes.container}>
      {HEADER_LIST.map((header) => (
        <div key={header.name}>
          <p className={classes.name}>{header.name}</p>
          <p className={classes.description}>{header.description}</p>
        </div>
      ))}
    </div>
  );
};

const HEADER_LIST = [
  { name: "Income of students", description: "$800 - $10K/m" },
  { name: "Course hours", description: "160h" },
  { name: "Lessons", description: "22" },
];
