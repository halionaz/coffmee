import style from "../style/Btn.module.css";

function Btn({ text, setStage }) {
    return (
        <div
            className={style.btn}
            onClick={() => {
                setStage((prev) => {
                    return prev + 1;
                });
            }}
        >
            <p className={style.content}>{text}</p>
        </div>
    );
}

export default Btn;
