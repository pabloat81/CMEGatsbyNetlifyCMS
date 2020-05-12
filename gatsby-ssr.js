const React = require("react")

// Adds a class name to the body element
/*exports.onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
  setBodyAttributes({
    className: "header-fixed page no-sidebar header-style-2 topbar-style-2",
  })
}*/

// Wraps every page in a component
/*exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}*/

exports.onRenderBody = ({ setBodyAttributes, setPostBodyComponents}) => {
  /*setBodyAttributes({
    className: "header-fixed page no-sidebar header-style-2 topbar-style-2",
  })*/

  setPostBodyComponents([
    <script src={"/assets/js/jquery.min.js"} type="text/javascript"></script>,
    <script src={"/assets/js/plugins.js"} type="text/javascript"></script>,
    <script src={"/assets/js/tether.min.js"} type="text/javascript"></script>,
    <script src={"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"}
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous" type="text/javascript"></script>,
    <script src={"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"}
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous" type="text/javascript"></script>,
    
    //<script src={"/assets/js/animsition.js"} type="text/javascript"></script>,
    <script src={"/assets/js/owl.carousel.min.js"} type="text/javascript"></script>,
    <script src={"/assets/js/countto.js"} type="text/javascript"></script>,
    <script src={"/assets/js/equalize.min.js"} type="text/javascript"></script>,
    <script src={"/assets/js/jquery.isotope.min.js"} type="text/javascript"></script>,
    
    //<script src={"/assets/js/owl.carousel2.thumbs.js"} type="text/javascript"></script>,
    <script src={"/assets/js/jquery.cookie.js"} type="text/javascript"></script>,
    <script src={"/assets/js/gmap3.min.js"} type="text/javascript"></script>,
    <script src={"https://maps.googleapis.com/maps/api/js?key=AIzaSyAIEU6OT3xqCksCetQeNLIPps6-AYrhq-s&amp;region=GB"} type="text/javascript"></script>,
    //<script src={"/assets/js/shortcodes.js"} type="text/javascript"></script>,
    <script src={"/assets/js/main.js"} type="text/javascript"></script>
  ]);
};