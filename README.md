# National Bank Rankings

It presents a very detailed description of the rankings system for Tennis Canada covering
Junior, Open, Adult, Masters and Wheelchair rankings and all the categories within.

This project stated with Angular JS in 2012 and has migrated to later releases of Angular.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.

## Build

When building for development use `ng build` to build the project.

When building for production, you need to use `ng build --configuration=production`.

The build artifacts will be stored in the `dist/` directory.

## Testing

There are no automated tests.

## Terminology

### Rankings Categories

These are the categories for which VR maintains rankings.  
There are a lot of them ranging from Junior Boys Under 12 doubles to NTRP 3.5 Mixed Doubles to
Open Men to Quad Wheelchair to 80 & Over Womens Singles.

### Rankings Groups

In Tennis canada there are Rankings Groups for Open play, Juniors,
Masters, Wheelchair and Adult.

### Event Groups

Within a Rankings Group there can be several Event Groups.
(An Event Groups is built from Ranking Events - see below.)
Juniors include event groups for international events, national events, provincial events
and for juniors playing in Open events in Canada.

The Masters (formerly Seniors) Event Group includes Ranking Events for
Summer Nationals, Indoor Nationals, And three tiers of Provincial level events.

The Open Event Group includes Ranking Events for 5 levels (1000, 350, 200, 100 and 50).

The Wheelchair Event Group has an Event Group for each level of play each with exactly one Ranking Event.

Adults have a single Event Group with a single Ranking Event.

#### Junior Event Group and Sub Groups

Because there are so many types of Junior events that can award points for Junior, the Junior Event Group is
built as a Group of Groups.

The International Event Group is built of sub-groups for each age and gender.
Each of those sub-groups lists specific Ranking Events corresponding to international events from which
juniors of the correct age and gender can earn points.

The National Event Group is build of sub-groups for boys and girls events at Junior Nationals.
Each of those sub-groups is built of Ranking Events at each age group for the gender of the sub-group.

The Juniors In Open Events Event Group currently has only one sub-group for with Rankings Events for points
juniors can earn playing in domestic Open events.  
Prior to 2019, there was a large sub-group for what juniors could earn playing in various levels of Professional
Events, but that is no longer in use as we switched to a straight "currency Conversion" model from Pro points
to Canadian Junior points for those events.

If that was not messy enough, we now move on to the Junior Provincial Event Group.
In this case there is a separate Event Group for each PTA's Ranking Events.
These events have changed a lot over the years and in 2018 they were normalized so
that each PTA has "Star" levels at 5, 4, 3.5, 3, and 2.
However, each PTA has its own nomenclature for these levels as well.

### Ranking Event

Event Groups are built as a list of Ranking Events.
From the section above, you can see that there are a lot of Event Groups and a *lot* of ranking
events that the system has to deal with.
Ranking Events themselves are quite simple, they are just a name and a rating.
The name is just a translation token name which gets converted to text in French
or English by the translation system.
The rating part is what is used by the system to compute the points table for that Ranking Event.

## Assets

Because the data in the application is quite static, it is kept as assets rather than
in a server database.
However, there are changes year over year to rules, to junior provincial ratings or even
to the event groups supported by the ranking system.
All this data is stored in the *assets* directory of this repo.

The main tool for storing data that changes from year to year is the *KeyedStaticCollection*
which allows us to store the value of a certain item and the years in which that value
is in effect. Strong suggestion that when learning the system, have a look at the
*KeyedStaticCollection* Class as it is used throughout the assets.

Also, user interface translations are held in the Assets directory under *i18n*.
See below for more.

## French and English

### Overview

The system has a rather simplistic notion of translation.
The basic idea is that every chunk of text that can be expressed in either language
is denoted by a simple token like `_First_Round_Byes_`.
In the HTML a translation pipe is used to look up the correct version
of the value of the token depending on the language selected by the user.
The *ngx-translate* package is used to do this.

### Translation Data

The application is built to load all the token values from the *assets/i18n* directory
on startup and whenever the user changes languages.

** IMPORTANT: DO NOT EDIT *assets/i18n* files manually, there is a process described in the README in that directory.**_

## Keeping History Intact

Some aspects of the system change every year. The Junior Provincial Rating factors, for example,
are updated at the end of each year for the following years rankings.
This is handled adequately by the *KeyedStaticCollection* in *assets/provinces/ratings*.

However, the wording of rules or rankings rules themselves come into effect at different times, and
we want to be able to make sure that when the rankings site is focused on a particular year, the
details are accurate for that year.
For example for Seniors, the names of the types of events
supported by the rankings started as one thing in 2013, then changed in 2019 and again in 2022.
To accomplish this, we sometimes need to add new translation tokens to the translation system.
For example, the wording for senior provincial tier one events changed in 2019.
Prior to that we had an event group that came into effect in 2013 which pointed to a
translation token `_s_prov_tier_1_`.
In 2019 that description changed.
We add a new token called
`_s_prov_tier_1_2019_`.
Then, where we had a *KeyedStaticCollection* that referred to `_s_prov_tier_1_` like this:

```shell
  new KeyedStaticCollection<EventGroup>({
  '2013': new EventGroup(
  '_senior_eg_',
  [
    ...  
    new RankingEvent('_s_prov_tier_1_', new Rating(400)),
    ...
  ]
),
```

Then for 2019 we add (that is, we do not replace)

```shell
  new KeyedStaticCollection<EventGroup>({
  '2019': new EventGroup(
  '_senior_eg_',
  [
    ...  
    new RankingEvent('_s_prov_tier_1_2019_', new Rating(400)),
    ...
  ]
),
```

Now if the user elects to look at the ranking year 2016 (or any year from 2013 to 2018), they see it as it was (i.e. they
see the description that came into effect in 2013.
But if the user looks at ranking year 2019 or later, they see the description that came into effect in 2019.
