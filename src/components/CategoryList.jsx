
import { useSelector } from 'react-redux'
import cssStyle from '../css/categoryList.module.css'

export default function CategoryList() {
    let moviedata = useSelector((a) => a.mData);
    return(
        <>
        <div className={cssStyle.btn}>
            <button onClick={() => {
                
            }}>액션</button>
            <button onClick={() => {

            }}>코미디</button>
            <button onClick={() => {

            }}></button>
            <button onClick={() => {

            }}>시리즈</button>
        </div>
        </>
    )
}