import { Game } from "../hooks/useGames";
import {
    Card,
    CardBody,
    HStack,
    Heading,
    Image,
    Img,
    Text,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import MetaCritic from "./MetaCritic";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={6} overflow="hidden">
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
                <HStack justifyContent="space-between">
                    <PlatformIconList
                        platforms={game.parent_platforms.map((p) => p.platform)}
                    />
                    <MetaCritic score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    );
};

export default GameCard;
