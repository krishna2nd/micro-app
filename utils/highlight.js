import { clean as removeDiacritics } from 'diacritic';
// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_special_characters
const specialCharsRegex = /[.*+?^${}()|[\]\\]/g;
// http://www.ecma-international.org/ecma-262/5.1/#sec-15.10.2.6
const wordCharacterRegex = /[a-z0-9_]/i;
const whitespacesRegex = /\s+/;

function escapeRegexCharacters(str) {
  return str.replace(specialCharsRegex, '\\$&');
}

export const highlightMatch = (text, query) => {
  text = removeDiacritics(text);
  query = removeDiacritics(query);

  return (
    query
      .trim()
      .split(whitespacesRegex)
      // If query is blank, we'll get empty string here, so let's filter it out.
      .filter(function(word) {
        return word.length > 0;
      })
      .reduce(function(result, word) {
        var wordLen = word.length;
        var prefix = wordCharacterRegex.test(word[0]) ? '\\b' : '';
        var regex = new RegExp(prefix + escapeRegexCharacters(word), 'i');
        var index = text.search(regex);

        if (index > -1) {
          result.push([index, index + wordLen]);

          // Replace what we just found with spaces so we don't find it again.
          text =
            text.slice(0, index) +
            new Array(wordLen + 1).join(' ') +
            text.slice(index + wordLen);
        }

        return result;
      }, [])
      .sort(function(match1, match2) {
        return match1[0] - match2[0];
      })
  );
};

export const highlightParse = (text, matches) => {
  var result = [];

  if (matches.length === 0) {
    result.push({
      text: text,
      highlight: false
    });
  } else {
    if (matches[0][0] > 0) {
      result.push({
        text: text.slice(0, matches[0][0]),
        highlight: false
      });
    }
  }

  matches.forEach(function(match, i) {
    var startIndex = match[0];
    var endIndex = match[1];

    result.push({
      text: text.slice(startIndex, endIndex),
      highlight: true
    });

    if (i === matches.length - 1) {
      if (endIndex < text.length) {
        result.push({
          text: text.slice(endIndex, text.length),
          highlight: false
        });
      }
    } else if (endIndex < matches[i + 1][0]) {
      result.push({
        text: text.slice(endIndex, matches[i + 1][0]),
        highlight: false
      });
    }
  });

  return result;
};

export const getMatchedParts = (text, term) =>
  highlightParse(text, highlightMatch(text, term));
