import style from "../style/StartBtn.module.css";

function StartBtn({ text, setStage, diff = 1 }) {
    return (
        <div
            className={style.btn}
            onClick={() => {
                if(diff === -1){
                    // 뒤로 가기임
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
