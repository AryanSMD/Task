import api from "@/services/api"

export async function loginAPI(body: UserInfo) {
    try {
        const response = await api.post('main/signup', body);
        if (response.status === 200) {
            localStorage.setItem('accessToken', response.data.data.access);
            localStorage.setItem('refreshToken', response.data.data.refresh);

            return response;
        }

    } catch (err) {
        return err;
    }
}