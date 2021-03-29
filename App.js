import React from "react";
import { Provider as AuthProvider } from "./src/providers/AuthContext";
import { Provider as RecipeProvider } from "./src/providers/RecipeContext";
import LongTimer from "./src/utils/LongTimer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavigationStack from "./src/components/navigation/NavigationStack";

export default function App() {
  LongTimer();

  return (
    <AuthProvider>
      <RecipeProvider>
        <SafeAreaProvider>
          <NavigationStack />
        </SafeAreaProvider>
      </RecipeProvider>
    </AuthProvider>
  );
}
