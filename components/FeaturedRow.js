import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import { client } from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "featured"  && _id == $id]{
      ...,
   restaurants[]->{
      ...,
      dishes[]->,
     type->{
       name
     }
   },
 }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
        // console.log(data);
      });
  }, [id]);

  return (
    <View>
      <View className="mt-4 flex-row-reverse items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowLeftIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards... */}

        {restaurants.map((item, index) => (
          <RestaurantCard
            key={item._id}
            id={item._id}
            imgUrl={item.image}
            title={item.name}
            rating={item.rating}
            genre={item.type.name}
            address={item.address}
            short_description={item.shor_description}
            dishes={item.dishes}
            long={item.long}
            lat={item.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
