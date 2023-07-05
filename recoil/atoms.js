import { atom } from 'recoil';

export const currentImageState = atom({
	key: "currentImage",
	default: 0,
});

export const currentTourState = atom({
	key: "currentTour",
	default: 0,
});


export const favoriteToursState = atom({
	key: 'favoriteTours',
	default: [],
});
