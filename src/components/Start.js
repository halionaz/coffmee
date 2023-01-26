// 랜딩 페이지
import Btn from "./Btn";
import emptyCup from "../img/emptyCup.svg";
import style from "../style/Start.module.css";

const Start = ({setStage}) => {
    return (
        <div className={style.App}>
            <h1>
                나와 어울리는
                <br />
                커피 찾기 테스트
            </h1>
            <img src={emptyCup} className={style.logo} alt="cup img logo" />
            <Btn text={`시작하기`} setStage={setStage}></Btn>
        </div>
    );
};

export default Start;