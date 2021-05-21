import React, {Component} from 'react';
import SelectedLanguage from "./SelectedLanguage";

class Popular extends Component {
    constructor() {
        super();
        this.state = {
            selectedLanguage: 'All'
        }
        this.setActiveLanguage = this.setActiveLanguage.bind(this);
    }

    setActiveLanguage(event) {
        if(event.target.innerText !== this.state.selectedLanguage) {
            this.setState({selectedLanguage: event.target.innerText});
        }
    }

    render() {
        return (
            <div>
                <SelectedLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    setActiveLanguage={this.setActiveLanguage}
                />
            </div>
        );
    }
}

export default Popular;
