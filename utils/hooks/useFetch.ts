import { useEffect, useState } from 'react';

type FetchState<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
};

export function useFetch<T = unknown>({ url, token, method, body }: { url: string, method: string, body: any, token: string }) {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            setState({ data: null, loading: true, error: null });

            try {

                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", `Bearer ${token}`);
                const config: RequestInit = { method: method || "POST", headers: myHeaders, signal }
                if (body) config.body = JSON.stringify(body)

                const response = await fetch(url, config)
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                const json = await response.json();
                setState({ data: json, loading: false, error: null });
            } catch (err: any) {
                if (err.name === 'AbortError') {
                    // Fetch was aborted, do nothing
                    return;
                }
                setState({ data: null, loading: false, error: err.message });
            }
        };

        fetchData();

        return () => {
            controller.abort(); // Abort the fetch on cleanup
        };
    }, [url]);

    return state;
}

export default useFetch;
