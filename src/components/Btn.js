import style from '../style/Btn.module.css';

function Btn({text}){
    return <div className={style.btn}><p className={style.content}>{text}</p></div>
}

export default Btn;