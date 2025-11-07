#!/bin/bash

# Find all .js files in the dist directory
find ./dist -type f -name "*.js" | while read file; do
  # Add .js extension to relative imports that don't already have one
  # This regex looks for 'from "./path/to/module"' and changes it to 'from "./path/to/module.js"'
  # It specifically avoids adding .js if an extension (like .js, .cjs, .mjs) is already present
  sed -i -E 's/(from "\.\/[^"]+)"(?!\.js"|\.cjs"|\.mjs")/
1.js"/g' "$file"
  sed -i -E 's/(from '\.\/[^\']+')(?!
.js'|
.cjs'|
.mjs')/
1.js'/g' "$file"
done
