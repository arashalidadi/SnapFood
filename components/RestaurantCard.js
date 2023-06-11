import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
      className="bg-white ml-3 items-end shadow-sm w-64 pl-3"
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px3 pb-4">
        <Text className="font-bold text-lg pt-2 text-right pr-2">{title}</Text>
        <View className="flex-row-reverse items-center space-x-1">
          <StarIcon size={22} color="green" opacity={0.5} />
          <Text className="text-xs text-gray-500">
            <Text className="text-gray-500">{rating}</Text>. {genre}
          </Text>
        </View>
        <View className="flex-row-reverse items-center space-x-1">
          <MapPinIcon size={22} color="gray" opacity={0.4} />
          <Text className="text-xs text-gray-500 text-ellipsis overflow-hidden pl-3 ">
            آدرس . {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
