# BMI-calcutator
## Creating a body mass index calculator

![homer weight](https://github.com/SuzanoVini/BMI-calcutator/blob/main/homer%20weight.gif)

The BMI calculator basically divides the weight by the square of  height of an individual to measure its body mass so that it can indicate its weight category, although it is not a diagnose of body fatness.

## Software Requirements
-*Visual Studio Code (VSCode)* [download VSCode](https://code.visualstudio.com/download)

-*Live Server extension in VSCode*

-*A browser of your choice (I used Opera GX)* [download Opera GX](https://www.opera.com/gx?utm_id=EAIaIQobChMIvuXAreL5-wIV2hTUAR0tmgZVEAAYASAAEgJ2KfD_BwE&utm_medium=pa&utm_source=google&utm_campaign=OGX_BR_Search_PT_T1_Brand_V2&gclid=EAIaIQobChMIvuXAreL5-wIV2hTUAR0tmgZVEAAYASAAEgJ2KfD_BwE)

## Step by Step
The first step to create the BMI calculator was to open a new folder in Visual Studio Code to group all of the program’s files. It was then created a reference list file for all weight categories in JSON (JavaScript Object Notation) named as listing.js.

![listing](https://github.com/SuzanoVini/BMI-calcutator/blob/main/lt%20img.png)

The second step was to create a interaction screen for the user, named index.html, therefore it had to be writen a HTML code to “draw” this screen.

![index](https://github.com/SuzanoVini/BMI-calcutator/blob/main/indx%20img.png)

This file contains coding that creates labels to type the gender, weight and height information, show the results value and the calulate button. It also contains a script code to bring an external script file to it, wich in this case is the searchcategory.js file. 
The HTML file tells the searchCategory.JS to the the following operations:
1.	Recieve the iformation the used typed and verify if it is not empty;
2.	Convert it to allow the BMI calculus, If those are not empty;
3.	Calcutale it;
4.	Search the category the user fits in using the BMI value generated;
5.	Once the script has found the category it will show the results in HTML page.  
 
Since it was not created a data server, an extension named LiveServer in VSCode had to be downloaded so that the web browser could interpret that the data is storaged in a server, that is essencial for a request to work.

![Live Server](https://github.com/SuzanoVini/BMI-calcutator/blob/main/live%20server%20install.png)

Obs.: It always has to be opened as a live server to work.

Next step was to create the Javascript file named “searchCategory” to get the information from the JSON file “listing.js” and bring it to the calculator so that it can tell wich weight category the individual fits in.

*JSON is a notation, in other words, it is the format of the data we are processing.*
This file is reponsable for validating the typed information and convert it when the user clicks the button “Calculate BMI” for the calculus to be done
 A command that starts “translating” JSON to a known format, an array in this case, is JSON.parse and it works like this:

JSON.parse(variablel)
The variable is the content in JASON format. In this case the code is inside the variable “answer”.
To run trought the elements of a vector it is used a loop estructure called “for Each”:
var categories = JSON.parse(answer);

        categories.forEach(function(category) {
            console.log(category);
        });
The command will run throught the various categories in listing.js file and print the resulting vectors in console.

It had also to be added value conditions to match the information contained in listing.js using the “if... else” command followed by an error alert for the user to know the input value is not acceptable.

The searchCategory.js file now looks like this:

![searchCategory](https://github.com/SuzanoVini/BMI-calcutator/blob/main/SC%20img.png)

After creating all the three files (Listing.js, Index.html and searchCategory.js) and opening the HTML file with a live server the calculator is finaly working!

![page layout](https://github.com/SuzanoVini/BMI-calcutator/blob/main/page%20layout.png)
