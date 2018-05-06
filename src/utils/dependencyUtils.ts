import { Categories } from '../constants/Categories';
import * as Data from '../types/data.d';
import * as Reusable from '../types/reusable.d';
import { getCategoryById } from './IDUtils';
import * as AddDependencyUtils from './addDependencyUtils';
import * as CheckPrerequisiteUtils from './checkPrerequisiteUtils';
import { existsFn } from './exists';
import { match } from './match';
import { pipe } from './pipe';
import { getPrimaryAttributeId } from './primaryAttributeUtils';
import { ActivatableReducer } from './reducerUtils';
import * as RemoveDependencyUtils from './removeDependencyUtils';

type ModifyIncreasableDependency =
  (state: Data.HeroDependent, id: string, value: number | Reusable.ValueOptionalDependency) =>
  Data.HeroDependent;

type ModifyActivatableDependency =
  (state: Data.HeroDependent, id: string, value: Data.ActivatableInstanceDependency) =>
  Data.HeroDependent;

const createPrimaryAttributeDependencyModifier = (
  state: Data.HeroDependent,
  modify: ModifyIncreasableDependency,
) => (req: Reusable.RequiresPrimaryAttribute) => pipe(
  () => getPrimaryAttributeId(state.specialAbilities, req.type),
  existsFn((id: string) => modify(state, id, req.value), state)
)();

const createIncreasableDependencyModifier = (
  state: Data.HeroDependent,
  modifyAttribute: ModifyIncreasableDependency,
  modify: ModifyIncreasableDependency,
  sourceId: string,
) => (req: Reusable.RequiresIncreasableObject) => {
  return match<string | string[], Data.HeroDependent>(req.id)
    .on((id): id is string[] => typeof id === 'object', id => pipe(
      () => ({ value: req.value, origin: sourceId }),
      add => id.reduce((state, e) => {
        if (getCategoryById(e) === Categories.ATTRIBUTES) {
          return modifyAttribute(state, e, add);
        }
        else {
          return modify(state, e, add);
        }
      }, state)
    )())
    .on(id => getCategoryById(id) === Categories.ATTRIBUTES, id => {
      return modifyAttribute(state, id, req.value);
    })
    .otherwise(id => {
      return modify(state, id, req.value);
    });
};

const createActivatableDependencyModifier = (
  state: Data.HeroDependent,
  modify: ModifyActivatableDependency,
  sourceId: string,
) => (req: Reusable.RequiresActivatableObject) => {
  const { id: _, active, ...other } = req;

  return match<string | string[], Data.HeroDependent>(req.id)
    .on((id): id is string[] => typeof id === 'object', (id: string[]) => {
      return pipe(
        () => ({ origin: sourceId }),
        add => {
          if (Object.keys(req).length === 2 && typeof active === 'boolean') {
            return {
              ...add,
              active,
            };
          }
          else {
            return {
              ...add,
              ...other,
            };
          }
        },
        add => id.reduce((state, e) => modify(state, e, add), state)
      )();
    })
    .otherwise(id => {
      return pipe<boolean | Reusable.ActiveDependency, Data.HeroDependent>(
        () => {
          if (Object.keys(req).length === 2 && typeof active === 'boolean') {
            return active;
          }
          else if (Array.isArray(req.sid)) {
            return { active, ...other };
          }
          else {
            return other;
          }
        },
        add => modify(state, id, add),
      )();
    });
};

const modifyDependencies = (
  state: Data.HeroDependent,
  prerequisites: Data.AllRequirements[],
  sourceId: string,
  modifyAttributeDependency: ModifyIncreasableDependency,
  modifyIncreasableDependency: ModifyIncreasableDependency,
  modifyActivatableDependency: ModifyActivatableDependency,
): Data.HeroDependent => prerequisites.reduce<Data.HeroDependent>(
  (state, req) => match<Data.AllRequirements, Data.HeroDependent>(req)
    .on(CheckPrerequisiteUtils.isDependentPrerequisite, req => {
      return match<Data.DependentPrerequisite, Data.HeroDependent>(req)
        .on(
          CheckPrerequisiteUtils.isRequiringPrimaryAttribute,
          createPrimaryAttributeDependencyModifier(
            state,
            modifyAttributeDependency,
          ),
        )
        .on(
          CheckPrerequisiteUtils.isRequiringIncreasable,
          createIncreasableDependencyModifier(
            state,
            modifyAttributeDependency,
            modifyIncreasableDependency,
            sourceId,
          ),
        )
        .on(
          req => req.sid !== 'GR',
          createActivatableDependencyModifier(
            state,
            modifyActivatableDependency,
            sourceId,
          ),
        )
        .otherwise(() => state);
    })
    .otherwise(() => state),
  { ...state }
);

/**
 * Adds dependencies to all required entries to ensure rule validity. The
 * returned Map needs to be merged into the main Map in ListStore.
 * @param state All entries available for dependencies.
 * @param obj The entry of which requirements you want to add dependencies for.
 * @param adds Additional (computed) requirements that are not included in the
 * static requirements.
 * @param sel The SID from the current selection.
 */
export const addDependencies = (
  state: Data.HeroDependent,
  prerequisites: Data.AllRequirements[],
  sourceId: string,
): Data.HeroDependent => modifyDependencies(
  state,
  prerequisites,
  sourceId,
  AddDependencyUtils.addAttributeDependency,
  AddDependencyUtils.addIncreasableDependency,
  AddDependencyUtils.addActivatableDependency,
);

/**
 * Provides a wrapper for `DependentUtils#addDependencies` to be able to use it
 * in `ListUtils#mergeOptionalStateReducers`.
 */
export const addDependenciesReducer = (
  prerequisites: Data.AllRequirements[],
  sourceId: string,
): ActivatableReducer =>
  state => addDependencies(state, prerequisites, sourceId);

/**
 * Removes dependencies from all required entries to ensure rule validity.
 * @param obj The entry of which requirements you want to remove dependencies
 * from.
 * @param adds Additional (computed) requirements that are not included in the
 * static requirements.
 * @param sel The SID from the current selection.
 */
export const removeDependencies = (
  state: Data.HeroDependent,
  prerequisites: Data.AllRequirements[],
  sourceId: string,
): Data.HeroDependent => modifyDependencies(
  state,
  prerequisites,
  sourceId,
  RemoveDependencyUtils.removeAttributeDependency,
  RemoveDependencyUtils.removeIncreasableDependency,
  RemoveDependencyUtils.removeActivatableDependency,
);