import * as ImagePicker from 'expo-image-picker';

export const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
    });
    if (!result.canceled) {
        console.log(result);
        return result;
    } else {
        return alert('You did not select any image.');
    }
};
