import {Dimensions} from 'react-native';

export class Helper {
  static getWidth() {
    const win = Dimensions.get('window');
    return win.width;
  }
}
