requirejs.config({
    baseUrl: "/js",
    paths: {
        "jquery": "vendor/jquery.min",
        "flexslider": "vendor/jquery.flexslider-min",
        "uniform": "vendor/jquery.uniform",
    },
    shim: {
        "flexslider": {
            deps: ["jquery"],
            exports: "flexslider"
        },
        "uniform": {
            deps: ["jquery"],
            exports: "uniform"
        }
    },
});

var modules = [
    'jquery',
    'flexslider',
    'uniform',
    'modules/header',
    'modules/footer'
];



require(modules, function (jquery, flexslider, uniform, header, footer) {
    header.initialize();
    footer.initialize();
    jquery('.site-content-posts-list').flexslider();
});