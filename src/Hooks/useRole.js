import { useEffect, useState } from 'react';

const useRole = (email) => {
    const [isRole, setIsRole] = useState('');
    // const [isAdminLoading, setIsAdminLoading] = (true)
    // console.log(setIsRole);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_LOCALHOST}/users/${email}`)
            .then((res) => res.json())
            .then((data) => {
                setIsRole(data.role);
                // console.log(data.role);
            });
    }, [email]);
    return [isRole];
};

export default useRole;
