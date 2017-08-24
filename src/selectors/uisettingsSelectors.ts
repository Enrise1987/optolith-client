import { AppState } from '../reducers/app';

export const getUISettingsState = (state: AppState) => state.ui.settings;
export const getHerolistSortOrder = (state: AppState) => state.ui.settings.herolistSortOrder;
export const getHerolistVisibilityFilter = (state: AppState) => state.ui.settings.herolistVisibilityFilter;
export const getRacesSortOrder = (state: AppState) => state.ui.settings.racesSortOrder;
export const getRacesValueVisibility = (state: AppState) => state.ui.settings.racesValueVisibility;
export const getCulturesSortOrder = (state: AppState) => state.ui.settings.culturesSortOrder;
export const getCulturesVisibilityFilter = (state: AppState) => state.ui.settings.culturesVisibilityFilter;
export const getCulturesValueVisibility = (state: AppState) => state.ui.settings.culturesValueVisibility;
export const getProfessionsSortOrder = (state: AppState) => state.ui.settings.professionsSortOrder;
export const getProfessionsVisibilityFilter = (state: AppState) => state.ui.settings.professionsVisibilityFilter;
export const getProfessionsGroupVisibilityFilter = (state: AppState) => state.ui.settings.professionsGroupVisibilityFilter;
export const getProfessionsFromExpansionsVisibility = (state: AppState) => state.ui.settings.professionsFromExpansionsVisibility;
export const getAdvantagesDisadvantagesCultureRatingVisibility = (state: AppState) => state.ui.settings.advantagesDisadvantagesCultureRatingVisibility;
export const getTalentsSortOrder = (state: AppState) => state.ui.settings.talentsSortOrder;
export const getTalentsCultureRatingVisibility = (state: AppState) => state.ui.settings.talentsCultureRatingVisibility;
export const getCombatTechniquesSortOrder = (state: AppState) => state.ui.settings.combatTechniquesSortOrder;
export const getSpecialAbilitiesSortOrder = (state: AppState) => state.ui.settings.specialAbilitiesSortOrder;
export const getSpellsSortOrder = (state: AppState) => state.ui.settings.spellsSortOrder;
export const getSpellsUnfamiliarVisibility = (state: AppState) => state.ui.settings.spellsUnfamiliarVisibility;
export const getLiturgiesSortOrder = (state: AppState) => state.ui.settings.liturgiesSortOrder;
export const getEquipmentSortOrder = (state: AppState) => state.ui.settings.equipmentSortOrder;
export const getEquipmentGroupVisibilityFilter = (state: AppState) => state.ui.settings.equipmentGroupVisibilityFilter;
export const getEnableActiveItemHints = (state: AppState) => state.ui.settings.enableActiveItemHints;
export const getSheetCheckAttributeValueVisibility = (state: AppState) => state.ui.settings.sheetCheckAttributeValueVisibility;