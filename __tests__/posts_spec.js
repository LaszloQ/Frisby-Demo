
  const frisby = require( "frisby" );
  const expect = require( "chai" ).expect;
  const baseUrl = require( "../support/helpers.js" ).baseUrl;
  const postsRoute = require( "../support/routes.js" ).postsRoute;


  describe( "A GET request on /posts", function( ) {


    it( "should return status 200", function( ) {
      return frisby
        .get( baseUrl + postsRoute )
        .expect( "status", 200 )
    });


    it( "should return 100 posts", function( ) {
      return frisby
        .get( baseUrl + postsRoute )
        .then( function( response ) {
          const json = response.json;

          expect( json.length ).to.equal( 100 )
        })
    });


    it( "should return all posts with the userId", function( ) {
      return frisby
        .get( baseUrl + postsRoute )
        .then( function( response ) {
          const json = response.json;

          for( let i = 0; i < json.length; i++ ) {
            const post = json[ i ];

            expect( post.userId ).to.not.equal( undefined )
            expect( typeof post.userId ).to.equal( "number" )

            if( i <= 9 ) {
              expect( post.userId ).to.equal( 1 )
            }
            if ( i > 9 && i <= 19 ) {
              expect( post.userId ).to.equal( 2 )
            }
            if ( i > 19 && i <= 29 ) {
              expect( post.userId ).to.equal( 3 )
            }
            if ( i > 29 && i <= 39 ) {
              expect( post.userId ).to.equal( 4 )
            }
            if ( i > 39 && i <= 49 ) {
              expect( post.userId ).to.equal( 5 )
            }
            if ( i > 49 && i <= 59 ) {
              expect( post.userId ).to.equal( 6 )
            }
            if ( i > 59 && i <= 69 ) {
              expect( post.userId ).to.equal( 7 )
            }
            if ( i > 69 && i <= 79 ) {
              expect( post.userId ).to.equal( 8 )
            }
            if ( i > 79 && i <= 89 ) {
              expect( post.userId ).to.equal( 9 )
            }
            if( i > 89 ) {
              expect( post.userId ).to.equal( 10 )
            }
          }
        })
    });


    it( "should return all posts with a unique id from 1 to 100", function( ) {
      return frisby
        .get( baseUrl + postsRoute )
        .then( function( response ) {
          const json = response.json;

          for( let i = 0; i < json.length; i++ ) {
            const id = json[ i ].id;

            expect( id ).to.equal( i + 1 )
          }
        })
    });


    it( "should return all posts with a unique title", function( ) {
      return frisby
        .get( baseUrl + postsRoute )
        .then( function( response ) {
          const json = response.json;
          const titles = [ ];

          for( let i = 0; i < json.length; i++ ) {
            const title = json[ i ].title;

            expect( title.length ).to.be.at.least( 4 )
            expect( typeof title ).to.equal( "string" )

            if( titles.indexOf( title ) < 0 ) {
              titles.push( title )
            }
          }

          expect( titles.length ).to.equal( 100 )
        });
    });


    it( "should return all posts with unique body", function( ) {
      return frisby
        .get( baseUrl + postsRoute )
        .then( function( response ) {
          const json = response.json;
          const descriptions = [ ];

          for( let i = 0; i < json.length; i++ ) {
            const text = json[ i ].body;

            expect( text.length ).to.be.at.least( 10 )
            expect( typeof text ).to.equal( "string" )

            if( descriptions.indexOf( text ) < 0 ) {
              descriptions.push( text )
            }
          }

          expect( descriptions.length ).to.equal( 100 )
        });
    });


  });
