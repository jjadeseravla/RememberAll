# Remember All

[About](#About) | [Instructions](#Instructions) | [Technologies used](#Technologies-used) | [Approach](#Approach) | [Contributors](#Contributors) |


# About

Very cool app that lets you remember folks when you can't even.

# Instructions

```
# Clone the repo
$ git clone git@github.com:jjadeseravla/RememberAll.git

# Go into the repo
$ cd RememberAll

# Install all the packages
$ npm install

# Run the unit tests
$ npm test
```

#### Download either Xcode or Android Studio and run virtual machine
- [Xcode](https://itunes.apple.com/gb/app/xcode/id497799835?mt=12)
- [Android Studio](https://developer.android.com/studio/index.html)

When you're ready to run the application
```
react-native run-ios
```
or
```
react-native run-android
```


# Technologies used
- React Native
- Jest & Chai for unit tests
- Cavy for integration tests
- Realm DB
- XCode, Android Studio for Iphone / Android Emulation
- Waffle.io


# Contributors

- Jade Alvares [@jjadeseravla](http://github.com/jjadeseravla)
- Simon Ashbery [@siashbery](http://github.com/siashbery)
- Kye Bracey [@kynosaur](http://github.com/kynosaur)
- Dom McDonnell   [@dmcd84](https://github.com/dmcd84)
- Lubos Michalic  [@lubosmichalic](https://github.com/lubosmichalic)
- Jenny Wem  [@wemmm](http://github.com/wemmm)

# How team RememberAll does things
#### CHARTER:
```
We have stand-ups at 9:42 every day.
We will endeavour to have a laugh.
We commit in the present tense.
We use sensible, informative commit messages.
We review any issues as they arise.
We definitely have retros at 6PM, or 5PM in the event that someone is leaving early.
We actively rotate the leaders of retros and stand-ups.
We will have lunch/drinks together at some point (and we will not talk about code)
We respect that we all have lives outside of coding.
Well-being of team members comes first.
```
# Approach

- How to solve the problem
- Ethics: 'If you have to "get weird" to get some information from someone... it's probably not ok'
- wrote user Stories
- Defined MVP as a form with a single text field that saves something to the database
![Mock up of MVP](https://user-images.githubusercontent.com/25978953/28678166-900400c8-72e7-11e7-919f-3211427a2e55.jpg)
- Learnt how to use React Native
- Learnt how to use Realm in conjunction with React Native
- Learnt how to test React Native (<-- we found this challenging!)
- Mob programmed our way to MVP (Hallelujah!!)
![Mob programming](https://user-images.githubusercontent.com/25978953/28678164-8ffac0c6-72e7-11e7-9020-3ef450d7fb0d.jpg)
![MVP](https://user-images.githubusercontent.com/25978953/28678167-900db488-72e7-11e7-86a1-1d3bb0333c1a.png)
- Iterated on MVP by adding one feature at a time

# User Stories
```
As a user,
So I can remember more about people I meet,
I would like an app to help me with this.

As a user,
So I can remember a person,
I would like to add a contact.

As a user,
So I can add information about a person,
I would like to add tags to a contact.

As a user,
So I can look up people whose names I've forgotten,
I would like to search my contacts by any details I know about them.

As a user,
So I can look up the details of a person I know,
I would like to be able to search contacts by name.

As a user,
So I can see all the information and details I know about a specific contact,
I would like to see a contact's profile.

As a user,
So I can see and browse all existing contacts,
I would like to see a full list of contacts upon opening the app.

As a user,
So I can keep my information up to date,
I would like to be able to update details of an existing contact.

As a user,
So I can better remember things about a person,
I would like to see a narrative of things I know about them on their profile.
```
![Mock up of profile page](https://user-images.githubusercontent.com/25978953/28678165-90039138-72e7-11e7-9b4e-c65f46998bd8.jpg)
