// ------------------------ URLs --------------------------------------------
/**
 * The API URL to load all characters.
 */
export const charactersBaseUrl = 'https://www.breakingbadapi.com/api/characters';

// ------------------------ Regexs --------------------------------------------
/**
 * Regex to check the url for the path starting with "breaking-bad".
 */
export const breakingBadUrlRegex: RegExp = /(\/(breaking-bad))(\/(.+))?/;
/**
* Regex to check the url for the path starting with "better-call-saul".
*/
export const betterCallSaulUrlRegex: RegExp = /(\/(better-call-saul))(\/(.+))?/;
