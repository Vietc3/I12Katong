import { Button, Stack,ButtonProps } from '@chakra-ui/react';
import {FRIST_CHARACTERS} from '../../constants/index';
import useColorTheme from '../../hooks/useColorTheme';


interface PropsFistCharacterItem extends ButtonProps {
    handleFristChar?:any
}


const FistCharacterItem = ({ children, handleFristChar }:PropsFistCharacterItem) => {
    const colors = useColorTheme();
    return (
        <>
                <Button onClick={()=>handleFristChar()} backgroundColor={colors.primary} color="white">
                     {children}
                 </Button>
        </>
    )
}

type Props = {
    handleFristChar?: any;
}


const FilterFirstCharacter = ({handleFristChar}:Props) => {

    return (
        <>
        <Stack w="100%" h="100%" direction="row" spacing={2} align="center">
        {
            FRIST_CHARACTERS.map((character:any)=>{
                return (
                <FistCharacterItem handleFristChar={()=>handleFristChar(character.value)}  key={character}>{character.title}</FistCharacterItem>
                )
            })
        }
      
         </Stack>
        </>
    )
}

export default FilterFirstCharacter;
