import { Badge } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
    score: number;
}

const MetaCritic = ({ score }: Props) => {
    let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

    return (
        <Badge
            colorScheme={color}
            fontSize="14px"
            paddingX={2}
            borderRadius={4}
        >
            {score}
        </Badge>
    );
};

export default MetaCritic;
