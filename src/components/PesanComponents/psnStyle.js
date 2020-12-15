import { StyleSheet } from "react-native";
import { Constant } from "../../constants/index.constants";

export const StylePsn = StyleSheet.create({
    cardFile: {
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
    },
    parentContainerCheckbox: {
        backgroundColor: Constant.warnaPrimaryButton,
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 10,
    },
    containerCheckbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    checkboxBackground: {
        backgroundColor: Constant.warnaPutih,
        height: 25,
        width: 25,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxCustom: {
        height: 15,
        width: 15,
        borderRadius: 15,
    },
    backDropRight: {
        paddingRight: 4,
        borderTopEndRadius: 15,
        borderTopStartRadius: 11,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 11,
    }
})