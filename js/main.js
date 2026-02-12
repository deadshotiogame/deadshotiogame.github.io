
function addAhrefsScript() {
  const script = document.createElement('script');
  script.src = "https://analytics.ahrefs.com/analytics.js";
  script.async = true;
  script.setAttribute("data-key", "wpDH2pZ23iIoVDzjR7LBzg"); // 🔴 حط key ديالك هنا

  document.head.appendChild(script);
  console.log("Ahrefs Analytics loaded ✅");
};
addAhrefsScript()

//   function addAnalyticsScript() {
//   const script = document.createElement('script');
//   script.async = true;
//   script.src = "https://www.googletagmanager.com/gtag/js?id=G-GS1CEPEN9N";
    
//   document.head.appendChild(script);
//   console.log("Analytics added");
//       window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-GS1CEPEN9N');
// };
// addAnalyticsScript()
  
function toggleFullScreen() {
  var iframe = document.getElementById("iframe");

  // Check if any element is currently in fullscreen mode
  if (!document.fullscreenElement) {
    // If not, request fullscreen for the iframe
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { /* Firefox */
      iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { /* IE/Edge */
      iframe.msRequestFullscreen();
    }
  } else {
    // If an element is already in fullscreen, exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }
}
