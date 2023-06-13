import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
const PreparingOrderScreen = () => {
  return (
    <SafeAreaView
      className="flex-1 bg-[#ffffff]
    justify-center items-center
    "
    >
      <Animatable.Image
        source={require("../assets/food_delivery.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-[#00CCBB] font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle
        color="#00CC88"
        // progress={0.4}
        size={60}
        indeterminate={true}
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
