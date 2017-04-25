
## React Native Maps Android Sample


### Boilerplate starter kit for[react-native-maps](https://github.com/airbnb/react-native-maps) for android


This sample project contains all the configurations and setup for a basic react native map application using `react-native-maps`. react-native-maps documentation is not enough to get started the project and most of the time will be time consuming.

This is basic setup and can be used to test all your configuration are ready to use the maps in your application  

### Install & setup

```
npm install

```
Add your Google API Key in the `android/app/src/main/AndroidManifest.xml`
Enable your key for Google Map in the https://console.developers.google.com/apis/api/maps_android_backend/overview

```
npm start  // or do react-native start
//open  a new terminal  then run
react-native run-android

```

### Steps I followed to develop this project

1. Created a blank react-native app by `react-native init native-map-app`
2. Installed react-native-maps `npm install react-native-maps --save`
3. Got some error on module not found error so I updated react-native-maps version to `0.13.1` in `package.json` then run `npm update`
4. Then run `react-native link react-native-maps` but no use edited all required files manually as in the following steps
5. Added the below code in `android/settings.gradle`

```
include ':react-native-maps'
project(':react-native-maps').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-maps/android')
```

6.  Added the below code in `android/app/build.gradle`

```
dependencies {
    compile 'com.airbnb.android:react-native-maps:0.13.1'
}
```

7. Added API Key in `android/app/src/main/AndroidManifest.xml`

```
<application
  ...
  <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="your-api-key"/>
</application>
```
8. Added the below code in `android/app/src/main/java/com/reactmap/MainApplication.java`

```
import com.airbnb.android.react.maps.MapsPackage;

@Override
protected List<ReactPackage> getPackages() {
  return Arrays.<ReactPackage>asList(
      new MapsPackage(),
      new MainReactPackage()
  );
}
```
