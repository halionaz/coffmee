// 점수 척도

import style from "../style/PointBtn.module.css";

const PointBtn = ({ number, setPoint, quest, setStage }) => {
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
                            return { ...prev, E: prev.E + number };
                        case "N":
                            return { ...prev, N: prev.N + number };
                        case "T":
                            return { ...prev, T: prev.T + number };
                        case "P":
                            return { ...prev, P: prev.P + number };
                    }
                });
            }}
        >
            {number}
        </div>
    );
};

export default PointBtn;
