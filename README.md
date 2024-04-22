Namaste React 🙂🎉

# parcel
 - Dev Build
 - Local Server
 - HMR -> Hot Module Replacement
 - File Watching Algorithm - written in C++
 - Caching - Faster Builds
 - Image Optimization
 - Minification
 - Bundling
 - Compress
 - Consistent Hashing
 - Code Splitting
 - Differential Bundling - support older browsers
 - Diagnostic
 - Error Handling
 - HTTPS
 - Tree Shaking - remove unused code
 - Different dev and prod bundles 

 * Header
 *   Logo
 *   NavItems
 * Body
 *   Search
 *   ResturantContainer
 *     ResturantCard
 *       Img
 *       Name of the resturant, Star Rating, Cuisins, etc
 * Footer
 *   -Copyright
 *    Links
 *    Address
 *    Contact

# Two Types of Export/Import 

1) Defult export -- eg -> export default Header; 
   you have to import Header like this ----> import Header from '/Header'

2) Names export --> eg -> export const Header
   you have to import it in other component --> import {Header} from '/Header'

# At the end you will have only one js file that's do all the things

# if we have 1 js file then the size will be 2 big when we have two many components for a big application, on performance it will effects

# we have to make smaller bundles of these files that process is called as Chunking (App Chunking, code splitting, dynamic bundling, lazy loading)

# Import Grocery as like lazy loading, when i go to that link, only then load it's called on demand loading

# lazy is function given by react, named export {}



# Redux Toolkit

 - npm install @reduxjs/toolkit and react-redux
 - Build our store
 - Connect our store to our app
 - Slice (CartSlice)
 - Dispatch(action)
 - selector


