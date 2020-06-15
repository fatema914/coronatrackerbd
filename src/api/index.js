import axios from 'axios';

const url='https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeURL = url;
if(country){
    changeURL = `${url}/countries/${country}`;
}
    try{
        const { data: { confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeURL);
        return { confirmed,recovered,deaths,lastUpdate};
       // const responce = await axios.get(url);
       // return responce;
    }
    catch(error)
    {

    }
}
export const fetchDailyData = async() => {
    try {
        const {data} = await axios.get('https://covid19.mathdro.id/api/daily');
        //console.log(data);
        const modifiedData  = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths : dailyData.deaths.total,
            date: dailyData.reportDate,

        }));
        //console.log(modifiedData);
        return modifiedData;
    }catch(error){

    }
}
export const fetchCountries = async() => {
    try {
        const {data:{countries}} = await axios.get('https://covid19.mathdro.id/api/countries');
        //console.log(response)
        return countries.map((country) => country.name);
    }
    catch (error)
    {

    }
}