// Global state (used for theming)
import { AppState } from "./app.global";

// Providers
import { ClickersService, StorageService } from "../services";
import { TranslateToastController } from "../providers/util/toast.service";
import { TranslateAlertService } from "../providers/util/alert.service";
import { ConverterService } from "../providers/util/converter.service";
import { CameraProvider } from "../providers/util/camera.provider";
import { NativeGoogleMapsProvider } from "../providers/native-google-maps/native-google-maps";

// Ionic native providers
import { CardIO } from "@ionic-native/card-io";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { Camera } from "@ionic-native/camera";
import { Diagnostic } from "@ionic-native/diagnostic";
import { Geolocation } from "@ionic-native/geolocation";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { GoogleMaps } from "@ionic-native/google-maps";

 

// Modules
import { SwingModule } from "angular2-swing";
import { BrowserModule } from "@angular/platform-browser";
import { SettingsPageModule } from "../pages/settings/settings.module";


export const MODULES = [SwingModule, BrowserModule];

export const PROVIDERS = [
  TranslateToastController,TranslateAlertService,ConverterService,
  AppState,
  CameraProvider,
  NativeGoogleMapsProvider,
  StatusBar,
  SplashScreen,
  ClickersService,
  StorageService,
  // Ionic native specific providers
  BarcodeScanner,
  Camera,
  Diagnostic,
  Geolocation,
  CardIO,
  StatusBar,
  SplashScreen,
  GoogleMaps
];

export const PAGEMODULE=[SettingsPageModule]
export const DIRECTIVES = [];
