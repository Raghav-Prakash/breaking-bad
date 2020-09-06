// id integer Unique Id per character
// name string A character's full name
// birthday string A character's birthday
// occupation array List of character's known occupation
// img string Character's image
// status string Are they alive (or did Heisenberg get to them??)
// nickname string A known nickname they are referred as.
// appearance array List of seasons that the character appeared in
// portrayed string The actor / actress that portrayed the character
// category array Series that the character is involved with.

/**
 * Holds the structure for a character to be used in our angular app.
 */
export class Character {
  /**
   * Unique Id of the character as returned from the API.
   */
  id: number;
  /**
   * A character's full name.
   */
  name: string;
  /**
   * A character's birthday.
   */
  birthday: Date;
  /**
   * List of character's known occupations.
   */
  occupations: string[];
  /**
   * Character's image url.
   */
  image: string;
  /**
   * Status of the character, whether alive or not.
   */
  status: string;
  /**
   * A known nickname they are referred as.
   */
  nickname: string;
  /**
   * List of seasons that the character appeared in.
   */
  seasons: string[];
  /**
   * The actor / actress that portrayed the character.
   */
  actor: string;
  /**
   * Series that the character is involved with, like 'Breaking Bad' or 'Better
   * Call Saul'.
   */
  series: string;
}
