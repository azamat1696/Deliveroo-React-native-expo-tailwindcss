import {View,Text,ScrollView} from "react-native";
import {ArrowRightIcon} from "react-native-heroicons/outline";
import RestaurantCards from "./RestaurantCards";

function FeaturedRow({title,description,featuredCategory}){
    return(
        <View>
            <View className="mt-4 flex-row justify-between px-4 items-center">
                <Text className="font-bold text-lg ">{title}</Text>
                <ArrowRightIcon   color="#00ccbb" />
            </View>
            <Text className="text-xs text-gray-500 mx-4 pb-4">{description}</Text>
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            >
                <RestaurantCards
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Pancakes"
                    rating={4.8}
                    genre="Breakfast"
                    address="123 Main Street"
                    short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod."
                    dishes="Pancakes, Waffles, French Toast"
                    long={-73.935242}
                    lat={40.73061}
                />
                <RestaurantCards
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Pancakes"
                    rating={4.8}
                    genre="Breakfast"
                    address="123 Main Street"
                    short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod."
                    dishes="Pancakes, Waffles, French Toast"
                    long={-73.935242}
                    lat={40.73061}
                />
                <RestaurantCards
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Pancakes"
                    rating={4.8}
                    genre="Breakfast"
                    address="123 Main Street"
                    short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod."
                    dishes="Pancakes, Waffles, French Toast"
                    long={-73.935242}
                    lat={40.73061}
                />
                <RestaurantCards
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Pancakes"
                    rating={4.8}
                    genre="Breakfast"
                    address="123 Main Street"
                    short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod."
                    dishes="Pancakes, Waffles, French Toast"
                    long={-73.935242}
                    lat={40.73061}
                />
            </ScrollView>
        </View>
    )
}

export default FeaturedRow;