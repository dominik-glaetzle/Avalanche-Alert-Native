import { Text, Image, View } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";

export default function Welcome() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white justify-between">
      <View className="items-center pt-10">
        <Image
          source={require("@/assets/images/skier.png")}
          resizeMode="contain"
          className="w-full h-[300px]"
        />
        <Text
          className="text-3xl mt-3 px-5 text-black text-center"
          style={{ fontFamily: "Poppins_700Bold" }}
        >
          Avalanche Alert
        </Text>
        <Text className="text-base mt-3 px-6 text-center text-gray-600">
          Receive real-time avalanche alerts and stay safe while skiing or
          snowboarding in your favorite regions.
        </Text>
      </View>

      <View className="w-full items-center mb-10">
        <CustomButton onPress={() => router.push("/(onboarding)/regions")} />
      </View>
    </SafeAreaView>
  );
}
