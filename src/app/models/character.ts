/**
 * Holds the structure for a character to be used in our angular app.
 */
export class Character {
  /**
   * Unique Id of the character.
   */
  id: string;
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
