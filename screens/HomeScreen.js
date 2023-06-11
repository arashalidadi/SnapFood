import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import { ScrollView } from "react-native";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { client } from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured"]{
    ...,
    restaurants[]->{
       ...,
       dishes[]->
    }
   }`,
        {}
      )
      .then((data) => {
        setFeaturedCategories(data);
        // console.log("data :", data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    // const res = getRestaurant();
    // getRestaurant().then((data) => {
    //   setFeaturedCategories(data);
    // });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5  ">
      {/* header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* search box */}
      <View className="flex-row items-center pb-2 mx-4 ">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={35} />
          <TextInput placeholder="Restaurants" keyboardType="default" />
        </View>

        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      {/* Body */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 150,
        }}
        className="bg-gray-100 "
      >
        {/* Categories */}
        <Categories />
        {/* fearured */}
        {featuredCategories.map((item, index) => (
          <FeaturedRow
            key={item._id}
            id={item._id}
            title={item.name}
            description={item.shor_description}
            // restaurants={item.restaurants}
            // description="Paid placement from our partners"
            // featuredCategory="featured"
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
