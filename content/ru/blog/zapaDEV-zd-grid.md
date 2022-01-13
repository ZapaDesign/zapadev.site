---
title: 'zapaDEV - zdGrid'
description: '| Custom Responsive Flex SASS(SCSS) Mini Grid System'
createdAt: 2022-01-12
---

## Description

## Compoment
> <zapadev-zd-grid></zapadev-zd-grid>

## Code

```scss
/*
* Title: zapaDEV Grid
* Description: Responsive Flex SASS(SCSS) Mini Grid System (Grid, Gutters, ...)
* Author: zapaDEV
* Version: 0.01a
*/

.zdcontainer {
    max-width: $global-width;
    margin-left: auto;
    padding-left: $grid-gutters / 2;
    padding-right: $grid-gutters / 2;
}

.zdgrid {
    display: flex;
    flex-wrap: wrap;
}

.zdcell {
    flex-basis: 100%;
    box-sizing: border-box;

    @each $breakpoint, $value in $breakpoints {
        @media (min-width: $value) {
            @for $i from 1 through $grid-columns {
                &.#{$breakpoint}-#{$i} {
                    flex-basis: (100 / ($grid-columns / $i) ) * 1%;
                }
            }
        }
    }
}


.zdgrid {
    &--x {
        margin-left: $grid-gutters / -2;
        margin-right: $grid-gutters / -2;
        .zdcell {
            margin-left: $grid-gutters / 2;
            margin-right: $grid-gutters / 2;

            @each $breakpoint, $value in $breakpoints {
                @media (min-width: $value) {
                    @for $i from 1 through $grid-columns {
                        &.#{$breakpoint}-#{$i} {
                            flex-basis: calc(((100 / (#{$grid-columns} / #{$i})) * 1%) - #{$grid-gutters});
                        }
                    }
                }
            }
        }
    }

    &--y {
        margin-top: $grid-gutters / -2;
        margin-bottom: $grid-gutters / -2;
        .zdcell {
            margin-top: $grid-gutters / 2;
            margin-bottom: $grid-gutters / 2;


            @each $breakpoint, $value in $breakpoints {
                @media (min-width: $value) {
                    @for $i from 1 through $grid-columns {
                        &.#{$breakpoint}-#{$i} {
                            flex-basis: calc(((100 / (#{$grid-columns} / #{$i})) * 1%) - #{$grid-gutters});
                        }
                    }
                }
            }
        }
    }

    &--x-y {
        margin: $grid-gutters / -2;
        .zdcell {
            margin: $grid-gutters / 2;

            @each $breakpoint, $value in $breakpoints {
                @media (min-width: $value) {
                    @for $i from 1 through $grid-columns {
                        &.#{$breakpoint}-#{$i} {
                            flex-basis: calc(((100 / (#{$grid-columns} / #{$i})) * 1%) - #{$grid-gutters});
                        }
                    }
                }
            }
        }
    }
}
```

