import { useRouter } from "expo-router";

// Inside the component:
const router = useRouter();

<TouchableOpacity
  onPress={() => {
    router.push(`/token/${item.mint}`);
  }}
>
 
</TouchableOpacity>