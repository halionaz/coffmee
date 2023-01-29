// 질문창

import Btn from "../components/Btn"

const Question = ({ stage, setStage }) => {
    return (
        <div>
            <h2>{stage}번 질문입니다.</h2>
            <Btn text={"다음"} setStage={setStage}/>
            <Btn text={"뒤로가기"} setStage={setStage} diff={-1} />
        </div>
    );
};

export default Question;
