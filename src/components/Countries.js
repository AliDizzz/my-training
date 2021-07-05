import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Countries = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag')
            .then((res) => setData(res.data));
    }, []);

    return (
        <div>

        </div>
    );
};

export default Countries;