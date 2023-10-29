import { HStack, Icon, Switch, useColorMode } from '@chakra-ui/react';
import { BsMoon, BsSunFill } from 'react-icons/bs';

const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack>
            <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
            <Icon as={colorMode === 'dark' ? BsMoon : BsSunFill} />
        </HStack>
    );
};

export default ColorModeSwitch;