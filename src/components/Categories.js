import {View,Text,ScrollView} from "react-native";
import CategoryCard from "./CategoryCard";


function Categories(){
    return(
        <ScrollView
        contentContainerStyle={{
         paddingHorizontal: 15,
         paddingTop: 10,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Offers" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Pizza" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Thai"  />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Offers"  />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Offers"  />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Offers"  />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Offers"  />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Offers"  />
         </ScrollView>
    )
}

export default Categories