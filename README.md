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
Then you need to `npm install` it, to download all the Node modules your app needs:
```
ReactNative-HelloWorld> npm install
```
Now,  you need to make sure you have an AVD (Android Virtual Device) running and accessible via the ADB. To test that, type:
```
adb shell
```
in your command line, and you should have access to the CLI of your Android machine. If you succeed, you can type `exit` to leave the shell.

Now, you need to navigate to `ReactNative-HelloWorld\puppet\puppetContainer.js` and change the IP Address to `localhost` if you have Starcounter running on the same machine. Or to any IP address SC is running on. Save after the modification.

Now in your CLI, that has the current directory set to `ReactNative-HelloWorld`, type:
```
react-native run-android
```
It will take up to 5 minutes, and the app will start, and to connect to you SC instance and it will show the data in the DB!

### Notes
You might run in some trouble when running the app, please navigate to `ReactNative-HelloWorld\android\gradle.properties`
And make sure the line
```
org.gradle.java.home=C:\\Program Files\\Java\\jdk1.8.0_121
```
Points to the right JDK location.