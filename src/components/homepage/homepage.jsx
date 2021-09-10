import { Component } from "react";
import './homepage.css';
import Select from 'react-select';

export default class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [{
                value: "Chennai", label: "Chennai"
            }, {
                value: "Bangalore", label: "Bangalore"
            }, {
                value: "Pune", label: "Pune"
            }],
            selectedCity: null,
            searchValue:""
        }
    }

    //React select handle change function
    handleCityChange = (selectedCity) => {
        this.setState({ selectedCity });
        console.log(`Option selected:`, selectedCity);
    };

    render() {
        return (
            <div className="homepage">
                <div className="inline">
                    <img className="headerImage" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" width="130" />
                </div>
                <div className="inline shadow">
                    <ul>
                        <li>
                            <span className="locationIcon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="40" viewBox="0 0 24 24"><path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z" fill="#F57082"/></svg>
                            </span>
                        </li>
                        <li>
                            <Select
                                className={"citySelect"}
                                value={this.state.selectedCity}
                                onChange={this.handleCityChange}
                                options={this.state.options}
                            />
                        </li>
                        <li className="searchIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="27" viewBox="0 0 24 24" fill="#828282">
                                <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z" /></svg>
                        </li>
                        <li>
                            <input
                                className={"searchInput"}
                                placeholder={"Search for restaurant, cuisine or a dish"}
                                
                            />
                        </li>
                    </ul>
                </div>
                <div className="inline authContents">
                    <ul>
                        <li className="authBtn">
                            Log in
                        </li>
                        <li className="authBtn">
                            Sign up
                        </li>
                    </ul>
                </div>
            </div>);
    }
};