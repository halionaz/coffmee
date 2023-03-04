import style from "../style/BackBtn.module.css";
import { useNavigate } from "react-router-dom";

function BackBtn({ stage, text, setStage, setPoint }) {
    const navigate = useNavigate();
    return (
        <div
            className={style.btn}
            onClick={() => {
                if(stage === 0){
                    // 1번째 질문에서 뒤로가기 누르면 홈화면으로 보내줌
                    return navigate(`/`);
                }
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
