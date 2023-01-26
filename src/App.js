import "./App.css";
import { useEffect, useState } from "react";
import Start from "./components/Start";

const quests = [[
    {query : "친해지고 싶은 사람에게 다가가 대화를 시작하는 것이 크게 어렵지 않다.", kind: "E", type: true},
    {query : "그룹에서 리더 역할을 맡는 일은 어떻게든 피하고 싶다.", kind: "E", type: false},
    {query : "혼자있기보단 다른 사람과 시간을 보내고 싶다.", kind: "E", type: true},
    {query : "휴일에 혼자만의 시간을 보내는 것보다는 즐거운 파티나 행사에 참여하는 것이 좋다.", kind: "E", type: true},
    {query : "단체 활동에 참여하는 일을 즐긴다.", kind: "E", type: true},
],[
    {query : "과학 서적 같은 비문학보다는 생각할 여지가 많은 문학을 선호한다.", kind: "N", type: true},
    {query : "관심사가 너무 많아 한 가지 프로젝트에 집중하지 못하는 경우가 많다.", kind: "N",type: true},
    {query : "사후 세계에 대한 고민과 질문들이 흥미롭다고 생각한다.", kind: "N",type: true},
    {query : "철학적인 질문에 대해 깊게 생각하는 일은 시간 낭비라고 생각한다.", kind: "N",type: false},
    {query : "나에게 예술적 성향이 풍부하다고 생각한다.", kind: "N",type: true},
],[
    {query : "다른 사람이 울고 있는 모습을 보면 나도 울고 싶어질 때가 많다.", kind: "T",type: false},
    {query : "사람들이 감정보다는 이성을 중시했다면 더 나은 세상이 되었을 것이다.", kind: "T",type: true},
    {query : "상대의 잘못이라는 것이 명백할 때도 상대의 체면을 살려주기 위해 노력한다.", kind: "T",type: false},
    {query : "논란이 되거나 논쟁을 불러 일으킬 수 있는 주제에 관심이 많다.", kind: "T",type: true},
    {query : "상대방의 감정을 빠르게 알아차리는 편이다.", kind: "T",type: false},
],[
    {query : "하나의 프로젝트를 완전히 완료한 후, 다른 프로젝트를 시작하는 편이다.", kind: "P",type: false},
    {query : "일정이나 목록으로 계획을 세우는 일을 좋아한다.", kind: "P",type: false},
    {query : "하루 일정을 계획하기보다는 즉흥적으로 하고 싶은 일을 하는 것을 좋아한다.", kind: "P",type: true},
    {query : "해야 할 일을 마지막까지 미루는 경우가 많다.", kind: "P",type: true},
    {query : "계획에 따르기보다는 즉흥적으로 할 일을 몰아서 처리하기를 선호한다.", kind: "P",type: true},
]];

const questions = [];

for(let i = 0; i < 4; i++){
    const already = [false, false, false, false, false];
    for(let j = 0; j < 3; j++){
        const rand = Math.floor(Math.random()*5);
        if(!already[rand]){
            already[rand] = true;
            questions.push(quests[i][rand]);
        } else {
            j--;
        }
    }
}

function App() {
    const [stage, setStage] = useState(0);
    switch(stage){
        case 0 :
            return (
                <div className="App">
                    <Start setStage={setStage} />
                </div>
            );
    }
}

export default App;
