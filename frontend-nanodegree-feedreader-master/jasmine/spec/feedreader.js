/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        function testURL(url){
            it('each feed has URL and URL is not empty', function() {
                expect(url).not.toBe(null);
            });
        }
        for(var i = 0; i < allFeeds.length; i++){
            testURL(allFeeds[i].url);
        }

        function testName(name){
            it('each feed has name and name is not empty', function() {
                expect(name).not.toBe(null);
            });
        }
        for(var j = 0; j < allFeeds.length; j++){
            testName(allFeeds[j].name);
        }
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        it('should be hidden by default', function() {
            var offScreen = $(".menu-hidden").css('transform');

            expect(offScreen).toBe("none");
        });

        it('should change when clicked', function() {
            var toggle = $('.menu-icon-link').toggleClass('menu-hidden');
            expect(toggle).toBeDefined();
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

         beforeEach(function(done) {
            loadFeed(0,function(){
                done();
            });
         });

         it('should have at least a single .entry element within .feed container', function(done){
            expect($('.feed').length).not.toBe(0);
            done();
         });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){

         var old = $('.feed').html();
            var newFeed;
         beforeEach(function(done) {
            loadFeed(1,function(){
                newFeed = $('.feed').html();
                done();
            });
         });
        it('should change content with new feed loaded', function(done){
            expect(newFeed).not.toBe(old);
            done();
        });

    });

}());
