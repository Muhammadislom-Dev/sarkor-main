import React, { useState, useEffect } from "react";
export const Uzbek = [];
export const Russian = [];
export const English = [];

function Lang() {
  useEffect(
    () => {
        fetch('https://api.i18nexus.com/project_resources/translations/uz/default.json?api_key=_PjTwNSntcxTr_z2d91_Xg')
        .then(response => response.json())
        .then(json => Uzbek.push(json))
        fetch('https://api.i18nexus.com/project_resources/translations/ru/default.json?api_key=_PjTwNSntcxTr_z2d91_Xg')
        .then(response => response.json())
        .then(json => Russian.push(json))
        fetch('https://api.i18nexus.com/project_resources/translations/en/default.json?api_key=_PjTwNSntcxTr_z2d91_Xg')
        .then(response => response.json())
        .then(json => English.push(json))
    },
    []
  );

  return null;
}

export default Lang;
