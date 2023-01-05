
import { Fragment, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";
import loadingAnim from "../assets/loading/loading.json"
import { SafeAreaView } from "react-native-safe-area-context";

import useConsent from "../utils/Consent"
import useDataStore from '../storages/DataStore';
import Icon from 'react-native-vector-icons/FontAwesome';

const Loading = ({ navigation }) => {

    const { getData, dataStatus, responseStatus } = useConsent();
    const { data } = useDataStore();

    useEffect(() => {
        async function fetchData() {
            const response = await getData();
            console.log(response['code']);
        }
        fetchData();

    }, [])

    useEffect(() => {
        if (dataStatus === true && responseStatus === false) {
            setTimeout(() => {
                navigation.navigate("Auth", {});
            }, 4000);
        }
        else if (dataStatus === true && responseStatus === true) {
            setTimeout(() => {
                navigation.navigate("MyGenie", {});
            }, 4000);
        }
    }, [dataStatus, responseStatus])


    return (

        <SafeAreaView style={{ flexDirection: "column", flex: 1 }}>

            {dataStatus === false ? <></> :
                <Fragment>
                    {responseStatus === false ?
                        <View style={styles.statusWrapper}>
                            <Icon name="close" size={200} color="#C21010" />
                            <Text style={{ fontSize: 30 }}> Consent Retrival Failed!</Text>
                            <Text style={{ fontSize: 18 }}> Redirecting to Authentication Page.</Text>
                        </View>
                        :
                        <View style={styles.statusWrapper}>
                            <Icon name="check" size={200} color="#367E18" />
                            <Text style={{ fontSize: 30 }}> Consent Retrival Successful!</Text>
                            <Text style={{ fontSize: 18 }}> Redirecting to Home Page.</Text>
                        </View>
                    }
                </Fragment>
            }

            <AnimatedLoader
                visible={!dataStatus}
                source={loadingAnim}
                overlayColor="rgba(255,255,255,1)"
                animationStyle={styles.lottie}
                speed={1}
            >
                <Text>Fetching Data from Server...</Text>
            </AnimatedLoader>



        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    lottie: {
        width: 100,
        height: 100
    },
    statusWrapper: {
        flex: 2,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 0,
        fontSize: 30
    },
});

export default Loading