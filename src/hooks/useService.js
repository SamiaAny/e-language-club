import { useState,useEffect } from "react";

const useService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return [services];
}

export default useService;