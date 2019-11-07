# [foodjournal.netlify.com](https://foodjournal.netlify.com/)


An alternative to typical calorie tracking apps. It's a combination of a calorie tracker and visual food diary built with JavaScript, HTML5, CSS, and the WebRTC API. Pictures are stored with Firebase. **Mobile** responsive web app that currently works with Android phones and will be compatible with iPhones in the near future.

&nbsp;

***

&nbsp;

## _**Trello**_

* [Trello board](https://trello.com/b/i1uZ9SaZ)

## _**Wireframes**_

* [Mobile wireframes](https://imgur.com/a/T4Febjo)


* [Desktop wireframes](https://imgur.com/a/SP06y0t)



## _**User Flow (old)**_
* [Click for pic](https://i.imgur.com/liT1OUa.jpg)


## _**Prototype**_

* [Adobe XD](https://xd.adobe.com/spec/a02358e2-a806-4df3-5246-0e1ded746b37-d612/screen/c4cb86d7-d1f0-4abb-a092-6a0678f53d3e/Main-Page)

&nbsp;



***
&nbsp;

## _**Target audience**_
People who want a visual of their eating habits and an easy way to track meals.

&nbsp;
## _**Why?**_
If you have ever tried to go on a diet you know how frustrating it can be to track your calories and even moreso keep up with it over an extended period of time. This app is taking something that's tedious and making it more visually appealing and easier to use. Stopping to take a picture of what you're about to eat makes you much more mindful. It's a visual reminder of how you use your calories.

&nbsp;
***
&nbsp;
## _**Outline of the content**_
#### I wrote this a long time ago and it's no longer entirely accurate. Things have changed. I'll update this documentation soon I swear!! [In the meantime please just go look at it](https://foodjournal.netlify.com/).
#### Camera Page
* The user will mostly be opening the app just to quickly add another meal, so the camera is the first thing that opens. After a photo is taken, the number keyboard comes up and the user can type the calories.

* The user finishes this step by pressing a ✓. The user can also be like nevermind and press an X to go to back to the main page.

* I think there should be an option to import a photo too.


#### Main Page / Grid View (I call it that in my head)
* The main part of this page is the grid of photos. The photo the user just took appears in the first available square. The time the photo was taken and the calorie count is displayed in the corners of the photo.

* There is a calorie total at the bottom of the page.

* As the user adds more photos, they appear on the grid and the calorie total updates. When on the Grid View/Main Page, the user can swipe left or right to look at a different day.

* This page also has links in the corner to open the Calendar or go to Settings. Also a + sign to add another photo (go to the Camera page).

* At the bottom of the page there is a question, "Did you meet your goal today?" The user selects green for yes and red for no.



#### Editing Page / Individual Photo View
* If the user wants to retake an image, delete a photo/entry, change the time, or change the calories, they can do so by tapping on a photo. This takes the user to the Editing Page.

#### Calendar
* I'm most excited about adding this feature next.
* When a user marks a day as good or bad, the green or red days show on the Calendar. This gives the user a visual of how they did overall that month. The user can swipe to check previous months or tap to view their food on a specific date.

#### Settings
* User login
* Body measurements / goals? (might add this feature later on along with weight tracking)

&nbsp;
***
&nbsp;
## _**Features to implement**_
* So many.
* Eventually use NativeScript to make this a native phone app.
* The biggest one would be a Calendar you can pick a date from (user can go back and look at another day), label a day good/bad (green/red) so user can see how they did overall. View previous months and track progress overall. User could notice patterns like if they have a lot of “red” days on the weekends or something. Perhaps with Google Calendar API.
* Set eating reminders?
* Nutritionix Nutrition API for the calorie count of common foods and branded grocery foods.
* Weight tracking.
* iPhone compatibility.
* Track symptoms like migraines, bloating, etc so you can narrow down which foods caused it.
* Improved UI showing the calorie total better, animations.
* Perhaps the ability to share your food diary.
* The ability to store foods you eat often so you can just add them without having to look up the calories again.
* There's more but I have to go now.
