import { ProfessionSelectionIds, ProfessionVariantSelection } from '../../../types/wiki';
import { fromDefault, makeGetters, Record } from '../../structures/Record';
import { CombatTechniquesSelection } from './CombatTechniquesSelection';

export interface RemoveCombatTechniquesSelection {
  id: ProfessionSelectionIds.COMBAT_TECHNIQUES;
  active: false;
}

export type VariantCombatTechniquesSelection =
  Record<CombatTechniquesSelection> |
  Record<RemoveCombatTechniquesSelection>;

const _RemoveCombatTechniquesSelection =
  fromDefault<RemoveCombatTechniquesSelection> ({
    id: ProfessionSelectionIds.COMBAT_TECHNIQUES,
    active: false,
  })

export const RemoveCombatTechniquesSelectionG = makeGetters (_RemoveCombatTechniquesSelection)

export const RemoveCombatTechniquesSelection =
  _RemoveCombatTechniquesSelection ({
    id: ProfessionSelectionIds.COMBAT_TECHNIQUES,
    active: false,
  })

export const isRemoveCombatTechniquesSelection =
  (obj: ProfessionVariantSelection): obj is Record<RemoveCombatTechniquesSelection> =>
    obj === RemoveCombatTechniquesSelection