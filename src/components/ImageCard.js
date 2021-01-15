import React from 'react';


export default class ImageCard extends React.Component{

    constructor(props){
        super(props);
        this.imageRef = React.createRef();
        this.state = { heightSpans: 0, widthSpans:0 }
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const heightSpans = Math.ceil(height / 10 + 1) ;
        this.setState({heightSpans})
    }

    componentDidMount(){
       this.imageRef.current.addEventListener('load', this.setSpans);
    }

    render(){
        return (
            <div style={{gridRowEnd:`span ${this.state.heightSpans}`}} >
                <img ref={this.imageRef} 
                     src={this.props.image.urls.regular}  
                     alt={this.props.image.description}/>
            </div>
        )

    }
}