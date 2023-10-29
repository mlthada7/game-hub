import { Button, HStack, Heading, Image, List, ListItem } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import GenreListSkeleton from './GenreListSkeleton';

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    if (error) return null;
    // if (isLoading) return <Spinner />
    if (isLoading) return <GenreListSkeleton />;

    return (
        <>
            <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
            <List>
                {data.map(genre => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image objectFit='cover' src={getCroppedImageUrl(genre.image_background)} boxSize='32px' borderRadius={8} />
                            <Button whiteSpace='normal' textAlign='left' onClick={() => onSelectGenre(genre)} variant={'link'} fontSize='md' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}>{genre.name}</Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;