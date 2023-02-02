// 질문창

import PointBtn from "../components/PointBtn";
import Btn from "../components/StartBtn";

const pointList = [1, 2, 3, 4, 5];

const Question = ({ stage, setStage, quest, setPoint }) => {
    return (
        <div>
            <h2>{stage}</h2>
            <p>{quest.query}</p>
            {pointList.map((num) => {
                return (
                    <PointBtn key={num} number={num} setPoint={setPoint} quest={quest} setStage={setStage} />
                );
            })}
            <Btn text={"뒤로가기"} setStage={setStage} setPoint={setPoint} diff={-1} />
        </div>
    );
};

export default Question;
