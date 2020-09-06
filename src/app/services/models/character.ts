/**
 * Holds the structure for a character as returned directly by the API.
 */
export class ApiCharacter {
  /**
   * Unique Id of the character.
   */
  char_id: string;
  /**
   * A character's full name.
   */
  name: string;
  /**
   * A character's birthday.
   */
  birthday: string;
  /**
   * List of character's known occupations.
   */
  occupation: string[];
  /**
   * Character's image url.
   */
  img: string;
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
  appearance: number[];
  /**
   * The actor / actress that portrayed the character.
   */
  portrayed: string;
  /**
   * Series that the character is involved with, like 'Breaking Bad' or 'Better
   * Call Saul'.
   */
  category: string;
}
