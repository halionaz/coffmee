// 점수 척도

import style from "../style/PointBtn.module.css";

let weight = 1;

const PointBtn = ({ number, setPoint, quest, setStage }) => {

    if(quest.type){
        weight = 1;
    } else {
        weight = -1;
    }
    return (
        <div
            className={style.btn}
            onClick={() => {
                setPoint((prev) => {
                    setStage((prev) => {
                        return prev + 1;
                    });
                    switch (quest.kind) {
                        case "E":
                            return { ...prev, E: prev.E + weight * (number - 3) };
                        case "N":
                            return { ...prev, N: prev.N + weight * (number - 3) };
                        case "T":
                            return { ...prev, T: prev.T + weight * (number - 3) };
                        case "P":
                            return { ...prev, P: prev.P + weight * (number - 3) };
                        default :
                            break;
                    }
                });
            }}
        >
            {number}
        </div>
    );
};

export default PointBtn;
