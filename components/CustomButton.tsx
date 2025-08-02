import { Text, TouchableOpacity } from "react-native";
import React from "react";

type CustomButtonProps = {
  onPress: () => void;
  className?: string;
};

const CustomButton = ({ onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={"bg-blue-500 rounded-full px-3 py-3 w-[40vh]"}
    >
      <Text className="text-white text-center text-lg font-bold">Next</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
