module.exports = {
    task: 'grunt-contrib-uglify',
    options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */'
    },
};
