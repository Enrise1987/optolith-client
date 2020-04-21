// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Static_Erratum$OptolithClient = require("./Static_Erratum.bs.js");
var Static_SourceRef$OptolithClient = require("./Static_SourceRef.bs.js");

function tL10n(json) {
  return {
          id: Json_decode.field("id", Json_decode.$$int, json),
          name: Json_decode.field("name", Json_decode.string, json),
          description: Json_decode.field("description", Json_decode.string, json),
          src: Json_decode.field("src", Static_SourceRef$OptolithClient.Decode.list, json),
          errata: Json_decode.field("errata", Static_Erratum$OptolithClient.Decode.list, json)
        };
}

function tUniv(json) {
  return {
          id: Json_decode.field("id", Json_decode.$$int, json),
          level: Json_decode.field("level", Json_decode.$$int, json),
          subject: Json_decode.field("subject", Json_decode.$$int, json)
        };
}

function t(univ, l10n) {
  return {
          id: univ.id,
          name: l10n.name,
          level: univ.level,
          subject: univ.subject,
          description: l10n.description,
          src: l10n.src,
          errata: l10n.errata
        };
}

var Decode = {
  tL10n: tL10n,
  tUniv: tUniv,
  t: t
};

exports.Decode = Decode;
/* No side effect */