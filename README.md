# starterTemplate-Rate-Object
a starter template for rating a custom object using the Stamplay SDK

**NOTE: Users must be logged in to use the rating function!**

**CLONING: When cloning this repo, you must switch out the appId & object Id's with your own to make it work.**

 1) **Initialize the front-end of your app with Stamplay**
 <br>
- Go to your command line and enter **stamplay init**
- When prompted, enter your **appID** & **API Key**

2) **Initialize the SDK library in your app**
<br>
- In your index.html file, enter the SDK cdn script (or install with bower if you prefer)
```
<script src="//drrjhlchpvi7e.cloudfront.net/libs/stamplay-js-sdk/1.3.1/stamplay.min.js"></script>

```
```
$ bower install stamplay-js-sdk
```
- In your Javascript file, enter the initialization script at the top of the file
```
Stamplay.init('yourAppId');
```
3) **Establish object to be rated**
- Go to your Stamplay editor and go to the **Data** section. Then go to **Objects**
- Establish what object in the collection your going to rate by getting it's object **Id**.

4) **rate( )**
```
function rateFive(){
	var objectInstance = new Stamplay.Cobject('store').Model;
	objectInstance.fetch('56549d53b3039e5f75c0d0dd').then(function(){
    	return objectInstance.rate(5).then(function(){
    		alert('rated 5!');
    	});
    });
}
```

![alt tag](public/images/rate-object-micro-repo.png)
