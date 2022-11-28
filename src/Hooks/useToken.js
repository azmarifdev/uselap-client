import { useState } from 'react';
import { useEffect } from 'react';

const useToken = (email) =>
{
    // console.log(email);
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_LOCALHOST}/jwt?email=${email}`)
                .then((res) => res.json())
                .then((data) =>
                {
                    // console.log(data)
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken);
                        // console.log('token er value', data);
                        setToken(data.accessToken);
                    }
                });
        }
    }, [email]);
    return [token];
};

export default useToken;
