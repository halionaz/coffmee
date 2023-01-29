import style from "../style/Btn.module.css";

function Btn({ text, setStage, diff = 1 }) {
    return (
        <div
            className={style.btn}
            onClick={() => {
                setStage((prev) => {
                    return prev + diff;
                });
            }}
        >
            <p className={style.content}>{text}</p>
        </div>
    );
}

export default Btn;
