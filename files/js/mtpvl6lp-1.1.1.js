// Google Tag Manager script added by https://google-site-tools-for-webflow.com 
  // GST-GTM-ID: GTM-MTPVL6LP

  var link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = 'https://www.googletagmanager.com';
  document.head.appendChild(link);

  (function(w,d,s,l,i){
  w[l]=w[l]||[];
  w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
  var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
  j.async=true;
  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
  f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MTPVL6LP');

// Function to add the NoScript GTM after the opening body tag
document.addEventListener("DOMContentLoaded", function() {
  var noscript = document.createElement("noscript");
  var iframe = document.createElement("iframe");
  iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-MTPVL6LP";
  iframe.height = "0";
  iframe.width = "0";
  iframe.style.display = "none";
  iframe.style.visibility = "hidden";
  
  noscript.appendChild(iframe);
  document.body.insertBefore(noscript, document.body.firstChild);
});