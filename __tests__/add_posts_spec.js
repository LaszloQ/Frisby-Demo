const frisby = require( "frisby" );
const expect = require( "chai" ).expect;
const baseUrl = require( "../support/helpers.js" ).baseUrl;
const postsRoute = require( "../support/routes.js" ).postsRoute;


  describe( "A POST request on /posts", function( ) {


    it( "should return status 200", function( ) {
      return frisby
        .post( baseUrl + postsRoute, {
          userId: 1,
          //"id": 101,
          title: "Title of my post",
          body: "This is the body of my post."
        })
        .inspectStatus(  )
        .inspectJSON( )
    });

  });
