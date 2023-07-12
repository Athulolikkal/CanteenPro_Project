import {auth} from '../Firebase.config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';


export const sentOtp = async (num:string) => {

    try {

        const recaptchaVerifier = await new RecaptchaVerifier('recaptcha', {}, auth)
        console.log('recaptchaverified');
        const confirmation = await signInWithPhoneNumber(auth, num, recaptchaVerifier)
        return confirmation
    } catch (err) {
        console.log(err, 'error on sent otp');
    }
}

