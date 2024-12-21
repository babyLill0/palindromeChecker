import DisplaySection from "./DisplaySection";

type PalindromeDisplayProps = {
    palindrome: boolean | null;
}

function PalidromeDisplay({palindrome}: PalindromeDisplayProps) {
    
    if (palindrome === null) {
        return null;
    }
  
    return (
        <DisplaySection>
            <p className={`mt-4 text-2xl py-2 px-4 rounded-full bg-gray-50 font-bold ${palindrome ? 'text-green-500' : 'text-red-500'}`}>
                {palindrome ? 'This is a palindrome!' : 'This is not a palindrome!'}
            </p>
        </DisplaySection> 
    )
}

export default PalidromeDisplay