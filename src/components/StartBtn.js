import { Link } from "react-router-dom";
import style from "../style/StartBtn.module.css";

function StartBtn({ text}) {
    return (
        <Link to="/question">
            <div className={style.btn}>
                <p className={style.content}>{text}</p>
            </div>
        </Link>
    );
}

export default StartBtn;
