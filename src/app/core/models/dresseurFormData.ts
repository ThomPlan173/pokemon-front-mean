import { dresseur } from './dresseur';

export interface dresseurFormData {
  isUpdateMode: boolean;
  dresseurToUpdate?: dresseur;
  idToCreate?: number;
}
