import { firebase, firebaseui } from 'firebaseui-angular';

export const environment = {
  firebase: {
    apiKey: 'AIzaSyBmDtaT90ZaNR1RTFGM5n9RIbmppbsZVKI',
    authDomain: 'forest-bjorn-photography.firebaseapp.com',
    projectId: 'forest-bjorn-photography',
    storageBucket: 'forest-bjorn-photography.appspot.com',
    messagingSenderId: '184115682031',
    appId: '1:184115682031:web:2df8228df49643c4e4d91a',
    measurementId: 'G-2SG24WEYBV',
  },
  production: false,
  firebaseUiAuthConfig: {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      {
        scopes: ['public_profile', 'email', 'user_likes', 'user_friends'],
        customParameters: {
          auth_type: 'reauthenticate',
        },
        provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      },
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      {
        requireDisplayName: false,
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      },
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
    ],
    tosUrl: '<your-tos-link>',
    privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
    credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
  },
};
