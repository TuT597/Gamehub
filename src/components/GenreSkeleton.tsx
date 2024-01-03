import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GenreSkeleton = () => {
    return (
        <Card height='64px'>
            <Skeleton height="200px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    );
};

export default GenreSkeleton;
