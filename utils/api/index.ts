


interface GET_SERVER_DATA {
    url: string, token: string, body?: any, method?: string
}
export const getServerData = async <T>({ url, token, body, method }: GET_SERVER_DATA): Promise<T | null> => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);
        const config: RequestInit = { method: method || "POST", headers: myHeaders }
        if (body) config.body = JSON.stringify(body)
        const data = await fetch(url, config)
        const res = await data.json()
        return res?.data
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
        console.log(_)
        return null
    }
}



export const updateData = async ({ url, body, token,method }: GET_SERVER_DATA) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);
        const requestOptions: RequestInit = {
            headers: myHeaders,
            body: JSON.stringify(body),
            method: method || "POST"
        }
        if(body) requestOptions.body = JSON.stringify(body)
        const response = await fetch(url, requestOptions);
        if (!response.ok) throw new Error(response.statusText);
        const result = await response.json();
        return result
    } catch (error) {
        return null
    }
}