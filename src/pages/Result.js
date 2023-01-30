const Result = ({ point }) => {
    let mbti = "";
    if (point.E > 0) {
        mbti += "E";
    } else {
        mbti += "I";
    }
    if (point.N > 0) {
        mbti += "N";
    } else {
        mbti += "S";
    }
    if (point.T > 0) {
        mbti += "T";
    } else {
        mbti += "F";
    }
    if (point.P > 0) {
        mbti += "P";
    } else {
        mbti += "J";
    }
    return <div>{mbti}</div>;
};

export default Result;
