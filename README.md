# unit-coin

> Unitize the game gold coins.

## Installation

Using npm
```shell
$ npm install unit-coin -S
```

## Examples

``` js
import { unitCoin } from 'unit-coin'

unitCoin(500) // 500
unitCoin(1_020) // 1.02k
unitCoin(1_210_000) // 1.21m
unitCoin(1_210_000_000) // 1.21b
unitCoin(1_210_000_000_000) // 1.21t
unitCoin(1_210_000_000_000_000) // 1.21aa
...
unitCoin(1.21 * 10 ** 90) // 1.21zz
```