import firebase from 'firebase'
import { RecaptchaVerifier } from 'firebase/auth';
declare module '*.ttf';
declare global {
    interface Window { recaptchaVerifier: RecaptchaVerifier; }
}

window.recaptchaVerifier = window.recaptchaVerifier || {};