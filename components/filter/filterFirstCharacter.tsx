import { Button, Stack,ButtonProps } from '@chakra-ui/react';
import {FRIST_CHARACTERS} from '../../constants/index';
import useColorTheme from '../../hooks/useColorTheme';


interface PropsFistCharacterItem extends ButtonProps {}


const FistCharacterItem = ({ children, ...props }:PropsFistCharacterItem) => {
    const colors = useColorTheme();
    return (
        <>
                <Button backgroundColor={colors.primary} color="white">
                     {children}
                 </Button>
        </>
    )
}


const FilterFirstCharacter = () => {

    return (
        <>
        <Stack w="100%" h="100%" direction="row" spacing={3} align="center">
        {
            FRIST_CHARACTERS.map((character:any)=>{
                return (
                <FistCharacterItem key={character}>{character.title}</FistCharacterItem>
                )
            })
        }
      
         </Stack>
        </>
    )
}

export default FilterFirstCharacter;
