import { Button } from "../Button";
import { EachStatements } from "../EachStatements";
import { StateDefaultWrapper } from "../StateDefaultWrapper";
import "./filterwrapper.css";

interface Props {
  filters: "filters-6";
  className: any;
  vector: string;
  eachStatementsPcb: string;
  eachStatementsImg: string;
  eachStatementsPcb1: string;
  eachStatementsPcb2: string;
  eachStatementsPcb3: string;
  eachStatementsPcb4: string;
  eachStatementsPcb5: string;
  eachStatementsPcb6: string;
}

export const FiltersWrapper = ({
  //filters,
  className,
  vector = "/img/vector.svg",
  eachStatementsPcb = "/img/pcb04-9.svg",
  eachStatementsImg = "/img/pcb04-10.svg",
  eachStatementsPcb1 = "/img/pcb04-11.svg",
  eachStatementsPcb2 = "/img/pcb04-12.svg",
  eachStatementsPcb3 = "/img/pcb04-13.svg",
  eachStatementsPcb4 = "/img/pcb04-14.svg",
  eachStatementsPcb5 = "/img/pcb04-15.svg",
  eachStatementsPcb6 = "/img/pcb04-16.svg",
}: Props): JSX.Element => {
  return (
    <div className={`filters-wrapper ${className}`}>
      <div className="frame-12">
        <div className="text-wrapper-10">Filters</div>

        <img
          className="arrow"
          alt="Arrow"
          src="https://c.animaapp.com/e1d4PZQa/img/arrow-1-1.svg"
        />
      </div>

      <div className="component-2">
        <div className="frame-13">
          <div className="frame-14">
            <StateDefaultWrapper
              category="concern"
              className="cat-concern"
              state="INACTIVE"
              text="Concerns"
            />
            <StateDefaultWrapper
              category="profession-type"
              className="design-component-instance-node"
              state="default"
              text=""
            />
            <StateDefaultWrapper
              category="concern"
              className="design-component-instance-node"
              state="default"
              text="Language"
            />
            <StateDefaultWrapper
              category="concern"
              className="design-component-instance-node"
              state="default"
              text="Gender"
            />
          </div>

          <div className="frame-15">
            <div className="text-wrapper-11">Search</div>

            <img className="vector" alt="Vector" src={vector} />
          </div>

          <EachStatements
            className="design-component-instance-node"
            concern="concern"
            pcb={eachStatementsPcb}
            professionTypeClassName="each-statements-instance"
            stateProp={false}
            text="Stress"
          />
          <EachStatements
            className="design-component-instance-node"
            concern="concern"
            pcb={eachStatementsImg}
            professionTypeClassName="each-statements-instance"
            stateProp={false}
            text="Depression"
          />
          <EachStatements
            className="design-component-instance-node"
            concern="concern"
            pcb={eachStatementsPcb1}
            professionTypeClassName="each-statements-instance"
            stateProp={false}
            text="Anxiety"
          />
          <EachStatements
            className="design-component-instance-node"
            concern="concern"
            pcb={eachStatementsPcb2}
            professionTypeClassName="each-statements-instance"
            stateProp={false}
            text="Adhd"
          />
          <EachStatements
            className="design-component-instance-node"
            concern="concern"
            pcb={eachStatementsPcb3}
            professionTypeClassName="each-statements-instance"
            stateProp={false}
            text="Clinical Psychologist"
          />
          <EachStatements
            className="design-component-instance-node"
            concern="concern"
            pcb={eachStatementsPcb4}
            professionTypeClassName="each-statements-instance"
            stateProp={false}
            text="Clinical Psychologist"
          />
          <EachStatements
            className="design-component-instance-node"
            concern="concern"
            pcb={eachStatementsPcb5}
            professionTypeClassName="each-statements-instance"
            stateProp={false}
            text="Clinical Psychologist"
          />
          <EachStatements
            className="design-component-instance-node"
            concern="concern"
            pcb={eachStatementsPcb6}
            professionTypeClassName="each-statements-instance"
            stateProp={false}
            text="Clinical Psychologist"
          />
        </div>

        <div className="frame-14">
          <Button
            CTA="NEXT"
            className="design-component-instance-node"
            hover={false}
            iconType="no-icon"
            stateProp="disable"
            text="Clear All"
            divClassName=""
          />
          <Button
            CTA="APPLY"
            className="button-instance"
            hover={false}
            iconType="no-icon"
            stateProp="disable"
            text=""
            divClassName=""
          />
        </div>
      </div>
    </div>
  );
};
