import api from "@/services/axios"
import type { AxiosError, AxiosResponse } from "axios";

export async function loginAPI(body: UserInfo) {
    try {
        const response = await api.post('main/signup', body);
        if (response.status === 200) {
            localStorage.setItem('accessToken', response.data.data.access);
            localStorage.setItem('refreshToken', response.data.data.refresh);

            return response as AxiosResponse;
        }

    } catch (err) {
        return err as AxiosError;
    }
}

export async function getFormsAPI(body: { page: number, per_page: number }) {
    try {
        const response = await api.get(`main/forms?page=${ body.page }&per_page=${ body.per_page }`);
        if (response.status === 200) {

            return response as AxiosResponse;
        }

    } catch (err) {
        return err as AxiosError;
    }
}

export async function createFormAPI(body: Form) {
    try {
        const response = await api.post('main/form', body);
        if (response.status === 200) {

            return response as AxiosResponse;
        }

    } catch (err) {
        return err as AxiosError;
    }
}

export async function updateFormAPI(body: Form) {
    try {
        const response = await api.put(`main/form?form_id=${ body.form_id }`, body);
        if (response.status === 200) {

            return response as AxiosResponse;
        }

    } catch (err) {
        return err as AxiosError;
    }
}

export async function removeFormAPI(form_id: string) {
    try {
        const response = await api.delete(`main/form?form_id=${ form_id }`);
        if (response.status === 200) {

            return response as AxiosResponse;
        }

    } catch (err) {
        return err as AxiosError;
    }
}

export async function getOneFormAPI(form_id: string) {
    try {
        const response = await api.get(`main/form?form_id=${ form_id }`);
        if (response.status === 200) {

            return response as AxiosResponse;
        }

    } catch (err) {
        return err as AxiosError;
    }
}