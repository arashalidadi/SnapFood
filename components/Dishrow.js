import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  selectBasketItemWithId,
  selectBasketItems,
} from "../features/basketSlice";
const Dishrow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={` bg-white border p-4 border-gray-200 
        ${isPressed && "border-b-0"}`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400 ">{description}</Text>
            <Text className="text-gray-400 mt-2">
              {
                <Currency
                  quantity={price} // Required
                  currency="IRR" // Optional (USD by default)
                />
              }
            </Text>
          </View>

          <View className="bg-gray-100">
            {/* {console.log(urlFor(image).url())} */}
            <Image
              className="w-20 h-20 bg-gray-300 p-4  rounded-sm "
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              resizeMode="cover"
              source={{
                uri: urlFor(image).url(),
              }}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity>
              <MinusCircleIcon
                size={40}
                color="#00CCBB"
                // color={{items.lenght > 0 ? "#00CCBB" : "gray" }}
              />
            </TouchableOpacity>

            <Text>
              {items.length}
              {/* {console.log(items.length)} */}
            </Text>

            <TouchableOpacity>
              <PlusCircleIcon
                onPress={addItemToBasket}
                size={40}
                color="#00CCBB"
                // color={{items.lenght > 0 ? "#00CCBB" : "gray" }}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default Dishrow;
