import React, { useState, useEffect } from "react";

export const useFetch = (defaultUrl = "") => {

    const [data, setData] = useState({});
    const [url, setUrl] = useState(defaultUrl);
    const [error, setError] = useState("");

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {

        const fetchData = async () => {

            setIsError(false);

            try {
                await fetch(url)
                .then(res => res.json())
                .then(data => {setData(data)})
            } catch (error) {
                setIsError(true);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchData();

    }, [url])

    return [{data, isLoading, isError, error}, setUrl]
}