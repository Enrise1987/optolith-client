import { Categories } from '../../constants/Categories';
import { CheckModifier, EntryWithCategory } from '../../types/wiki';
import { List } from '../structures/List';
import { Maybe, Nothing } from '../structures/Maybe';
import { fromDefault, makeGetters, Record } from '../structures/Record';
import { SourceLink } from './sub/SourceLink';

export interface LiturgicalChant {
  id: string
  name: string
  aspects: List<number>
  category: Categories
  check: List<string>
  checkmod: Maybe<CheckModifier>
  gr: number
  ic: number
  tradition: List<number>
  effect: string
  castingTime: string
  castingTimeShort: string
  cost: string
  costShort: string
  range: string
  rangeShort: string
  duration: string
  durationShort: string
  target: string
  src: List<Record<SourceLink>>
}

export const LiturgicalChant =
  fromDefault<LiturgicalChant> ({
    id: '',
    name: '',
    aspects: List.empty,
    category: Categories.LITURGIES,
    check: List.empty,
    checkmod: Nothing,
    gr: 0,
    ic: 0,
    tradition: List.empty,
    effect: '',
    castingTime: '',
    castingTimeShort: '',
    cost: '',
    costShort: '',
    range: '',
    rangeShort: '',
    duration: '',
    durationShort: '',
    target: '',
    src: List.empty,
  })

export const LiturgicalChantG = makeGetters (LiturgicalChant)

export const isLiturgicalChant =
  (r: EntryWithCategory) => LiturgicalChantG.category (r) === Categories.LITURGIES