// GA스크립트
window.dataLayer = window.dataLayer || []
function gtag () { dataLayer.push(arguments) }
gtag('js', new Date())

gtag('config', 'UA-75972612-4')

// 네오
window.emfAsyncInit = function () {};
// load asynchronously
(function (d, s, id) {
  var js, ejs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) { return }
  js = d.createElement(s); js.id = id
  js.src = '//roi.emforce.co.kr/conversion/conversion_dt.js'
  ejs.parentNode.insertBefore(js, ejs)
}(document, 'script', 'emforce-jssdk'))

function convCall (neo1, neo2, link) {
  try {
    Emf.convCall(797, 2783, 0, neo1, neo2)
  } catch (err) { }
};
