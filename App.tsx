import Navigation from "./app/navigation/navigation";
import { LocationContextProvider } from "./app/context/location-context";

export default function App() {
  return (
    <LocationContextProvider>
      <Navigation />
    </LocationContextProvider>
  );
}
