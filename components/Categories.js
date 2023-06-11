import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { client } from "../sanity";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `
  *[_type == "category"]
  `,
        {}
      )
      .then((data) => {
        setCategories(data);
        // console.log(data);
      });
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
        flexDirection: "row-reverse",
        direction: "rtl",
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard  */}
      {categories.map((item) => (
        <CategoryCard key={item._id} imgUrl={item.image} title={item.name} />
        // <CategoryCard
        //   imgUrl="https://links.papareact.com/gn7"
        //   title="Testing 1"
        // />
      ))}
    </ScrollView>
  );
};

export default Categories;
