import { EntityMetadataMap } from '@ngrx/data';

/**
 * All entities related to our application to be saved in the ngrx store.
 */
const entityMetadata: EntityMetadataMap = {
  Character: {},
  Death: {},
  Quote: {}
};

export const entityConfig = {
  entityMetadata,
};
