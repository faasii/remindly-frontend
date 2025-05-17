

const BACKEND_URL = process.env.BACKEND_URL

export const apiRoutes = {
    getUserInfo: BACKEND_URL + "/api/v1/user/info"
}


export const clientApiRoutes = {
    getUserInfo: "backend/v1/user/info"
}