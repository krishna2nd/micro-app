import React from 'react';

const accentedCharsMap = {
  á: 'a',
  é: 'e',
  í: 'i',
  ó: 'o',
  ú: 'u',
  Á: 'A',
  É: 'E',
  Í: 'I',
  Ó: 'O',
  Ú: 'U'
};

export const removeAccent = text => {
  return text.replace(
    /[áéíóúÁÉÍÓÚ]/g,
    character => accentedCharsMap[character]
  );
};

export const highlightString = (displayString, keyWord, highlightClass) => {
  const index = displayString.toLowerCase().indexOf(keyWord.toLowerCase());
  if (index === -1) {
    return <span>{displayString}</span>;
  }
  return (
    <span>
      <span>{displayString.substring(0, index)}</span>
      <span className={highlightClass}>
        {displayString.substring(index, index + keyWord.length)}
      </span>
      <span>{displayString.substring(index + keyWord.length)}</span>
    </span>
  );
};
