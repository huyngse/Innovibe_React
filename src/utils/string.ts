export function getFirstLetters(inputString: string): string {
    const words = inputString.split(' ');
    const firstLetters = words.map(word => word.charAt(0).toUpperCase());
    return firstLetters.join('');
}
