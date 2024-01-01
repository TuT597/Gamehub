import { Image, Text, Card, CardBody } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
    const { games, error } = useGames();

    return (
        <>
            {error && <Text>{error}</Text>}

            {games.map((game) => (
                <Card key={game.id}>
                    <CardBody>
                        <Image src={game.background_image} borderRadius="lg" />
                        <Text>{game.name}</Text>
                    </CardBody>
                </Card>
            ))}
        </>
    );
};

export default GameGrid;
