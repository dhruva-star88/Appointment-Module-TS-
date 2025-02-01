import "./statedefaultwrapper.css";

interface Props {
  state: "INACTIVE" | "default";
  category: "profession-type" | "concern";
  className: any;
  text: string;
}

export const StateDefaultWrapper = ({
  state,
  category,
  className,
  text = "Concern",
}: Props): JSX.Element => {
  return (
    <div className={`state-default-wrapper ${state} ${className}`}>
      <div className="concern">
        {category === "concern" && <>{text}</>}

        {category === "profession-type" && <>Profession Type</>}
      </div>
    </div>
  );
};
