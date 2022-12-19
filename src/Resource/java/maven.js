var java = require('java');
var mvn = require('node-java-maven');

mvn(function (err, mvnResults) {
    if (err) {
        return console.error('could not resolve maven dependencies', err);
    }
    mvnResults.classpath.forEach(function (c) {
        console.log('adding ' + c + ' to classpath');
        java.classpath.push(c);
    });

    // var Version = java.import('org.apache.lucene.util.Version');
});

