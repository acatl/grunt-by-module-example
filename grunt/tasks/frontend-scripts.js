exports.tasks = {
    jshint: {
        frontendScripts: {
            src: [
                'public/js/**/*.js'
            ],
        }
    },

    uglify: {
        frontendScripts: {
            files: {
                '.build/main.min.js': 'public/js/**/*.js'
            }
        },

    },

    watch: {
        frontendScripts: {
            files: [
                'public/js/**/*.js'
            ],
            tasks: ['jshint:frontendScripts', 'uglify:frontendScripts'],
            options: {
                spawn: false,
            },
        },
    },
};

exports.register = {
    'frontendScripts': [
        'jshint:frontendScripts',
        'uglify:frontendScripts'
    ]
};
