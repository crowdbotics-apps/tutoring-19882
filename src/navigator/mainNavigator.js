import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile95640Navigator from '../features/UserProfile95640/navigator';
import Settings95639Navigator from '../features/Settings95639/navigator';
import Settings95637Navigator from '../features/Settings95637/navigator';
import SignIn295635Navigator from '../features/SignIn295635/navigator';
import Maps6095574Navigator from '../features/Maps6095574/navigator';
import UserProfile95573Navigator from '../features/UserProfile95573/navigator';
import Maps95554Navigator from '../features/Maps95554/navigator';
import Settings95532Navigator from '../features/Settings95532/navigator';
import Settings95517Navigator from '../features/Settings95517/navigator';
import NotificationList95516Navigator from '../features/NotificationList95516/navigator';
import Maps95515Navigator from '../features/Maps95515/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile95640: { screen: UserProfile95640Navigator },
Settings95639: { screen: Settings95639Navigator },
Settings95637: { screen: Settings95637Navigator },
SignIn295635: { screen: SignIn295635Navigator },
Maps6095574: { screen: Maps6095574Navigator },
UserProfile95573: { screen: UserProfile95573Navigator },
Maps95554: { screen: Maps95554Navigator },
Settings95532: { screen: Settings95532Navigator },
Settings95517: { screen: Settings95517Navigator },
NotificationList95516: { screen: NotificationList95516Navigator },
Maps95515: { screen: Maps95515Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
