import {
  patchState,
  signalStore,
  signalStoreFeature,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

export function withFavourites<Entity extends { id: number }>(
  entites: () => Entity[]
) {
  return signalStoreFeature(
    withState({
      favouriteIds: [] as number[],
    }),
    withComputed((state) => ({
      hasFavourites: () => state.favouriteIds().length > 0,
      favourites: () =>
        entites().filter(({ id: entityId }) =>
          state.favouriteIds().includes(entityId)
        ),
    })),
    withMethods((state) => ({
      addFavourite(id: number) {
        patchState(state, ({ favouriteIds }) => ({
          favouriteIds: [...favouriteIds, id],
        }));
      },

      removeFavourite(id: number) {
        patchState(state, ({ favouriteIds }) => ({
          favouriteIds: favouriteIds.filter(
            (favouriteId) => favouriteId !== id
          ),
        }));
      },
    }))
  );
}
