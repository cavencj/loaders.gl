# CRC32HashTransform

<p class="badges">
  <img src="https://img.shields.io/badge/From-v2.3-blue.svg?style=flat-square" alt="From-v2.3" /> 
</p>

## Static Methods

#### `CRC32HashTransform.hash(data: ArrayBuffer, options?: object): Promise<string>`

#### `CRC32HashTransform.hashSync(data: ArrayBuffer, options?: object): string`

Calculates the CRC32 hash of a byte array.

## Remarks

- This transform supports streaming hashing.
