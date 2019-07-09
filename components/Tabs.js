import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Constants } from "expo";
import DeckList from "./DeckList";
import NewDeck from "./NewDeck";
import { white, pink } from "../colors";

const RouteConfigs = {
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: "Deck List",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
      )
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: "Add Deck",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="plus-square" size={30} color={tintColor} />
      )
    }
  }
};

const TabNavigatorConfigs = {
  tabBarOptions: {
    activeTintColor: Platform.OS === "ios" ? pink : white,
    style: {
      height: 60,
      marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
      backgroundColor: Platform.OS === "ios" ? white : pink,
      shadowColor: "rgba(0,0,0,0.24)",
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
};

const Tabs =
  Platform.OS === "ios"
    ? createBottomTabNavigator(RouteConfigs, TabNavigatorConfigs)
    : createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfigs);

export default Tabs;
