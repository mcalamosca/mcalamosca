import {Image} from "@mcalamosca/ui-components"
import {User} from '@angular/fire/auth'

export interface AppState {
  user: User | null,
  images: {
    drone: Image[]
  }
}
