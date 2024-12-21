/**
 * 
 * @param str - string to check if it is a palindrome
 * @returns true if the string is a palindrome, false otherwise
 */
export const isPalindrome = (str: string | null | undefined): boolean => {

  if (!str) {
    return false;
  }

  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

export const hasValue = (str: string | null | undefined): boolean => {
  return str?.trim() !== '' && str !== null && str !== undefined;
}