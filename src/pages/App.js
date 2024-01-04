import Moive from './Movie';
import Header from './Header';
import axios from "axios";
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";

function App() {
  /*const [moviedata, setMoiveData] = useState([]);
  const [numOfRows] = useState(80000); // 한 번에 불러올 자료의 개수
  
  useEffect(() => {
    axios.get(`http://api.kcisa.kr/openapi/service/rest/meta16/getkobis05?serviceKey=2a890905-712d-4c6d-ae9d-e4249e31e8e5&numOfRows=${numOfRows}&pageNo=1`)
    .then((response) => {
      setMoiveData(response.data.response.body.items.item);
    });
  }, [numOfRows]);
  */
  return (
    <>
    <Header/>
    <Moive/>
    </>
  );
}
export default App;
