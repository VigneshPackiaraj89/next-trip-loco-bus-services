module.exports = function (grunt) {
    const repository = 'libs-release'
    const projectName = 'nextTripBus'

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['*.tgz'],
        artifactory: {
            options: {
                url: 'https://artifactory.code.com',
                userName: grunt.option('ARTIFACTORY_USERNAME'),
                password: grunt.option('ARTIFACTORY_PASSWORD')
            },
            backend: {
                options: {
                    repository, 
                    publish: [{
                        group_id: `com.frontend-node.${projectName}`,
                        name: `node-${projectName}`,
                        ext: 'tgz',
                        version: '<%pkg.version',
                        path: 'deploy/'
                    }]
                },
                files: [{
                    cwd: 'target/package',
                    src: ['**'],
                    dest: 'ROOT',
                    expand: true
                }]
            },
            frontend: {
                options: {
                    repository, 
                    publish: [{
                        group_id: `com.frontend.${projectName}`,
                        name: `node-${projectName}`,
                        ext: 'war',
                        version: '<%pkg.version',
                        path: 'deploy/'
                    }]
                },
                files: [{
                    expand: 'true',
                    cwd: 'dist/',
                    src: ['**'],
                    dest: `${projectName}/`
                }]
            }
        }
    })

    grunt.loadNpmTasks('grunt-artifactory-artifact')
}