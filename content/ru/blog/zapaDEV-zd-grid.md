---
title: 'zapaDEV - zdGrid'
description: '| Custom Responsive Flex SASS(SCSS) Mini Grid System'
createdAt: 2022-01-12
---

## Description
### Use
```html
<!-- Padded container / No gutter -->
<div class="zdcontainer">
    <div class="zdgrid">
        <div class="zdcell">
            ...
        </div>
        <div class="zdcell">
            ...
        </div>
    </div>
</div>

<!-- Responsive / Gutter / Сontainer without padding-->
<div class="zdcontainer-full">
    <div class="zdgrid zdgrid-x zdgrid-y">
        <div class="zdcell md-6 lg-4 xlg-3 xxlg-2">
            ...
        </div>
        <div class="zdcell md-6 lg-4 xlg-3 xxlg-2">
            ...
        </div>
    </div>
</div>
```

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

$global-width: 1920px;
$grid-gutters: 20px;
$grid-columns: 12;

$breakpoints: (
	md: 720px,
	lg: 1200px,
	xlg: 1500px,
	xxlg: 1920px,
);


.zdcontainer {
    max-width: $global-width;
    margin-left: auto;
    padding-left: $grid-gutters / 2;
    padding-right: $grid-gutters / 2;

    &--full {
		max-width: $global-width;
		margin-left: auto;
		//overflow: hidden;
	}
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
        & > .zdcell {
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
        & > .zdcell {
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
        & > .zdcell {
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

