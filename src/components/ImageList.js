import React from 'react';
import ImageCard from './ImageCard';

import './ImageList.css';


// export default class ImageList extends React.Component{

//     showImages = () => {
//         const imageList = this.props.images.map(image => {
//             return <img src={image.urls.regular} key={image.id} alt={image.description} />
//         })

//         return imageList;
//     }

//     render(){
//         return (
//             <div className="image-list">{this.showImages()}</div>
//         )
//     }
// }

//Better use Functional Component as we have nothing to do with api calls, etc.

const ImageList = ({images}) => {

    const imageList = images.map(image => {
            return <ImageCard image={image} key={image.id}/>
    })

    return (
        <div className="image-list">{imageList}</div>
    )
    
}

export default ImageList;