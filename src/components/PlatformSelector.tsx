import { Button, Menu, MenuButton, MenuItem, MenuList, Skeleton } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../hooks/useGames';

interface Props {
    selectedPlatform: Platform | null;
    onSelectPlatform: (platform: Platform) => void;
}
const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
    const { data, error, isLoading } = usePlatforms();

    if (error) return null;

    return (
        <Skeleton isLoaded={!isLoading}>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
                <MenuList>
                    {data.map((platform) => (
                        <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Skeleton>
    );
};

export default PlatformSelector;