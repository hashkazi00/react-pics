import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

import './App.css';

import unsplash from '../api/unsplash';

export default class App extends React.Component{

    state = {imageList: []}

    onSubmitFuncProp = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query : term}
        });

        this.setState({imageList: response.data.results})

        console.log(this.state.imageList)
    }



    render(){
        return (
            <div className="ui container search-bar">
                <SearchBar onSubmitFuncProp={this.onSubmitFuncProp}/>
                <ImageList images={this.state.imageList} />
            </div>
        )
    }
};

