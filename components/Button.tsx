import { Pressable, StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  label: string;
  theme?: "primary" | "secondary";
  icon?: keyof typeof FontAwesome.glyphMap;
};

export default function Button({ label, icon, theme = "primary" }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={[
          styles.button,
          { backgroundColor: theme === "primary" ? "#186" : "#249" },
        ]}
      >
        {icon && <FontAwesome name={icon} style={styles.buttonIcon} />}
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center", // Changed to center for better alignment
  },
  button: {
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#194",
    paddingHorizontal: 10, // Added padding for better spacing
  },
  buttonLabel: {
    color: "white",
    fontSize: 14,
  },
  buttonIcon: {
    color: "white",
    fontSize: 16,
    marginRight: 8,
  },
});
