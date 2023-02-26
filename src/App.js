import "./App.css";
import { useEffect, useState } from "react";
import Start from "./pages/Start";
import Question from "./pages/Question";
import Result from "./pages/Result";
import quests from "./data/quests";

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

function App() {
    const [stage, setStage] = useState(0);
    const [point, setPoint] = useState([]);
    useEffect(() => {
        console.log(point);
    }, [point]);
    if (stage === 0) {
        return (
            <div className="App">
                <Start setStage={setStage} />
            </div>
        );
    } else if (stage >= 1 && stage <= 12) {
        return (
            <div className="App">
                <Question
                    stage={stage}
                    setStage={setStage}
                    quest={questions[stage - 1]}
                    setPoint={setPoint}
                />
            </div>
        );
    } else {
        // 결과창
        const result = {
            E: 0,
            N: 0,
            T: 0,
            P: 0,
        };
        point.forEach((q) => {
            result[q.type] += q.W;
        });
        return (
            <div className="App">
                <Result point={result} />
            </div>
        );
    }
}

export default App;
