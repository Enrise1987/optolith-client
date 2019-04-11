import { connect } from "react-redux";
import { Action } from "redux";
import { Just } from "../../Data/Maybe";
import { ReduxDispatch } from "../Actions/Actions";
import * as HerolistActions from "../Actions/HerolistActions";
import * as LocationActions from "../Actions/LocationActions";
import { HeroModel } from "../Models/Hero/HeroModel";
import { AppStateRecord } from "../Reducers/appReducer";
import { getAPObjectMap } from "../Selectors/adventurePointsSelectors";
import { getUnsavedHeroesById } from "../Selectors/herolistSelectors";
import { getUsers, getWiki } from "../Selectors/stateSelectors";
import { TabId } from "../Utilities/LocationUtils";
import { HerolistItem, HerolistItemDispatchProps, HerolistItemOwnProps, HerolistItemStateProps } from "../Views/Heroes/HerolistItem";

const mapStateToProps = (state: AppStateRecord, props: HerolistItemOwnProps) => ({
  ap: getAPObjectMap (HeroModel.A.id (props .hero)) (state, props),
  unsavedHeroesById: getUnsavedHeroesById (state),
  users: getUsers (state),
  wiki: getWiki (state),
})

const mapDispatchToProps = (
  dispatch: ReduxDispatch<Action>,
  { l10n }: HerolistItemOwnProps
) => ({
  loadHero (id: string) {
    dispatch (HerolistActions.loadHero (id))
  },
  showHero () {
    dispatch (LocationActions.setTab (TabId.Profile))
  },
  saveHero (id: string) {
    dispatch (HerolistActions.saveHero (l10n) (Just (id)))
  },
  saveHeroAsJSON (id: string) {
    dispatch (HerolistActions.exportHeroValidate (l10n) (id))
  },
  deleteHero (id: string) {
    dispatch (HerolistActions.deleteHeroValidate (l10n) (id))
  },
  duplicateHero (id: string) {
    dispatch (HerolistActions.duplicateHero (id))
  },
})

const connectHerolistItem =
  connect<HerolistItemStateProps, HerolistItemDispatchProps, HerolistItemOwnProps, AppStateRecord> (
    mapStateToProps,
    mapDispatchToProps
  )

export const HerolistItemContainer = connectHerolistItem (HerolistItem)
