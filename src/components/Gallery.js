import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";
const Gallery = props => {
    const results = props.data;
    let images;
    let noImages;

    if (results.length > 0) {
        images = results.map(image => {
            let id = image.id;
            let url = image.urls.small;
            let alt = image.alt_description;
            return <Image url={url} key={id} alt={alt}></Image>;
        });
    } else {
        noImages = <NoImages />;
    }
    return (
        <div>
            <ul>{images}</ul>
            {noImages}
        </div>
    );
};

export default Gallery;