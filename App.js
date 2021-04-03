import React from "react";
import { Provider as AuthProvider } from "./src/providers/AuthContext";
import { Provider as RecipeProvider } from "./src/providers/RecipeContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavigationStack from "./src/components/navigation/NavigationStack";
import LongTimer from "./src/utils/LongTimer"


export default function App() {
   

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
