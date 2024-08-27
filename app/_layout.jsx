import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

const RootLayout = () => {
  return (
    <>
      <PaperProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </PaperProvider>
    </>
  );
};

export default RootLayout;
