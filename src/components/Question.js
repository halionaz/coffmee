// 질문창

import PointBtn from "./PointBtn";
import Btn from "./BackBtn";
import style from "../style/Question.module.css";

const pointList = [1, 2, 3, 4, 5];

const Question = ({ stage, setStage, quest, setPoint }) => {
    return (
        <div className={style.Question}>
            <h2 className={style.Numbering}>{stage + 1}</h2>
            <p className={style.query}>{quest.query}</p>
            <div className={style.survey}>
                <div className={style.description}>
                    <div>그렇지 않다</div>
                    <div>그렇다</div>
                </div>
                <div className={style.numbers}>
                    {pointList.map((num) => {
                        return (
                            <PointBtn
                                key={num}
                                number={num}
                                setPoint={setPoint}
                                quest={quest}
                                setStage={setStage}
                            />
                        );
                    })}
                </div>
            </div>
            <progress className={style.progressBar} max="12" value={stage} />

            <Btn
                stage={stage}
                text={"뒤로가기"}
                setStage={setStage}
                setPoint={setPoint}
                diff={-1}
            />
        </div>
    );
};

export default Question;
