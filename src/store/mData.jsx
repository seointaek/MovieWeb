import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const result = await axios.get(`http://api.kcisa.kr/openapi/service/rest/meta16/getkobis05?serviceKey=2a890905-712d-4c6d-ae9d-e4249e31e8e5&numOfRows=80000&pageNo=1`)
.then((response) => (response.data.response.body.items.item.filter((item) => {
    if(item.createdDate === '2018' || item.createdDate === '2019' || item.createdDate === '2020') return true
})));

export let mData = createSlice({
    name : 'mData',
    initialState : result,
});