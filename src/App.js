import React          from 'react'
//import CountryPzicker from './components/CountryPzicker/CountryPzicker'
import {Cards,Chart,CountryPicker } from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from './images/image.png';
class App extends React.Component{
   state = {
       data: {},
    }
   async componentDidMount() {
        const datacovid = await fetchData();
       //console.log(data);
        this.setState({ data: datacovid});
    }
    handleCountryChange = async (country) => {
        const datacovid = await fetchData(country);
        this.setState({ data: datacovid,country:country});
    }
    render(){
        const {data,country} = this.state;
        return(
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt='COVID-19'/>
               <Cards data = {data}/>
               <CountryPicker  handleCountryChange = {this.handleCountryChange}/>
                <Chart data ={data} country={country}/>
            </div>
        
        )
    }
}
export default App;