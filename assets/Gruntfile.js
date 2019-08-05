module.exports = function(grunt){

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	// Concatenate Configuration
	concat: {
		options: {
			separator: ';'
		},
		script: {
			src: [
				'dist/js/script.js'
			],
			dest: '../markup/js/script.min.js'
		}
	},

	// Uglify Configuration
	uglify: {
		dist: {
			files: {
				'../markup/js/jquery.min.js': ['dist/js/plugin/jquery.js'],
				'../markup/js/jcf.checkbox.min.js': ['dist/js/plugin/jcf.checkbox.js'],
				'../markup/js/jcf.min.js': ['dist/js/plugin/jcf.js'],
				'../markup/js/jquery-ui.min.js': ['dist/js/plugin/jquery-ui.js'], 
				'../markup/js/jquery-ui.select.min.js': ['dist/js/plugin/jquery-ui.select.js'], 
				'../markup/js/js-image-zoom.min.js': ['dist/js/plugin/js-image-zoom.js'], 
				'../markup/js/magnifier.min.js': ['dist/js/plugin/magnifier.js'], 
				'../markup/js/event.min.js': ['dist/js/plugin/event.js'], 
				
				

				'../markup/js/desktop/script.min.js': ['dist/js/desktop/script.js'],
				'../markup/js/desktop/home.min.js': ['dist/js/desktop/home.js'],
				'../markup/js/desktop/product.min.js': ['dist/js/desktop/product.js'],
				'../markup/js/desktop/cart_page.min.js': ['dist/js/desktop/cart_page.js'],
				'../markup/js/desktop/catalog.min.js': ['dist/js/desktop/catalog.js'],
				'../markup/js/desktop/search-page.min.js': ['dist/js/desktop/search-page.js'],
				'../markup/js/desktop/purchase-history.min.js': ['dist/js/desktop/purchase-history.js'],
				'../markup/js/desktop/policy.min.js': ['dist/js/desktop/policy.js'],
				'../markup/js/desktop/checkout.min.js': ['dist/js/desktop/checkout.js'],
				'../markup/js/desktop/profile-bonuses.min.js': ['dist/js/desktop/profile-bonuses.js'],
				'../markup/js/desktop/category.min.js': ['dist/js/desktop/category.js'],
				'../markup/js/desktop/wishlist.min.js': ['dist/js/desktop/wishlist.js'],
				'../markup/js/desktop/help-center.min.js': ['dist/js/desktop/help-center.js'],
				'../markup/js/desktop/compare.min.js': ['dist/js/desktop/compare.js'],
				'../markup/js/desktop/footer-text-page.min.js': ['dist/js/desktop/footer-text-page.js'],
				'../markup/js/desktop/personal-area.min.js': ['dist/js/desktop/personal-area.js'],
				
				
				
				
				
				
				

				'../markup/js/mobile/script.min.js': ['dist/js/mobile/script.js'],
				'../markup/js/mobile/home.min.js': ['dist/js/mobile/home.js'],
				'../markup/js/mobile/product.min.js': ['dist/js/mobile/product.js'],
				'../markup/js/mobile/cart_page.min.js': ['dist/js/mobile/cart_page.js'],
				'../markup/js/mobile/catalog.min.js': ['dist/js/mobile/catalog.js'],
				'../markup/js/mobile/search-page.min.js': ['dist/js/mobile/search-page.js'],
				'../markup/js/mobile/purchase-history.min.js': ['dist/js/mobile/purchase-history.js'],
				'../markup/js/mobile/policy.min.js': ['dist/js/mobile/policy.js'],
				'../markup/js/mobile/checkout.min.js': ['dist/js/mobile/checkout.js'],
				'../markup/js/mobile/profile-bonuses.min.js': ['dist/js/mobile/profile-bonuses.js'],
				'../markup/js/mobile/footer-text-page.min.js': ['dist/js/mobile/footer-text-page.js'],
				'../markup/js/mobile/category.min.js': ['dist/js/mobile/category.js'],
				'../markup/js/mobile/wishlist.min.js': ['dist/js/mobile/wishlist.js'],
				'../markup/js/mobile/help-center.min.js': ['dist/js/mobile/help-center.js'],
				'../markup/js/mobile/personal-area.min.js': ['dist/js/mobile/personal-area.js'],
				'../markup/js/mobile/compare.min.js': ['dist/js/mobile/compare.js'],
				
			}
		}
	},

	// Sass Configuration
	sass: {
		options: {
			loadPath: ['bower_components/foundation/foundation.scss']
		},
		dist: {
			options: {
				//sourcemap: 'none',
				style: 'compressed'
			},
			files: [{
				// expand: true,
				// cwd: 'dist/scss/',
				// src: ['*.scss'],
				// dest: '../markup/css/',
				// ext: '.css',
				'../markup/css/mobile/style.css': ['dist/mobile/style.scss'],
				'../markup/css/mobile/home.css': ['dist/mobile/home.scss'],
				'../markup/css/mobile/product.css': ['dist/mobile/product.scss'],
				'../markup/css/mobile/cart.css': ['dist/mobile/cart.scss'],
				'../markup/css/mobile/catalog.css': ['dist/mobile/catalog.scss'],
				'../markup/css/mobile/search-page.css': ['dist/mobile/search-page.scss'],
				'../markup/css/mobile/purchase-history.css': ['dist/mobile/purchase-history.scss'],
				'../markup/css/mobile/policy.css': ['dist/mobile/policy.scss'],
				'../markup/css/mobile/checkout.css': ['dist/mobile/checkout.scss'],
				'../markup/css/mobile/profile-bonuses.css': ['dist/mobile/profile-bonuses.scss'],
				'../markup/css/mobile/footer-text-page.css': ['dist/mobile/footer-text-page.scss'],
				'../markup/css/mobile/category.css': ['dist/mobile/category.scss'],
				'../markup/css/mobile/wishlist.css': ['dist/mobile/wishlist.scss'],
				'../markup/css/mobile/help-center.css': ['dist/mobile/help-center.scss'],
				'../markup/css/mobile/personal-area.css': ['dist/mobile/personal-area.scss'],
				'../markup/css/mobile/compare.css': ['dist/mobile/compare.scss'],
				
				

				'../markup/css/desktop/style.css': ['dist/desktop/style.scss'],
				'../markup/css/desktop/home.css': ['dist/desktop/home.scss'],
				'../markup/css/desktop/product.css': ['dist/desktop/product.scss'],
				'../markup/css/desktop/cart.css': ['dist/desktop/cart.scss'],
				'../markup/css/desktop/catalog.css': ['dist/desktop/catalog.scss'],
				'../markup/css/desktop/search-page.css': ['dist/desktop/search-page.scss'],
				'../markup/css/desktop/404.css': ['dist/desktop/404.scss'],
				'../markup/css/desktop/purchase-history.css': ['dist/desktop/purchase-history.scss'],
				'../markup/css/desktop/policy.css': ['dist/desktop/policy.scss'],
				'../markup/css/desktop/checkout.css': ['dist/desktop/checkout.scss'],
				'../markup/css/desktop/profile.css': ['dist/desktop/profile.scss'],
				'../markup/css/desktop/category.css': ['dist/desktop/category.scss'],
				'../markup/css/desktop/wishlist.css': ['dist/desktop/wishlist.scss'],
				'../markup/css/desktop/help-center.css': ['dist/desktop/help-center.scss'],
				'../markup/css/desktop/compare.css': ['dist/desktop/compare.scss'],
				'../markup/css/desktop/personal-area.css': ['dist/desktop/personal-area.scss'],
				
				
				
			}]
		}
	},

	// Watch Configuration
	watch: {
		grunt: { files: ['Gruntfile.js'], tasks: ['default'] },

		sass: {
			files: 'dist/**/**/*.scss',
			tasks: ['buildCss']
		},

		script: {
			files: 'dist/js/**/*.js',
			tasks: ['buildJs']
		},

		markup: {
			files: ['**/*.html'],
			tasks: ['htmlbuild']
		}
	},

	fixturesPath: './',
	sourcesPath: '../markup',

    htmlbuild: {
        dist: {
			files: [
				{src: 'desktop/*.html', dest: '<%= sourcesPath %>/templates/desktop/'},
				{src: 'mobile/*.html', dest: '<%= sourcesPath %>/templates/mobile/'},
			],
            options: {
                beautify: true,
                prefix: '../',
                relative: false,
                sections: {
                    views: '<%= fixturesPath %>/*.html',
                    templates: '<%= fixturesPath %>/*.html',
                    layout: {
						header: '<%= fixturesPath %>/templates/header.html',
						header_cart_page: '<%= fixturesPath %>/templates/header-cart_page.html',
                    	mobile_header: '<%= fixturesPath %>/templates/mobile_header.html',
						footer: '<%= fixturesPath %>/templates/footer.html',
						footer_cart_page: '<%= fixturesPath %>/templates/footer-cart_page.html',
						
                    	mobile_header_innerPages: '<%= fixturesPath %>/templates/mobile_header_inner-page.html',
						popup_photo: '<%= fixturesPath %>/templates/photo-popup.html',
						
						loginPopup: '<%= fixturesPath %>/templates/loginPopup.html',
						desktopPopup: '<%= fixturesPath %>/templates/desktopPopup.html',

						personal_area_header: '<%= fixturesPath %>/templates/personal_area_header.html',
						
					}
                },
            }
        }
    }


});

// Load Grunt tasks
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-html-build');

// Register Grunt tasks
grunt.registerTask('buildCss', ['sass']);
grunt.registerTask('buildJs',  ['concat', 'uglify']);
grunt.registerTask('default',  ['buildCss', 'buildJs', 'watch', 'sass']);

}
