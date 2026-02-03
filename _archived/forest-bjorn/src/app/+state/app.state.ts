import {Image} from "@mcalamosca/ui-components"
import {User} from '@angular/fire/auth'

export interface AppState {
  user: User | null;
  currentGalleryType: string;
  images: {
    [key: string]: Image[];
  };
}
