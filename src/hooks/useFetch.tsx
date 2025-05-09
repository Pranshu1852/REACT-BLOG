import { useEffect, useState } from "react";

function useFetch(url: string) {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState<null | unknown>(null);

    useEffect(()=>{
        async function fetchData() {
            setLoading(true);

            try {
                const response=await fetch(url);
                const result=await response.json();

                setData(result);
                setLoading(false);
            } catch (error: unknown) {
                setError(error);
            }
        }

        fetchData();
    },[])

    return {data, loading, error};
}

export default useFetch;