import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View className="bg-[#00CCBB] flex-1 ">
      <SafeAreaView className="z-50  ">
        <View
          className="flex-row justify-between items-center
        p-5"
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text
            className="font-light text-white
          text-lg"
          >
            Order Help
          </Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">
                زمان تقریبی رسیدن به مقصد
              </Text>
              <Text className="text-3xl font-bold">45-55 دقیقه</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/wru",
              }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
          <Text className="mt-3 mb-3 text-gray-400">
            درخواست شما در
            <Text className="text-sm font-bold text-gray-600">
              {" "}
              {restaurant.title}{" "}
            </Text>
            آماده شده
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          //   latitude: 29.585,
          //   longitude: 52.473,
          longitude: restaurant.long,
          latitude: restaurant.lat,
          longitudeDelta: 0.005,
          latitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
            // latitude: 29.585,
            // longitude: 52.473,
          }}
          title={restaurant.title}
          description={restaurant.description}
          identifier="origin"
          pinColor="#00CCBB"
        ></Marker>
      </MapView>

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ,l-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Sonny Sangha</Text>
          <Text className="text-gray-400">Youy Rider</Text>
        </View>

        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
