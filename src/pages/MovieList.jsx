import cssStyle from '../css/moiveList.module.css'
import MovieCard from '../components/MovieCard'
import { useSelector } from 'react-redux';
import { useState } from 'react';


export default function MoiveList(){
    let moviedata = useSelector((a) => a.mData);
    let [reList, setReList] = useState(moviedata);
    return(
        <section className={cssStyle.movieList}>
            <div className={cssStyle.btn}>
                <button onClick={() => {
                    setReList([...moviedata].filter((a) => a.subjectCategory === '액션'));
                }}>액션</button>
                <button onClick={() => {
                    setReList([...moviedata].filter((a) => a.subjectCategory === '공포(호러)'))
                }}>공포(호러)</button>
                <button onClick={() => {
                    setReList([...moviedata].filter((a) => a.subjectCategory === '코미디'))
                }}>코미디</button>
                <button onClick={() => {
                    setReList([...moviedata].filter((a) => a.subjectCategory === '드라마'))
                }}>드라마</button>
                <button onClick={() => {
                    setReList([...moviedata].filter((a) => a.subjectCategory === '애니메이션'))
                }}>애니메이션</button>
            </div>
            <h2>Moive List</h2>
            <ul>
                {
                    reList.map((data) => {
                        return(
                            <li><MovieCard data = {data}/></li>
                        )
                    })
                }
                
            </ul>
        </section>
    )
}