import { LoadHeroAction } from '../actions/HerolistActions';
import { AddPetAction, RemovePetAction, SetPetAction, SetPetsSortOrderAction } from '../actions/PetActions';
import * as ActionTypes from '../constants/ActionTypes';

import { PetInstance, ToListById } from '../types/data.d';
import { Store } from './Store';

type Action = LoadHeroAction | AddPetAction | RemovePetAction | SetPetAction | SetPetsSortOrderAction;

class PetsStoreStatic extends Store {
	private petsById: { [id: string]: PetInstance } = {};
	private pets: string[] = [];
	readonly dispatchToken: string;

	get(id: string) {
		return this.petsById[id];
	}

	getAll() {
		return this.pets.map(e => this.petsById[e]);
	}

	getAllById() {
		return this.petsById;
	}

	private updateAll(pets: ToListById<PetInstance>) {
		for (const id in pets) {
			if (pets.hasOwnProperty(id)) {
				this.petsById[id] = pets[id];
				this.pets.push(id);
			}
		}
	}

	private addPet(raw: PetInstance, id: string) {
		this.petsById[id] = { ...raw, id };
		this.pets.push(id);
	}

	private savePet(id: string, item: PetInstance) {
		this.petsById[id] = item;
	}

	private removePet(id: string) {
		delete this.petsById[id];
		this.pets.some((e, i) => {
			if (e === id) {
				this.pets.splice(i, 1);
				return true;
			}
			return false;
		});
	}
}

export const PetsStore = new PetsStoreStatic();