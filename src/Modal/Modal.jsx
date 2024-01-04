import { useSelector } from 'react-redux';
import cssStyle from '../css/Modal.module.css';

export default function MovieModal({setModal}) {
    return(
        <main>
            <div className={cssStyle.modal}>
                <div className={cssStyle.inner}>
                    <img src="./img/movie.jpg" alt=""/>
                    <div className = {cssStyle.desc}>
                        <strong>영화제목 :{}</strong>
                        <span>장르 : {}</span>
                        <span>개봉일 :  {}</span>
                        <span>이용관람 :  {}</span>
                        <span>제조국 :  {}</span>
                    </div>
                <button onClick={() => {
                setModal(true);
                }}>상세정보</button>
                </div>
            </div>
        </main>
       
    )
}