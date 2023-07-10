import { StyleSheet } from 'react-native';
import Colours from './Colours';

const platformCrowdStyle = StyleSheet.create({
    message: {
        justifyContent: 'center',
        fontSize: 25
    },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 15,
        height: 50,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: Colours.white,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        height: "100%",
    },
    searchInput: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 10,
    },
    searchBtn: {
        width: 50,
        height: "100%",
        backgroundColor: Colours.primary,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        left: 10,
        
    },
    searchBtnImage: {
        width: "50%",
        height: "50%",
        tintColor: Colours.white,
    },
    tabsContainer: {
        width: "100%",
        marginTop: 15,
    },
    container: {
        marginTop: 15,
    },
    tab: (activeFilter, item) => ({
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: activeFilter === item ? Colours.choose : Colours.idle,
    }),
    tabText: (activeFilter, item) => ({
        color: activeFilter === item ? Colours.choose : Colours.idle,
    }),
})

export default platformCrowdStyle;