//======================handle Api and fetch data======================
import { useState, useEffect } from 'react';
 
 const useService = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
      fetch('/service.json')
        .then(res => res.json())
        .then(data => setService(data));
    }, [])
     return [service]
 };
 //======================End======================
 export default useService;