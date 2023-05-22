import {View, Text, SafeAreaView, Image, TextInput, ScrollView} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useLayoutEffect} from "react";
import {
    ChevronDownIcon,
    UserIcon,
    AdjustmentsVerticalIcon,
    MagnifyingGlassIcon,
 }
from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
   function HomeScreen(){
    const navigation = useNavigation();
    useLayoutEffect(()=>{
          navigation.setOptions({
            headerShown: false
          })
    },[navigation])
    return(
        <SafeAreaView className="bg-white">
            {/* header */}

    <View >
        <View className="flex-row items-center pb-3 mx-4 space-x-2">
            <Image
                source={
                    {
                        uri: "https://links.papareact.com/wru",
                    }
                }
                className="w-7 h-7 p-4 rounded-full bg-gray-300"
            />
            <View className="flex-1" >
                <Text className="font-bold text-gray-400 text-xs ">Deliver Now!</Text>
                <Text className="font-bold text-xl ">
                    Current Location
                    <ChevronDownIcon size={20} color="#00ccbb" />
                </Text>
            </View>
            <UserIcon size={35} color="#00ccbb" />
        </View>
        {/* Search Bar */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row space-x-2 bg-gray-200 p-3 flex-1">
                <MagnifyingGlassIcon size={20} color="gray" />
                <TextInput
                    placeholder="Restaurants and cuisines"
                    keyboardType="default"
                />
            </View>
            <AdjustmentsVerticalIcon size={35} color="#00ccbb" />
        </View>
        {/* body */}
        <ScrollView
            className="bg-gray-100"
            contentContainerStyle={{
                paddingBottom: 100,
            }}
        >
            <Categories />
            <FeaturedRow title="Featured" description="Paid placements from our parents" />
            <FeaturedRow title="Tasty discounts" description="Paid placements from our parents" />
            <FeaturedRow title="Offer near you!" description="Paid placements from our parents" />
          </ScrollView>
    </View>
        </SafeAreaView>
    );
}

export default HomeScreen