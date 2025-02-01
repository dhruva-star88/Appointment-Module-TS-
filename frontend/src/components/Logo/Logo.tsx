import "./logo.css";

interface Props {
  className: any;
}

export const Logo = ({ className }: Props): JSX.Element => {
  return <div className={`LOGO ${className}`} />;
};
