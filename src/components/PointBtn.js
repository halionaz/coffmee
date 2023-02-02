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
                setStage((prev) => {
                    return prev + 1;
                });
                setPoint((prev) => {
                    switch (quest.kind) {
                        case "E":
                            return [ ...prev, {type : "E", W : weight * (number - 3)} ];
                        case "N":
                            return [ ...prev, {type : "N", W : weight * (number - 3)} ];
                        case "T":
                            return [ ...prev, {type : "T", W : weight * (number - 3)} ];
                        case "P":
                            return [ ...prev, {type : "P", W : weight * (number - 3)} ];
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
