import { Text, Image, View } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import RegionSelector from "@/components/RegionSelector";
import CustomButton from "@/components/CustomButton";

export default function Regions() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white justify-between">
      <View className="items-center pt-10">
        <Image
          source={require("@/assets/images/location.png")}
          resizeMode="contain"
          className="w-full h-[300px]"
        />
        <Text
          className="text-3xl mt-3 px-5 text-black text-center"
          style={{ fontFamily: "Poppins_700Bold" }}
        >
          Select Regions:
        </Text>
        <Text className="text-base mt-3 text-center text-gray-600 px-6">
          Choose the regions you&#39;re interested in. We&#39;ll send you
          real-time avalanche alerts tailored to your selected areas – so you
          can enjoy the mountains safely.
        </Text>
      </View>

      <View className="w-full px-4 -mt-6">
        <RegionSelector />
      </View>

      <View className="w-full items-center mb-10">
        <CustomButton onPress={() => router.push("/(onboarding)/regions")} />
      </View>
    </SafeAreaView>
  );
}
