// 랜딩 페이지
import StartBtn from "../components/StartBtn";
import emptyCup from "../img/emptyCup.png";
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
            <StartBtn text={`시작하기`} setStage={setStage}></StartBtn>
        </div>
    );
};

export default Start;