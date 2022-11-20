# _Mr. Roboger's Neighborhood_

#### By _**Dani Steely**_

#### _A simple application that translates a user input number into a robot message, replacing some numbers with text_

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _Markdown_
* _Google Fonts_
* _TDD method_

## Description

_This simple application/game uses a form to gather an input number from the user, then returns an array of values created from iterating from 0 - the user input number. Certain numbers in the array are replaced with text. These substitutions include: "Beep!" replaces any number that includes a 1 digit, "Boop!" replaces any number that includes a 2 digit, and "Won't you be my neighbor?" replaces any number that includes a 3 digit. The hierarchy of substition by priority level: 3, 2, 1. The reset button in the results section reloads the location. This project used TDD to build the Business Logic Javascript_

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Open index.html_

## GitHub Pages Deployment Link

[GitHub Pages Link](https://danis91.github.io/mr-roboger/)

## Known Bugs

*_No known bugs_

## License

_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._

Copyright (c) _11/18/22_ _Dani Steely_

## Contact Information

_Dani Steely_
[DaniS91 on Github](https://github.com/DaniS91)
_Email me at danisteelyart@gmail.com_

## TDD Outline

#### Describe: countAndReplace()
_Test: "It should take number input and return an array of numbers counting from zero to the inputted number."_
_Code:_
_const number = 7;_
_countUpTo(number);_
_Expected Output: [0, 1, 2, 3, 4, 5, 6, 7]_

_Test: "It should take a number input, and first create an array of numbers from 0 to the input number; then replace any element that contains a 3 with the string 'Won't you be my neighbor?'"_
_Code:_
_const number = 13;_
_countUpTo(number);_
_Expected Output: [0, 1, 2, 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 10, 11, 12, 'Won't you be my neighbor?']_

_Test: "It should take a number input, and first create an array of numbers from 0 to the input number. Then replace any elements that contains a 3 with the string 'Won't you be my neighbor?'; it should then replace any remaining elements that contains a 2 with the string 'Boop!'"_
_Code:_
_const number = 12;_
_countUpTo(number);_
_Expected Output: [0, 1, 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 10, 11, 'Boop!']_

_Test: "It should take a number input, and first create an array of numbers from 0 to the input number. Then replace any elements that contains a 3 with the string 'Won't you be my neighbor?'; it should then replace any remaining elements that contains a 2 with the string 'Boop!'Then it should also replace any remaining elements that contains a 1 with the string 'Beep!'_
_Code:_
_const number = 12;_
_countUpTo(number);_
_Expected Output: [0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!']_