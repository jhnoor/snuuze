import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const PlaceholderImage = require("@/assets/images/drdolittle.jpg");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" icon="camera" theme="secondary" />
        <Button label="Use this photo" icon="check" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
  }
});
