import style from "../style/BackBtn.module.css";

function BackBtn({ text, setStage, setPoint }) {
    return (
        <div
            className={style.btn}
            onClick={() => {
                setPoint((prev) => {
                    const newPoint = [];
                    for (let i = 0; i < prev.length; i++) {
                        if (i !== prev.length - 1) {
                            newPoint.push(prev[i]);
                        }
                    }
                    return newPoint;
                });
                setStage((prev) => {
                    return prev - 1;
                });
            }}
        >
            <p className={style.content}>{text}</p>
        </div>
    );
}

export default BackBtn;
