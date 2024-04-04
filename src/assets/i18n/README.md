# Translation files

## WARNING: Do not edit the files in this directory manually. Read on.

## Overview

The system has a rather simplistic notion of translation.
The basic idea is that every chunk of text that can be expressed in either language is denoted
by a simple token like `_First_Round_Byes_`.
In the app's HTML a translation pipe is used to look up the correct version of the value of
the token depending on the language selected by the user. The ngx-translate package is used to do this.

The files in the subdirectories of this directory contain the French and English translations for groups
sets of tokens related to each part of the ranking system.
If you look at any pair of en.json nd fr.json you will see what is going on.

## Process

So, if I am not supposed to edit the fr.json and en.json files, how the heck do I get the translation
information created and updated?

First we take a step back. When developing the system we started in English but knew we needed French translations.
So we created the tokens and their English values.

But we knew whe needed a process by which we could give the tokens and their English versions to a translator
(at Tennis Canada) to get the translations done.

Giving the en.json files to the translator would be tough for them as editing the JSON by hand is a little touchy.
We really just wanted to give them a spreadsheet with the English strings in one column and get them to put the
French strings in another.
So that is basically what we did.  
However, we went a little further to make the process work smoothly over time.

### Where are the translation spreadsheets?

They are in a Google workbook called "Rankings Explained Site Translation"  which has one worksheet corresponding
to each directory within this directory. Access to the workbook can be assigned by Arun Nath.

### What is the process for changing a text token and it's translation?

Sometimes, Tennis Canada decides it want to change, for example, the working of a ranking rule if Adult rankings.
Here is how the process goes.

1. the developer makes the change to the English language column in the Adult worksheet of the workbook. The developer then marks column B (with their initials or simply with an X) to indicate that the French text needs updating.
2. the developer *might* put in a proposed French translation using Google Translate or some such.
3. typically the developer does several such changes at one time
4. when all such changes are done, the developer asks Tennis Canada to update the marked translations.
5. Tennis Canada gives workbook to the translator and the translator looks for the marked lines, sets the French translation and marks it as complete by putting their initials in column A.
6. when the translations are done, the developer updates the i18n files using the updated worksheet and deletes the markers in columns A and B.

### How do you get the data from a Worksheet to the en.json and fr.json files?

The translation worksheets columns G and H are essentially the meat of the en.json and fr.json files.

So lets look at the Adult en.json file. It looks like this:

```shell
{
  "_Adult_Events_": "Adult Events",
  "_Adult_PT_Title_": "Point Awards for Adult Tournaments",
  "_adult_eg_": "Adult",
  "_adult_eg_title_": "Adult",
  "_Adult_Ranking_Scope_": "Adult Rankings Scope",
  "_Adult_Ranking_Scope_Detail_": "This includes rankings for Men’s: 5.0 (WTN 1 to 25), 4.5 (WTN 22 to 29), 4.0 (WTN 25 to 32), 3.5 (WTN 29 to 35), 3.0 (WTN 32 to 37), and 2.5 (WTN 35 to 40) and Women’s 5.0, (WTN 1 to 27), 4.5 (WTN 24 to 31), 4.0 (WTN 27 to 34), 3.5 (WTN 31 to 37), 3.0 (WTN 34 to 38.5) and 2.5 (WTN 37 to 40) for both singles and doubles. ",
  "_Adult_Ranking_Scope_Detail_1_": "Note that genderless singles adult tournaments do not reward any national ranking points. However, results from genderless singles adult tournaments are processed for WTN Please and will count towards a player's WTN rating. ",
  "_Adult_Ranking_Focus_": "Primary Focus - Provincial Rankings",
  ...
  "_Adult_Events_And_Juniors_Detail_": "Individual provincial tennis association may or may not allow juniors to participate in various levels of adult play.  When juniors are permitted to play, they are treated the same as other Adult players and can build an Adult ranking.  Results from junior tournaments do not count towards Adult rankings. Results from Adult tournaments do not count towards Junior rankings."
}
```

Column G of the spreadsheet is exactly the same minus the opening and closing brace.
So the update process is to just delete everything between the braces in en.json and replace it with the content of
column G of the worksheet. Done.

Likewise, update the fr.json by removing everything between the braces and replacing with the content
of column H from the worksheet.

### How do you add a new text token?

The process is basically the same with a couple of differences.

1. When you add a new line to a worksheet you have to make sure that the formulas in column G and H are copied to the new line.
2. BEWARE of adding a new line at the end of a worksheet. Formula for the last row on the worksheet is slightly different from all the other rows in that it excludes a trailing comma to make valid JSON. So if you add a row at the end, make sure the new bottom row *and only the new bottom row* has the comma exclusion formula.
