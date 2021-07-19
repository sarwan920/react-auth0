import { useAuth0 } from '@auth0/auth0-react'

import { VStack, StackDivider, Box, Image, Button, Badge } from '@chakra-ui/react'

import { GET_GROUPS } from '../client'

import { useQuery } from '@apollo/client'

const Profile = () => {
    const { user, isLoading, isAuthenticated } = useAuth0();
    const { data } = useQuery(GET_GROUPS);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        isAuthenticated && (
            <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={4}
                align="stretch"
            >
                {data.Groups.map((group) => (
                    <Box key={group.id} boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" maxW="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">

                        <Box position="relative" >
                            <Image src={group.cover_image} alt="Proprty" />
                            <Image
                                position="absolute"
                                top="90%"
                                right="40%"
                                boxShadow="rgba(0,128,128, 0.4) 0px 5px, rgba(0,128,128, 0.3) 0px 10px, rgba(0,128,128, 0.2) 0px 15px, rgba(0,128,128, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;"
                                borderRadius="full"
                                boxSize="100px"
                                src={group.image}
                                alt="Profile"
                            />
                        </Box>

                        <Box p="6" mt="15%">
                            <Box d="flex" alignItems="baseline">
                                <Badge fontSize="0.8em" borderRadius="full" px="2" colorScheme="teal">
                                    {group.name}
                                </Badge>

                            </Box>

                            <Box
                                mt="1"
                                fontWeight="semibold"
                                as="h4"
                                lineHeight="tight"
                                isTruncated
                            >
                                {group.description}
                            </Box>
                            <Box d="flex" mt="2" alignItems="center">
                                <Box as="span" color="gray.600" fontSize="sm">
                                    {group.members} Members
                                </Box>
                            </Box>
                        </Box>

                        <Box p="6" d="flex" justifyContent="center">
                            <Button>Join</Button>
                        </Box>
                    </Box>

                ))}
            </VStack>
        )
    );
}

export default Profile;
