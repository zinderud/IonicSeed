// Global state (used for theming)
import { AppState } from "./app.global";

// Providers
import { ClickersService, StorageService } from "../services";
import { ToastService } from "../providers/util/toast.service";
import { AlertService } from "../providers/util/alert.service";
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

export const MODULES = [SwingModule, BrowserModule];

export const PROVIDERS = [
  AlertService,
  ToastService,
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

export const DIRECTIVES = [];
