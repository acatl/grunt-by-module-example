exports.tasks = {
    jshint: {
        backendScripts: {
            src: [
                'lib/**/*.js'
            ],
        }
    },

    watch: {
        backendScripts: {
            files: [
                'lib/**/*.js'
            ],
            tasks: ['jshint:backendScripts'],
            options: {
                spawn: false,
            },
        },
    }
};

exports.register = {
    'backendScripts': ['jshint:backendScripts']
};
