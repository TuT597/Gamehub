import {
    Button,
    HStack,
    Image,
    Link,
    List,
    ListItem,
    Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../Services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

export const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, isLoading } = useGenres();
    const skeletons = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    return (
        <List>
            {isLoading &&
                skeletons.map((skeleton) => (
                    <ListItem key={skeleton} paddingY="5px">
                        <GenreSkeleton />
                    </ListItem>
                ))}
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={6}
                            src={getCroppedImageUrl(genre.image_background)}
                        />
                        <Button
                            variant="link"
                            onClick={() => onSelectGenre(genre)}
                            fontWeight={
                                genre.id === selectedGenre?.id
                                    ? "bold"
                                    : "normal"
                            }
                            fontSize="lg"
                        >
                            {genre.name === 'Massively Multiplayer' ? 'MMORPG' : genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};
