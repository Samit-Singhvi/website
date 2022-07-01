---
id: markdown
title: Markdown
---


# Markdown

## Definition
* Markdown is a markup language which contain certain symbols to format text, use images and links etc. It is used for writing documents that can be directly converted to HTML webpages by using certain converters, although many editors comes  with the facility to directly convert them to HTML pages, e.g. StackEdit

* **Markup Language** Its a language which uses syntax to create documents that are readable both by humans as wells as computers, they differ by programming language in a way that they are understandable by computers not directly by humans.

## Benefits

1. Used for various purpose like webpages, presentations, thesis, notes, books etc.
2. Portable i.e can be run in any other application and still be understandable
3. Platform Independent

## Syntax for important operations

### 1. Bold and Italic
To emphasize on any text i.e. to make it bold, we would enclose it within \*\*(double asterisks), until the closing double asterisks are encountered the text will be made bold.
* Example
    BITS Pilani is situated in \*\*Jhunjhunu\*\* district of Rajasthan.
* This is how it looks- 
    BITS Pilani is situated in **Jhunjhunu** district of Rajasthan.

* To make any text look italic we would enclose it within __( underscore), until the closing underscores are encountered the text will be made bold.
* Example
    BITS Pilani was established in the  \_ year 1964\_.
* This is how it looks- 
    BITS Pilani was established in the  _year 1964_ district of Rajasthan.

### 2. Headings

* We can insert headings in markdown which looks different and appealing then the remaining text highlighting the purpose of the text.
**Insert number of # according to the heading number you want to insert**
* Example
    \#BITS Pilani.
    \##Birla Institute of Technology and Science
* This is how it looks- 
# BITS Pilani.
## Birla Institute of Technology and Science

### 3. Links

There are two types of links- inline links and reference links.

#### Inline Links

* To insert links, use the following syntax
    [Text_to_be_displayed](Link_to_the_webpage)**
* Example
    To visit Wikipedia, \[Click here](www.wikipedia.org)
* This is how it looks-
    To visit Wikipedia, [Click here](www.wikipedia.org)

#### Reference Links

* It is used when we put just the reference of the webpage which is to be linked, and that link is provided within the webpage.
* Example
    To search anything I use, \[The No.1 Site][Guess].
    \[Guess]: <https://www.google.com/> 
* This is how it looks
    To search anything I use, [The No.1 Site][Guess].
    [Guess]: <https://www.google.com/> 

### 4. Images

* Its syntax  is almost similar to links syntax.
* Example
    This is a cow ![Alternate text](Link to the image)
* And for reference images the same syntax of link is used , just we have to place an exclamation mark before the square brackets.

### 5. Blockquotes

* It is used for highlighting certain quotes to make them look different.
We have to just place a ">" sign before the text we want to make quote.
* Example
    One of the earliest quote we have hears as child was:
    \>"Honesty is the best policy"
* This is how it looks-
    One of the earliest quote we have hears as child was:
   > "Honesty is the best policy"

### 6. Lists

There are two types of list- unordered list with bullet points, and ordered list with numbering.

* Unordered List

List items-
\* Item1
\* Item2
\* Item3
* This is how it looks-

List items-
* Item1
* Item2
* Item3
 
* Ordered List

List items-
1.  Item1
2. Item2
3. Item3

### 7. Paragraphs

For making a paragraph in Markdown, syntax is similar to HTML
* \<p>**Birla Institute of Technology & Science, Pilani** (**BITS Pilani**) is a private [deemed university](https://en.wikipedia.org/wiki/Deemed_university "Deemed university") in [Pilani](https://en.wikipedia.org/wiki/Pilani "Pilani"), India.[[12]](https://en.wikipedia.org/wiki/Birla_Institute_of_Technology_and_Science,_Pilani#cite_note-12) It focuses primarily on higher education and research in engineering and sciences.[[13]](https://en.wikipedia.org/wiki/Birla_Institute_of_Technology_and_Science,_Pilani#cite_note-13) After expansion to a campus in Dubai, it has become the first international deemed university, spearheading in science, engineering, management and research with 5 established campuses and 15 academic departments.\</p>

### 8. Horizontal Rule

* For creating a horizontal rule, put " *** " i.e. three asterisks in the line wherever u want to insert.
* Example

    This is BITS Pilani
    \*\*\*
    One of the best institute in the country.
* This is how it looks-
    This is BITS Pilani
    ***
    One of the best institute in the country.

* References-
1. https://www.markdowntutorial.com/
2. https://www.markdownguide.org/getting-started/
