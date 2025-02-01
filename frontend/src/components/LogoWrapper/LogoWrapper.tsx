import "./logowrapper.css";

interface Props {
  className: any;
}

export const LogoWrapper = ({ className }: Props): JSX.Element => {
  return <div className={`LOGO-wrapper ${className}`} />;
};
