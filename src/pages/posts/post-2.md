---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Capicua'
pubDate: 2022-07-01
description: 'In this post i will talk about Capicua numbers and come up with an algorithm to try if a givrn number is Capicua.'
author: 'Emilio'
image:
    url: '/Capicua_Blog/Capicua.png'
    alt: 'Example of a even and odd lenght Capicua.'
tags: ["Math", "Blogging", "Code", "Python"]
---

---

## What is a Palindromic Number?

A **palindromic number** is one that retains the same value when read forwards or backwards. In simpler terms, the sequence of digits remains unchanged when the number is reversed. This property can be observed in numbers of any length, whether they are simple integers or more complex numerical representations. Examples of palindromic numbers include:

* `12321`
* `45654`
* `9999`

In the mathematical context, palindromic numbers are considered a particular case of **palindromes**, which, in general, are sequences that maintain symmetry when reversed.

### Problem Statement

**How can we determine whether a given number is palindromic?**

We will now explore three different approaches to answer this question. Each method has its advantages and trade-offs in terms of clarity, performance, and memory usage.

---

### 1. Brute-Force Comparison

The first approach is to manually compare digits from opposite ends of the number until the center is reached. If all mirrored pairs match, the number is palindromic.




This method is efficient and readable. It avoids reversing the string entirely, which can be useful for large numbers.

---

### 2. Reverse and Compare

The second strategy is more straightforward. We convert the number to a string, reverse it, and compare it with the original.

```python
def is_palindrome_reverse(n):
    s = str(n)
    return s == s[::-1]
```

This is likely the most elegant and pythonic solution. However, reversing a string may have slightly higher computational cost depending on the language or implementation.

---

### 3. Half-Split Comparison (Optimized)

This is a more performance-oriented approach. If a number is palindromic, its second half (reversed) must match the first half. For odd-length numbers, we can ignore the middle digit.

```python
def is_palindrome_half(n):
    s = str(n)``
    length = len(s)
    half = length // 2
    if length % 2 == 0:
        first_half = s[:half]
        second_half = s[half:]
    else:
        first_half = s[:half]``
        second_half = s[half+1:]
    return first_half == second_half[::-1]
```

This approach avoids reversing the full string and may perform better for large numbers or when embedded in performance-sensitive systems.

---


Shout out to Gil and Connor on bringing up the first 2 algorithms!!! \
Thanks for reading ✌

