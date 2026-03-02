import { useRouter } from "expo-router";

// Inside the component:
const router = useRouter();

// In the renderItem or wherever you show each token:
<TouchableOpacity
  onPress={() => {
    router.push(`/token/${item.mint}`);
  }}
>
  {/* ...your existing token card JSX... */}
</TouchableOpacity>