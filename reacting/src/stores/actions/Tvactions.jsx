import axios from "../../Components/utils/axios";
export { removetv } from "../reducers/tvSlice";
import { loadtv } from "../reducers/tvSlice";
export const asyncloadtv =(id)=>async(dispatch, getState)=>{
    try{
        const detail = await axios.get(`/tv/${id}`);
        const externalid = await axios.get(`/tv/${id}/external_ids`);
        const recommendation = await axios.get(`/tv/${id}/recommendations`);
        const similar= await axios.get(`/tv/${id}/similar`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const watchproviders = await axios.get(`/tv/${id}/watch/providers`);
        const translations = await axios.get(`/tv/${id}/translations`);

        let theultimatedetails ={
            detail: detail.data,
            externalid: externalid.data,
            recommendation: recommendation.data.results,
            similar: similar.data.results,
            videos: videos.data.results.filter(m => m.type === "Trailer"),
            watchproviders: watchproviders.data.results.IN,
            translations :translations.data.translations.map((t)=>t.name)
        }
        dispatch(loadtv(theultimatedetails));
        //console.log(theultimatedetails)
    }catch(error){
        console.log("Error:", error);
    }
}
