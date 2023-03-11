import { useParams } from "react-router-dom";
import style from "../style/Result.module.css";
import dataSet from "../data/resultData";

const Result = () => {

    const params = useParams();
    const mbti = params.id;
    const data = dataSet[mbti];
    return <div className={style.App}>
        <div className={style.title}>
            <div className={style.subTitle}>당신과 어울리는 커피는</div>
            <div className={style.coffeeName}>{data.name}</div>
        </div>
        <img src={data.src} className={style.img} alt={`${data.coffeeName}`} />
    </div>;
};

export default Result;
