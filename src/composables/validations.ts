import * as yup from 'yup'
import YupPassword from 'yup-password'
YupPassword(yup)

export const validation =  {
    login: yup.object({
        email: yup.string()
            .email('ایمیل معتبر نیست')
            .required('ایمیل را وارد کنید'),
        password: yup.string()
            .required('رمز عبور را وارد کنید')
            .minNumbers(1, 'رمز عبور باید شامل 1 عدد باشد')
            .minSymbols(1, 'رمز عبور باید شامل 1 نماد باشد')
            .minLowercase(1, 'رمز عبور باید شامل 1 حرف کوچک انگلیسی باشد')
            .minUppercase(1, 'رمز عبور باید شامل 1 حرف بزرگ انگلیسی باشد')
            .min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد')
    }),
}