import React, { useState } from 'react'

//Components
import Input from '../components/Input';
import Container from '../components/Container';
import PalidromeDisplay from '../components/PalidromeDisplay';

//Utility function
import { hasValue, isPalindrome } from '../utils/utilityFunctions';

const Home: React.FC = () => {
  const [palindrome, setPalindrome] = useState<boolean | null>(null);

  const onChange = (value: string | null) => {
    if (!hasValue(value)) {
      setPalindrome(null);
    }
    else {
      setPalindrome(isPalindrome(value))
    }
  }

  return (
    <Container>
      <Input 
        onChange={(e) => onChange(e.target.value)}
        className='mx-60'
        type={palindrome === true ? 'success' : palindrome === false ? 'error' : 'default'}
      />

      <PalidromeDisplay palindrome={palindrome} />
    </Container>
  )
}

export default Home;
