import style from "../style/StartBtn.module.css";

function StartBtn({ text, setStage, diff = 1, setPoint }) {
    return (
        <div
            className={style.btn}
            onClick={() => {
                if (diff === -1) {
                    // 뒤로 가기임
                    setPoint((prev) => {
                        const newPoint = [];
                        for(let i = 0 ; i < prev.length; i++){
                            if(i !== prev.length - 1){
                                newPoint.push(prev[i]);
                            }
                        }
                        return newPoint;
                    });
                }
                setStage((prev) => {
                    return prev + diff;
                });
            }}
        >
            <p className={style.content}>{text}</p>
        </div>
    );
}

export default StartBtn;
