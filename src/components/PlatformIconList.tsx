import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

interface Props {
    platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
    // { [key:string]:IconType } = Index signature
    const iconMap: { [key: string]: IconType; } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        android: FaAndroid,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
    };

    return (
        <HStack marginY={'10px'}>
            {platforms.map((platform, index) => (
                <Icon as={iconMap[platform.slug]} key={index} color={"gray.500"} />
            ))}
        </HStack>
    );
};

export default PlatformIconList;