import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../components/config";
export const PhotoContext = createContext();

const PhotoContextProvider = props => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const runSearch = query => {
        axios
            .get(
                `https://api.unsplash.com/search/photos/?client_id=${apiKey}&page=1&query=${query}&per_page=24`
            )
            .then(response => {
                setImages(response.data.results);
                setLoading(false);
            })
            .catch(error => {
                console.log(
                    "Encountered an error with fetching and parsing data",
                    error
                );
            });
    };
    return (
        <PhotoContext.Provider value={{ images, loading, runSearch }}>
            {props.children}
        </PhotoContext.Provider>
    );
};

export default PhotoContextProvider;