---
title: 'zapaDEV - zdGrid'
description: '| Custom Responsive Flex SASS(SCSS) Grid'
createdAt: 2022-01-12
---

## Description

## Compoment
> <zapadev-zd-grid></zapadev-zd-grid>

## Code

```scss
$global-width: 1920px;
$grid-gutters: 20px;
$grid-columns: 12;

$breakpoints: (
    md: 721px,
    lg: 1201px,
    xlg: 1501px,
    xxlg: 19201px,
);



.zdcontainer {
    max-width: $global-width;
    margin-left: auto;
}

.zdgrid {
    display: flex;
    flex-wrap: wrap;

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

    &--x {
        margin-left: calc(#{$grid-gutters} / -2);
        margin-right: calc(#{$grid-gutters} / -2);
        .zdcell {
            margin-left: calc(#{$grid-gutters} / 2);
            margin-right: calc(#{$grid-gutters} / 2);

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
        margin-top: calc(#{$grid-gutters} / -2);
        margin-bottom: calc(#{$grid-gutters} / -2);
        .zdcell {
            margin-top: calc(#{$grid-gutters} / 2);
            margin-bottom: calc(#{$grid-gutters} / 2);


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
        margin: calc(#{$grid-gutters} / -2);
        .zdcell {
            margin: calc(#{$grid-gutters} / 2);

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

