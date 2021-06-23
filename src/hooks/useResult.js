import { useState, useEffect } from 'react';
import yelp from '../api/yelp';


const useResult = () => {
    const [result, setResult] = useState([]);
    const [error, setError] = useState('');


    useEffect(() => {
        searchAPIData('steak');
    }, []);

    const searchAPIData = async (searchValue) => {
        console.log("The search value is: " + searchValue);
        try {

            const response = await yelp.get('./search', {
                params: {
                    limit: 50,
                    term: searchValue,
                    location: 'san jose'
                }
            });

            setResult(response.data.businesses);
            setError('');
        }
        catch (err) {
            setError('Something went wrong :(');
        }
    }

    return [searchAPIData, result, error];
}

export default useResult;