import * as React from 'react';
import { AvatarChange } from '../../components/AvatarChange';
import { AvatarWrapper } from '../../components/AvatarWrapper';
import { BorderButton } from '../../components/BorderButton';
import { Slidein } from '../../components/Slidein';
import { TextField } from '../../components/TextField';
import { InputTextEvent, PetEditorInstance, UIMessages } from '../../types/data.d';
import { _translate } from '../../utils/I18n';

export interface PetEditorProps {
	data?: PetEditorInstance;
	locale: UIMessages;
	setAvatar(path: string): void;
	setName(event: InputTextEvent): void;
	setSize(event: InputTextEvent): void;
	setType(event: InputTextEvent): void;
	setSpentAp(event: InputTextEvent): void;
	setTotalAp(event: InputTextEvent): void;
	setCourage(event: InputTextEvent): void;
	setSagacity(event: InputTextEvent): void;
	setIntuition(event: InputTextEvent): void;
	setCharisma(event: InputTextEvent): void;
	setDexterity(event: InputTextEvent): void;
	setAgility(event: InputTextEvent): void;
	setConstitution(event: InputTextEvent): void;
	setStrength(event: InputTextEvent): void;
	setLp(event: InputTextEvent): void;
	setAe(event: InputTextEvent): void;
	setSpi(event: InputTextEvent): void;
	setTou(event: InputTextEvent): void;
	setPro(event: InputTextEvent): void;
	setIni(event: InputTextEvent): void;
	setMov(event: InputTextEvent): void;
	setAttack(event: InputTextEvent): void;
	setAt(event: InputTextEvent): void;
	setPa(event: InputTextEvent): void;
	setDp(event: InputTextEvent): void;
	setReach(event: InputTextEvent): void;
	setActions(event: InputTextEvent): void;
	setTalents(event: InputTextEvent): void;
	setSkills(event: InputTextEvent): void;
	setNotes(event: InputTextEvent): void;
	hideSlidein(): void;
	save(): void;
}

export interface PetEditorState {
	isAvatarChangeOpened: boolean;
}

export class PetEditor extends React.Component<PetEditorProps, PetEditorState> {
	state = {
		isAvatarChangeOpened: false
	};

	openAvatarChange = () => this.setState(() => ({ isAvatarChangeOpened: true }));
	closeAvatarChange = () => this.setState(() => ({ isAvatarChangeOpened: false }));

	saveEdit = () => {
		this.props.save();
		this.props.hideSlidein();
	}

	render() {
		const { data, hideSlidein, locale, setActions, setAe, setAgility, setAt, setAttack, setCharisma, setConstitution, setCourage, setDexterity, setDp, setIni, setIntuition, setLp, setMov, setName, setPa, setPro, setReach, setSagacity, setSize, setSkills, setSpentAp, setSpi, setStrength, setTalents, setTotalAp, setTou, setType, setNotes } = this.props;

		return (
			<Slidein isOpened={!!data} close={hideSlidein}>
				{data && <div className="pet-edit">
					<div className="left">
						<AvatarWrapper src={data.avatar} onClick={this.openAvatarChange} />
					</div>
					<div className="right">
						<div className="row">
							<TextField label={_translate(locale, 'pet.name')} value={data.name} onChange={setName} />
							<TextField label={_translate(locale, 'pet.sizecategory')} value={data.size} onChange={setSize} />
							<TextField label={_translate(locale, 'pet.type')} value={data.type} onChange={setType} />
							<TextField label={_translate(locale, 'pet.apspent')} value={data.spentAp} onChange={setSpentAp} />
							<TextField label={_translate(locale, 'pet.totalap')} value={data.totalAp} onChange={setTotalAp} />
						</div>
						<div className="row">
							<TextField label={_translate(locale, 'pet.cou')} value={data.cou} onChange={setCourage} />
							<TextField label={_translate(locale, 'pet.sgc')} value={data.sgc} onChange={setSagacity} />
							<TextField label={_translate(locale, 'pet.int')} value={data.int} onChange={setIntuition} />
							<TextField label={_translate(locale, 'pet.cha')} value={data.cha} onChange={setCharisma} />
							<TextField label={_translate(locale, 'pet.dex')} value={data.dex} onChange={setDexterity} />
							<TextField label={_translate(locale, 'pet.agi')} value={data.agi} onChange={setAgility} />
							<TextField label={_translate(locale, 'pet.con')} value={data.con} onChange={setConstitution} />
							<TextField label={_translate(locale, 'pet.str')} value={data.str} onChange={setStrength} />
						</div>
						<div className="row">
							<TextField label={_translate(locale, 'pet.lp')} value={data.lp} onChange={setLp} />
							<TextField label={_translate(locale, 'pet.ae')} value={data.ae} onChange={setAe} />
							<TextField label={_translate(locale, 'pet.spi')} value={data.spi} onChange={setSpi} />
							<TextField label={_translate(locale, 'pet.tou')} value={data.tou} onChange={setTou} />
							<TextField label={_translate(locale, 'pet.pro')} value={data.pro} onChange={setPro} />
							<TextField label={_translate(locale, 'pet.ini')} value={data.ini} onChange={setIni} />
							<TextField label={_translate(locale, 'pet.mov')} value={data.mov} onChange={setMov} />
						</div>
						<div className="row">
							<TextField label={_translate(locale, 'pet.attack')} value={data.attack} onChange={setAttack} />
							<TextField label={_translate(locale, 'pet.at')} value={data.at} onChange={setAt} />
							<TextField label={_translate(locale, 'pet.pa')} value={data.pa} onChange={setPa} />
							<TextField label={_translate(locale, 'pet.dp')} value={data.dp} onChange={setDp} />
							<TextField label={_translate(locale, 'pet.reach')} value={data.reach} onChange={setReach} />
						</div>
						<div className="row">
							<TextField label={_translate(locale, 'pet.actions')} value={data.actions} onChange={setActions} />
							<TextField label={_translate(locale, 'pet.skills')} value={data.talents} onChange={setTalents} />
							<TextField label={_translate(locale, 'pet.specialabilities')} value={data.skills} onChange={setSkills} />
						</div>
						<div className="row">
							<TextField label={_translate(locale, 'pet.notes')} value={data.notes} onChange={setNotes} />
						</div>
						<BorderButton
							label={_translate(locale, 'actions.save')}
							onClick={this.saveEdit}
							/>
					</div>
				</div>}
				<AvatarChange
					{...this.props}
					setPath={this.props.setAvatar}
					close={this.closeAvatarChange}
					isOpened={this.state.isAvatarChangeOpened}
					/>
			</Slidein>
		);
	}
}