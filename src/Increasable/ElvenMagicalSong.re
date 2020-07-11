type t = {
  id: int,
  name: string,
  check: (int, int, int),
  checkMod: option(CheckModifier.t),
  effect: string,
  aeCost: string,
  aeCostShort: string,
  skill: option(int),
  property: int,
  ic: IC.t,
  src: list(SourceRef.t),
  errata: list(Erratum.t),
};

module Decode = {
  open Json.Decode;
  open JsonStrict;

  type tL10n = {
    id: int,
    name: string,
    effect: string,
    aeCost: string,
    aeCostShort: string,
    src: list(SourceRef.t),
    errata: list(Erratum.t),
  };

  let tL10n = json => {
    id: json |> field("id", int),
    name: json |> field("name", string),
    effect: json |> field("effect", string),
    aeCost: json |> field("aeCost", string),
    aeCostShort: json |> field("aeCostShort", string),
    src: json |> field("src", SourceRef.Decode.list),
    errata: json |> field("errata", Erratum.Decode.list),
  };

  type tUniv = {
    id: int,
    check1: int,
    check2: int,
    check3: int,
    checkMod: option(CheckModifier.t),
    skill: option(int),
    property: int,
    ic: IC.t,
  };

  let tUniv = json => {
    id: json |> field("id", int),
    check1: json |> field("check1", int),
    check2: json |> field("check2", int),
    check3: json |> field("check3", int),
    checkMod: json |> optionalField("checkMod", CheckModifier.Decode.t),
    skill: json |> optionalField("skill", int),
    property: json |> field("property", int),
    ic: json |> field("ic", IC.Decode.t),
  };

  let t = (univ: tUniv, l10n: tL10n) => (
    univ.id,
    {
      id: univ.id,
      name: l10n.name,
      check: (univ.check1, univ.check2, univ.check3),
      checkMod: univ.checkMod,
      effect: l10n.effect,
      aeCost: l10n.aeCost,
      aeCostShort: l10n.aeCostShort,
      skill: univ.skill,
      property: univ.property,
      ic: univ.ic,
      src: l10n.src,
      errata: l10n.errata,
    },
  );

  let all = (yamlData: Yaml_Raw.yamlData) =>
    Yaml_Zip.zipBy(
      Ley_Int.show,
      t,
      x => x.id,
      x => x.id,
      yamlData.elvenMagicalSongsUniv |> list(tUniv),
      yamlData.elvenMagicalSongsL10n |> list(tL10n),
    )
    |> Ley_IntMap.fromList;
};
