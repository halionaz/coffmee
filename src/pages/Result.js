import { useParams } from "react-router-dom";

const Result = () => {

    const params = useParams();
    return <div>{params.id}</div>;
};

export default Result;
