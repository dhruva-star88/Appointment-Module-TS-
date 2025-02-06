import "./bar.css";

interface Props {
  className: any;
  frame: string;
  divClassName: any;
  divClassNameOverride: any;
  divClassName1: any;
  img: string;
}

export const Bar = ({
  className,
  frame = "https://c.animaapp.com/e1d4PZQa/img/frame-591-2.svg", // Left arrow
  divClassName,
  divClassNameOverride,
  divClassName1,
  img = "https://c.animaapp.com/e1d4PZQa/img/frame-764.svg", // Right arrow
}: Props): JSX.Element => {
  return (
    <div className={`BAR ${className}`}>
      <img className="frame-10" alt="Frame" src={frame} />

      <div className="frame-11">
        <div className={`text-wrapper-8 ${divClassName}`}>1</div>

        <div className={`text-wrapper-9 ${divClassNameOverride}`}>2</div>

        <div className={`text-wrapper-9 ${divClassName1}`}>3</div>

        <div className={`text-wrapper-9 ${divClassName1}`}>4</div>
      </div>

      <img className="frame-10" alt="Frame" src={img} />
    </div>
  );
};
