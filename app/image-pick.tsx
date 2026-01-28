import { StyleSheet, View } from "react-native";

import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {

   const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  
  const pickImageAsync = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('需要授予访问照片的权限才能使用此功能！');
        return;
      }



    const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
    quality: 1,
  });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

   // 申请图片访问权限
  // useEffect(() => {
  //   (async () => {
  //     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //     if (status !== 'granted') {
  //       alert('需要授予访问照片的权限才能使用此功能！');
  //     }
  //   })();
  // }, []);


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
