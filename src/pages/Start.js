// 랜딩 페이지
import StartBtn from "../components/StartBtn";
import emptyCup from "../img/emptyCup.png";
import style from "../style/Start.module.css";

const Start = ({ setStage }) => {
    return (
        <div className={style.App}>
            <div className={style.title}>
                <h1>
                    <div className={style.sub}>나와 닮은</div>
                    <div className={style.main}>커피 찾기</div>
                </h1>
                <div className={style.text}>당신은 어떤 커피와 어울리나요?</div>
            </div>
            <img src={emptyCup} className={style.logo} alt="cup img logo" />
            <div className={style.btnFlex}>
                <StartBtn text={`시작하기`} setStage={setStage}></StartBtn>
                <div className={style.share}>친구에게 공유하기</div>
            </div>
        </div>
    );
};

export default Start;
