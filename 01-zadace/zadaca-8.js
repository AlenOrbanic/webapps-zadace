function istiKljuc( obj1, obj2 ) {
    return Object.keys( obj1 ).every( function( prop ) {
      return obj2.hasOwnProperty( prop );
    });
  }
  var obj1 = {a:1,b:2,c:3},
      obj2 = {a:321,b:3,c:1};

  console.log(istiKljuc(obj1, obj2));