import { useState } from "react";
import Question from "../components/Question";
import quests from "../data/quests";
import coffeeByMBTI from "../data/coffeeByMBTI";
import { useNavigate } from "react-router-dom";

const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
};

const questions = [];

for (let i = 0; i < 4; i++) {
    const already = [false, false, false, false, false];
    for (let j = 0; j < 3; j++) {
        const rand = Math.floor(Math.random() * 5);
        if (!already[rand]) {
            already[rand] = true;
            questions.push(quests[i][rand]);
        } else {
            j--;
        }
    }
}

// 질문을 쓰까
shuffle(questions);

function Questionary() {
    const navigate = useNavigate();

    const [stage, setStage] = useState(0);
    const [point, setPoint] = useState([]);

    if (stage < 12) {
        return (
            <div className="App">
                <Question
                    stage={stage}
                    setStage={setStage}
                    quest={questions[stage]}
                    setPoint={setPoint}
                />
            </div>
        );
    } else {
        // 결과창으로 전송
        const result = {
            E: 0,
            N: 0,
            T: 0,
            P: 0,
        };
        point.forEach((q) => {
            result[q.type] += q.W;
        });
        let mbti = "";
        if (result.E > 0) {
            mbti += "E";
        } else {
            mbti += "I";
        }
        if (result.N > 0) {
            mbti += "N";
        } else {
            mbti += "S";
        }
        if (result.T > 0) {
            mbti += "T";
        } else {
            mbti += "F";
        }
        if (result.P > 0) {
            mbti += "P";
        } else {
            mbti += "J";
        }
        return navigate(`/result/${coffeeByMBTI[mbti]}`);
    }
}

export default Questionary;
