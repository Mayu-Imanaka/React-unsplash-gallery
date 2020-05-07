import React from "react";

const Image = ({ url, alt }) => (
    <li>
        <img src={url} alt={alt} />
    </li>
);

export default Image;