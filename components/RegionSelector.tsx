import { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import { fetchAvailableRegions } from "@/lib/avalancheReport";
import { Region } from "@/interfaces/Region";
import DropdownSelect from "react-native-input-select";
import { SafeAreaView } from "react-native-safe-area-context";

interface DropdownSelectHandle {
  open: () => void;
  close: () => void;
}

export default function RegionSelector() {
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [availableRegions, setAvailableRegions] = useState<Region[]>([]);
  const dropdownRef = useRef<DropdownSelectHandle | null>(null);

  useEffect(() => {
    fetchAvailableRegions()
      .then(setAvailableRegions)
      .catch((err) => console.error("Failed to load regions", err));
  }, []);

  const regionOptions = availableRegions.map((region) => ({
    name: <Text>{region.name}</Text>,
    id: region.name,
  }));
  return (
    <SafeAreaView>
      <View className="w-full px-4">
        <Text className="text-base font-bold mb-1">Regions</Text>

        <View
          className={`border ${
            selectedRegions.length === 0 ? "border-red-500" : "border-black"
          } rounded-xl px-3 py-2 bg-white`}
        >
          <DropdownSelect
            ref={dropdownRef}
            options={regionOptions}
            placeholder="Select regions..."
            isMultiple
            optionLabel="name"
            optionValue="id"
            selectedValue={selectedRegions}
            onValueChange={(values) => setSelectedRegions(values)}
            dropdownIconStyle={{
              position: "absolute",
              right: 10,
              top: "50%",
            }}
            selectedItemsControls={{
              showRemoveIcon: false,
              removeItemIcon: <></>,
            }}
            dropdownStyle={{
              borderWidth: 0,
              backgroundColor: "transparent",
            }}
          />
        </View>

        {selectedRegions.length === 0 && (
          <Text className="text-red-500 font-medium mt-1">
            Please select at least one region
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
}
