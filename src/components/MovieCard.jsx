import { useState } from 'react'
import cssStyle from '../css/movieCard.module.css'
import Modal from '../Modal/Modal';
export default function MoiveCard({data}) {
    let [modal, setModal] = useState(false);
    return(
        <main>
            {modal && <Modal setModal={setModal}/>}
            <figure className= {cssStyle.movieCard}>
                <div>
                    <img src='./img/movie.jpg' onClick={() => {
                        setModal(true);
                    }} alt=''/>
                </div>
                <figcaption>
                    <span>{data.title}</span>
                </figcaption>     
            </figure>
        </main>
        
    )
}