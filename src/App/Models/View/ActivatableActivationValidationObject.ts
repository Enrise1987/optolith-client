import { Maybe, Nothing } from "../../../Data/Maybe";
import { fromDefault } from "../../../Data/Record";

export interface ActivatableActivationValidation {
  disabled: boolean
  maxLevel: Maybe<number>
  minLevel: Maybe<number>
}

export const ActivatableActivationValidation =
  fromDefault<ActivatableActivationValidation> ({
    disabled: false,
    maxLevel: Nothing,
    minLevel: Nothing,
  })