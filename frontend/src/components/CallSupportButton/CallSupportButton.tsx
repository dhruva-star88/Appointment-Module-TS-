import "./callsupportbutton.css";

interface Props {
  iconType: "no-icon";
  state: "enable";
  hover: boolean;
  CTA: "NEXT";
  className: any;
  text: string;
}

export const CallSupportButton = ({
  // iconType,
  // state,
  // hover,
  // CTA,
  className,
  text = "Next",
}: Props): JSX.Element => {
  return (
    <button className={`icon-type-no-icon-wrapper ${className}`}>
      <div className="next-wrapper">
        <div className="text-wrapper">{text}</div>
      </div>
    </button>
  );
};
