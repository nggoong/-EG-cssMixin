# eg-cssutil

## install

> npm install eg-cssutil

## pxToVw(px: number, base: number = 360)

A utility function that converts pixel values (px) to viewport width units (vw).
If the baseWidth is not provided, it defaults to 360px, which is commonly used for mobile-first designs.

### 📌 Parameters:

* px – The pixel value to convert.
* base (optional) – The width of the design device. Defaults to 360.

### 📌 Returns:

A string representing the calculated vw value, rounded to two decimal places (e.g., '8.33vw').

## pxDivide(px: number, divisor: number = 3)

This utility function calculates the appropriate pixel (px) value for a given device width based on a design reference width (e.g., from a PSD file).
It scales the original pixel value according to the device's current width and returns the result as a string with the 'px' unit.
The returned value is rounded to the nearest integer.

### 📌 Parameters:

* px (number) – The original pixel value from the design.
* divisor (number, optional) – The design reference width (e.g., from the PSD). Defaults to 360.

### 📌 Returns:

A string representing the scaled pixel value (e.g., '42px'), calculated based on the device’s actual width.
The value is rounded to the nearest integer.

