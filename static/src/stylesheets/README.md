# Stylesheets

1. Settings
2. Vendor (generated)
3. Tools
4. Generic
5. Base
6. Objects
7. Components
8. ???

## Settings

- global variables
- config switches

## Vendor

(generated)

- external libs
- vendor styles


## Tools

- mixins
- functions

## Generic

- ground-zero-styles
- normalize
- resets
- box-sizes

## Base

- unclassed HTML elements
- type selector

## Objects

- cosmetic free design patterns

## Components

- designed components
- UI

## Do's and Don'ts

### Naming Convention (BEM)
BEM stands for **b**lock, **e**lement, **m**odifier and is a front-end naming methodology thought up by the guys at Yandex. (https://api.yandex.com/bem/)
It is a smart way of naming CSS classes to give them more transparency and meaning to other developers. 

The naming convention follows this pattern:
```css
.block {}
.block__element {}
.block--modifier {}
```

#### Block
A visual and functional component of the interface. For example, a menu, header, or button.
Blocks are always nouns.

#### Element
Part of a block that performs a particular function. It only exists within the block and does not have any use on its own.
Elements are always nouns.

#### Modifier
A property of a block or element that changes its appearance or behavior. For example, color, size, and state.
Modifiers are always adjectives.

## Color names
Color variables must have a unique name. For this purpose we are using the tool [Name That Color](http://chir.ag/projects/name-that-color).
