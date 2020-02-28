// // in `onRouteUpdate` function

// // something...
// // function onImageLoad() {
// //     // something...
// //     imageElement.style.transition =
// //       'opacity 0.5s, transform .3s cubic-bezier(.2,0,.2,1)'
// //     // something...
// //   }
// //   // something...
//   const { mediumZoomOptions } = pluginOptions
  
//   if (mediumZoomOptions) {
//     const defaultOptions = {
//       margin: 36,
//       background: "#fff",
//       scrollOffset: 0,
//     }
  
//     let options
  
//     if (typeof mediumZoomOptions === "object") {
//       options = { ...defaultOptions, ...mediumZoomOptions }
//     } else {
//       options = defaultOptions
//     }
  
//     mediumZoom(`.gatsby-resp-image-image`, options)
//   }