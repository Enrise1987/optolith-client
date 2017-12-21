import { PROFESSIONS, SPECIAL_ABILITIES } from '../constants/Categories';
import { WikiState } from '../reducers/wikiReducer';
import { ActivatableInstance } from '../types/data';
import { Profession as ProfessionView } from '../types/view';
import { Advantage, Blessing, Cantrip, CombatTechnique, Culture, Disadvantage, ItemTemplate, LiturgicalChant, Profession, Race, Skill, SpecialAbility, Spell } from '../types/wiki';
import { getWikiStateKeyById } from './IDUtils';

export function get(state: WikiState, id: string) {
	const key = getWikiStateKeyById(id);
	const slice = key && state[key];
	return slice && slice.get(id);
}

type ElementMixed = ActivatableInstance | Race | Culture | ProfessionView | Advantage | Disadvantage | Skill | CombatTechnique | SpecialAbility | Spell | Cantrip | LiturgicalChant | Blessing | ItemTemplate;

export function isItemTemplateFromMixed(obj: ElementMixed): obj is ItemTemplate {
	return obj.hasOwnProperty('id') && obj.hasOwnProperty('name') && obj.hasOwnProperty('isTemplateLocked');
}

type Element = Race | Culture | Profession | Advantage | Disadvantage | Skill | CombatTechnique | SpecialAbility | Spell | Cantrip | LiturgicalChant | Blessing | ItemTemplate;

export function isItemTemplate(obj: Element): obj is ItemTemplate {
	return obj.hasOwnProperty('id') && obj.hasOwnProperty('name') && obj.hasOwnProperty('isTemplateLocked');
}

export function isProfession(obj: Element): obj is Profession {
	return !isItemTemplate(obj) && obj.category === PROFESSIONS;
}

export function isSpecialAbility(obj: Element): obj is SpecialAbility {
	return !isItemTemplate(obj) && obj.category === SPECIAL_ABILITIES;
}