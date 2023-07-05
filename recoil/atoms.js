import { atom } from 'recoil';

export const favoriteToursState = atom({
	key: 'favoriteTours',
	default: [],
});
