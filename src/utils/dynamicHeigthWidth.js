import { Dimensions } from "react-native";

export const DeviceSize = {width:750, height:1622}


export  const actualDeviceSize = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}


export const dH = actualHeight =>{
    const heightRatio = (actualHeight + 0) / DeviceSize.height;
    const windowHeight = Dimensions.get('window').height;
    const reqHeight = heightRatio * windowHeight;
    return reqHeight;
}

export const dW = actualWidth =>{
    const widthRatio = (actualWidth + 0) /DeviceSize.width
    const windowWidth = Dimensions.get('window').width;
    const reqWidth = widthRatio * windowWidth;
    return reqWidth;
}

export const windowWidth = () =>{
    const windowWidth = Dimensions.get('window').width
    return windowWidth;
}
export const windowHeight = () =>{
    const windowHeight = Dimensions.get('window').height
    return windowHeight;
}