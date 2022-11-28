import { useEffect, useState } from 'react';

const useVerify = (email) => {
    const [getRole, setVerifyRole] = useState(false);
    const [userLoading, setUserLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_LOCALHOST}/users/${email}`)
                .then((res) => res.json())
                .then((data) => {
                    setVerifyRole(data.role);
                    setUserLoading(false);
                });
        }
    }, [email]);

    return [getRole, userLoading];
};

export default useVerify;
