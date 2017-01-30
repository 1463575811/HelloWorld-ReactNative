# ReactNative HelloWorld with Starcounter and PuppetJS

#### Expected needed time: 30 mins 
(download time not included ~1.5GB for Android Studio)

These instructions assume:
* That you have [Step 6 of Starcounter HelloWorld app](https://starcounter.io/hello-world/cancel-delete-hello-world-part-6) running on your PC.
* That you have a ready ReactNative Android development environment. To setup this. [Please follow these steps to the end](https://facebook.github.io/react-native/docs/getting-started.html). By the end, you should have `react-native` command recognizable in your Windows CLI.

### Steps:
#### 1. Clone this repo and cd to it
```
git clone https://github.com/StarcounterSamples/ReactNative-HelloWorld.git
cd ReactNative-HelloWorld
```
#### 2. Then you need to `npm install` it, to download all the Node modules your app needs:
```
ReactNative-HelloWorld> npm install
```
#### 3. Now,  you need to make sure you have an AVD (Android Virtual Device) running and accessible via the ADB. To test that, type:
```
adb shell
```
in your command line, and you should have access to the CLI of your Android machine. If you succeed, you can type `exit` to leave the shell.

Now, you need to navigate to `ReactNative-HelloWorld\puppet\puppetContainer.js` and change the IP Address to `localhost` if you have Starcounter running on the same machine. Or to any IP address SC is running on. Save after the modification.

#### 4. Now in your CLI, that has the current directory set to `ReactNative-HelloWorld`, type:
```
react-native run-android
```
It will take up to 5 minutes, and the app will start and connect to you SC instance and it will show the data in the DB!

### Notes
#### Note 1:

You might run in some trouble when running the app, please navigate to `ReactNative-HelloWorld\android\gradle.properties`
And make sure the line
```
org.gradle.java.home=C:\\Program Files\\Java\\jdk1.8.0_121
```
Points to the right JDK location.

#### Note 2:
This app has PuppetJS and JSONPatch embedded inside for ease of setup and use. Soon these two should be separate Node modules referenced in this app.

#### Note 3:
To save you some time, the files that are mostly interesting for you are:
```
\index.android.js
\puppet\puppetContainer.js
\components directory.
```