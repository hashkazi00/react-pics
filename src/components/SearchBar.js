import React from 'react';

import './SearchBar.css'

export default class SearchBar extends React.Component{

    state = {term : ''}

    formSubmit(e){
        e.preventDefault();
        this.props.onSubmitFuncProp(this.state.term);
        
    }

    render(){
        return (
            <form className="ui fluid input massive search-bar" onSubmit={(e) => this.formSubmit(e)}>
                <input value={this.state.term} placeholder="Search for pics..." onChange={(e) => this.setState({term: e.target.value})} />
            </form>
        )
    }

}