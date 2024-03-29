import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";
import DeckList from "./DeckList";
import NewDeck from "./NewDeck";
import Deck from "./Deck";
import NewCard from "./NewCard";
import Quiz from "./Quiz";
import Result from "./Result";
import { white, pink, mint, yellow, gray } from "../utils/colors";

const RouteConfigs = {
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: "Deck List",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-list-box" size={30} color={tintColor} />
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

const MainNavigation = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: Platform.OS === "android" && null
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: gray,
      headerStyle: {
        backgroundColor: yellow
      }
    }
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      headerTintColor: gray,
      headerStyle: {
        backgroundColor: mint
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: gray,
      headerStyle: {
        backgroundColor: mint
      }
    }
  },
  Result: {
    screen: Result,
    navigationOptions: {
      headerTintColor: gray,
      headerStyle: {
        backgroundColor: mint
      }
    }
  }
});

export default MainNavigation;
