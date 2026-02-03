import {FirebaseOptions} from "firebase/app";

export interface Environment {
  firebase: FirebaseOptions;
  production: boolean;
}
