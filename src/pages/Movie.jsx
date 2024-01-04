import cssStyle from '../css/movie.module.css';
import MainSilde from '../pages/MainSilde';
import MoiveList from '../pages/MovieList';

export default function Moive() {
  return (
      <div className={cssStyle.movie}>
        <MainSilde/>
        <MoiveList/>
      </div>
    );
 }
    
