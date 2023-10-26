// From Chakra UI Documentation
import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;
