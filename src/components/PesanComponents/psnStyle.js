import { StyleSheet } from "react-native";
import { Constant } from "../../constants/index.constants";

export const StylePsn = StyleSheet.create({
    cardFile: {
        backgroundColor: Constant.warnaSemiRed,
        marginBottom: 10,
        width: '100%',
    },
    containerParent: {
        height: '100%',
        backgroundColor: Constant.warnaPrimaryButton,
    },
    containerContent: {
        marginTop: 1,
        flex: 1,
        backgroundColor: Constant.warnaPrimaryButton,
    },
    cardBasic: {
        width: '100%',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: Constant.warnaPutih,
    },
    containerInfo: {
        backgroundColor: Constant.warnaPrimaryButton,
        width: '100%',
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 10,
        marginBottom: 8,
    },
    textHeaderInfo: {
        marginBottom: 3,
        fontSize: 17,
        fontWeight: 'bold',
    },
    textField: {
        width: 80,
        fontWeight: 'bold',
    }
})