```
 888888ba                                          dP                          .d888888  dP dP
 88    `8b                                         88                         d8'    88  88 88
a88aaaa8P' .d8888b. 88d8b.d8b. .d8888b. 88d8b.d8b. 88d888b. .d8888b. 88d888b. 88aaaaa88a 88 88
 88   `8b. 88ooood8 88'`88'`88 88ooood8 88'`88'`88 88'  `88 88ooood8 88'  `88 88     88  88 88
 88     88 88.  ... 88  88  88 88.  ... 88  88  88 88.  .88 88.  ... 88       88     88  88 88
 dP     dP `88888P' dP  dP  dP `88888P' dP  dP  dP 88Y8888' `88888P' dP       88     88  dP dP
ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
                          an app to help you remember people you meet
```

[About](#What-is-this?) | [Instructions](#How-do-I-use-it?) | [Technologies used](#Technologies-used) | [Approach](#Approach) | [Contributors](#Contributors) |


# What is this?

![icon](https://github.com/wemmm/RememberAll/blob/master/rememberall.png)

A very cool React Native app that helps you remember folks when you can't even.

# How do I use it?

Clone this repository to your machine:
```
$ git clone git@github.com:jjadeseravla/RememberAll.git
```

Navigate to the repo:
```
$ cd RememberAll
```

Install all the packages:
```
$ npm install
```

Run the unit tests:
```
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

#### Initial Mockups:

To help us visualise a product, we worked on some initial sketches of what our 'dream app' might look like. Although our layout was ultimately a little different, you can see the colour choices and narrative elements persisted into the final app.

![Mock up of MVP](https://user-images.githubusercontent.com/25978953/28679041-e4dfb0e0-72e9-11e7-9e00-01a53b29992a.jpg)
![Mock up of profile page](https://user-images.githubusercontent.com/25978953/28679035-e2232030-72e9-11e7-8b37-ea9fdefea47a.jpg)

#### Approaching the problem:

- We had to consider an ethical angle, as one of our intial ideas was scraping info from social networks. Our conclusion? If you have to "get weird" to get some information about someone... it's probably not okay.
- Due to ethical concerns we chose to move away from info scraping and towards a 'friendly' contacts app that allowed users to store any info they found relevent about a contact, search by any tag or field, and see a sort, readable narrative interpolated from that info. So we proceeded to write user stories for this set of features.
- We defined our MVP as a form with a single text field that persists a name to a database.
- To achieve this, we had to learn how to use React Native and Realm.
- But even more challenging than learning this new tech- testing new tech!
- So we learned how to unit test with Jest, and how to do integration tests with Cavy.
- We mob programmed our way to MVP- hallelujah!!
- Then we iterated on our MVP by adding one feature at a time- additional fields, a tagging system, search functionality, narrative generation, profile editing and a bit of styling.

#### Our Minimum Viable Product:

![MVP](https://user-images.githubusercontent.com/25978953/28679045-e6cc4a9e-72e9-11e7-8b0d-deae2125280d.png)

#### ...And the styled, feature-having version:

![nottheMVP](https://github.com/wemmm/RememberAll/blob/master/mvp3.png)

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

# Miscellany

#### Click the still below to see a live action advert featuring the incredible acting skills of [Lubos](https://github.com/lubosmichalic) and [Simon](http://github.com/siashbery)!
[![rememberallad](https://img.youtube.com/vi/9dVepUFJpgI/0.jpg)](https://www.youtube.com/watch?v=9dVepUFJpgI&feature=youtu.be)

#### A beautiful action shot of us mob programming:
![Mob programming](https://user-images.githubusercontent.com/25978953/28679049-e8c75d70-72e9-11e7-86f9-e1664420003b.jpg)
