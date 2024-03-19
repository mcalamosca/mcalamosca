import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

// Initialize Firebase
const app = initializeApp(environment.firebase);

// Initialize Firebase Authentication
const auth = getAuth(app);

connectAuthEmulator(auth, 'http://localhost:9099');

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
