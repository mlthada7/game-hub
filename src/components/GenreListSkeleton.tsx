import { HStack, List, ListItem, Skeleton } from "@chakra-ui/react";

const GenreListSkeleton = () => {
    return (
        <List>
            {Array.from({ length: 7 }, (_, index) => (
                <ListItem key={index} paddingY='5px'>
                    <HStack>
                        <Skeleton boxSize='32px' borderRadius={8} />
                        <Skeleton h='20px' w='120px' />
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreListSkeleton;