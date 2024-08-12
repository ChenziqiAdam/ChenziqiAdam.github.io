---
layout: single
title:  "How to clean Chinese text data"
date:   2024-08-10 16:12:00 +0800
categories:
  - CS
  - Skills
---
### How to clean Chinese novel data?
It is important for **ML** (machine learning) to prepare qualified data. After crawling on the internet, it is a must to clean the crawled data to improve the quality of data. This blog is an example for Chinese internet novels. [More about crawling see my another blog](https://ghost04718.github.io/cs/skills/2024/08/01/selenium-crawl.html).

{% highlight python %}
import re

def replace_quotes(text):
    """
    Replaces straight double and single quotes in the text with corresponding 
    Chinese-style curly quotes.

    Args:
        text (str): The text to replace quotes in.

    Returns:
        str: The text with replaced quotes.
    """
    
    def replace_double_quotes(match):
        """
        Replaces straight double quotes with opening or closing curly double quotes.
        
        Args:
            match (re.Match): The regex match object for double quotes.

        Returns:
            str: The corresponding curly double quote.
        """
        nonlocal is_opening_double
        if is_opening_double:
            is_opening_double = False
            return '“'  # Opening curly double quote
        else:
            is_opening_double = True
            return '”'  # Closing curly double quote
    
    def replace_single_quotes(match):
        """
        Replaces straight single quotes with opening or closing curly single quotes.
        
        Args:
            match (re.Match): The regex match object for single quotes.

        Returns:
            str: The corresponding curly single quote.
        """
        nonlocal is_opening_single
        if is_opening_single:
            is_opening_single = False
            return '‘'  # Opening curly single quote
        else:
            is_opening_single = True
            return '’'  # Closing curly single quote
    
    # Initialize state for quote replacement
    is_opening_double = True
    is_opening_single = True
    
    # Replace straight double and single quotes in the text
    text = re.sub(r'"', replace_double_quotes, text)
    text = re.sub(r"'", replace_single_quotes, text)
    
    return text


def clean_text(text, 
               end_marker_pattern=r'^.*全文完.*$\n?', 
               footnote_pattern=r'\n\s*[①②③④⑤⑥⑦⑧⑨⑩].*\n', 
               chapter_marker_pattern=r'第[一二三四五六七八九十百零]+章',
               translator_note_pattern=r'（译注：.*?）',
               replace_symbols=None,
               annotation_pattern=r'\[.*?\]'):
    """
    Cleans and preprocesses text from a book by removing unwanted parts,
    replacing symbols, and formatting quotes.

    Args:
        text (str): The raw text of the book.
        end_marker_pattern (str, optional): Regex pattern to identify end markers in the text. Defaults to '^.*全文完.*$\n?'.
        footnote_pattern (str, optional): Regex pattern to identify and remove footnotes. Defaults to '\\n\\s*[①②③④⑤⑥⑦⑧⑨⑩].*\\n'.
        chapter_marker_pattern (str, optional): Regex pattern to identify chapter markers. Defaults to '第[一二三四五六七八九十百零]+章'.
        translator_note_pattern (str, optional): Regex pattern to identify and remove translator notes. Defaults to '（译注：.*?）'.
        replace_symbols (dict, optional): Dictionary mapping symbols to their replacements. Defaults to common symbols.
        annotation_pattern (str, optional): Regex pattern to identify and remove annotations. Defaults to '\\[.*?\\]'.

    Returns:
        str: Cleaned and preprocessed text of the book.
    """
    
    # Set default replace symbols if none are provided
    if replace_symbols is None:
        replace_symbols = {
            '.': '。',
            ',': '，',
            ':': '：',
            ';': '；',
            '?': '？',
            '!': '！',
            '"': '“',
            "'": '‘',
            '(': '（',
            ')': '）',
            '[': '【',
            ']': '】',
            '{': '｛',
            '}': '｝',
            '-': '—',
            '...': '…',
            '<': '《',
            '>': '》',
            '/': '／',
            '\\': '＼'
        }

    # Remove unwanted patterns such as footnotes, translator notes, and annotations
    text = re.sub(r'校对by.*?©', '', text, flags=re.DOTALL)  # Remove proofreading notes
    text = re.sub(footnote_pattern, '', text)  # Remove footnotes
    text = re.sub(annotation_pattern, '', text, flags=re.DOTALL)  # Remove annotations
    text = re.sub(translator_note_pattern, '', text, flags=re.DOTALL)  # Remove translator notes
    text = re.sub(r'[①②③④⑤⑥⑦⑧⑨⑩]', '', text)  # Remove numbered markers
    text = re.sub(r'©.*', '', text)  # Remove copyright symbols

    # Normalize whitespace
    text = re.sub(r'\s*\n\s*', '\n', text).strip()  # Remove extra spaces around newlines
    text = re.sub(r'\s{2,}', ' ', text)  # Replace multiple spaces with a single space
    text = re.sub(r'\n{2,}', '\n', text)  # Replace multiple newlines with a single newline

    # Replace specified symbols with their replacements
    for old, new in replace_symbols.items():
        text = text.replace(old, new)
    
    # Remove end markers from the text
    text = re.sub(end_marker_pattern, '', text, flags=re.MULTILINE)

    # Replace quotes in each line
    lines = text.split('\n')
    for i in range(len(lines)):
        lines[i] = replace_quotes(lines[i])
    text = '\n'.join(lines)

    return text
{% endhighlight %}

This is just for reference. Feel free to add more according to your needs. Now it is done.
