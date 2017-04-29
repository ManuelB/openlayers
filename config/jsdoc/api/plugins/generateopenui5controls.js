exports.handlers = {
    //fileComplete: function(e) {
    //    console.log(e);
    //},
    parseComplete: function(e) {
        console.log(e);
    }
};
exports.astNodeVisitor = {
    visitNode: function(node, e, parser, currentSourceName) {
        // do all sorts of crazy things here
        console.log(node);
    }
};