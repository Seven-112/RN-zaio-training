import { Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
    h1: {
        fontSize: 30
    },
    h2: {
        fontSize: 25
    },
    normal: {
        fontSize: 20
    },
    width,
    height
};
