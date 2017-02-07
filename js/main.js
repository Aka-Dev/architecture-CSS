var modules = [
    'modules/header',
    'modules/footer'
];

require(modules, function(header, footer) {
    header.initialize();
    footer.initialize();
});
