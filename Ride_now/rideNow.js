const arrOfBikes = [
  {
    name: "Bajaj CT 100",
    free: 249,
    excess: 2,
    price: 179,
    manufacturer: "Bajaj",
    model: "CT 100",
    type:"Motorcycle",
    imgLink:
      "./showroom/BajajCT100@2x.jpg",
  },
  {
    name: "Bajaj Dominar 400 ABS",
    free: 300,
    excess: 4,
    price: 999,
    manufacturer: "Bajaj",
    model: "Dominar 400 ABS",
    type:"Motorcycle",
    imgLink:
      "./showroom/BajajDominar400ABS@2x.jpg",
  },
  {
    name: "KTM Duke 250",
    free: 264,
    excess: 4,
    price: 1099,
    manufacturer: "KTM",
    model: "Duke 250",
    type:"Motorcycle",
    imgLink:
      "./showroom/KTMDuke250@2x.jpg",
  },
  {
    name: "Yamaha FZ",
    free: 293,
    excess: 2,
    price: 549,
    manufacturer: "Yamaha",
    model: "FZ",
    type:"Motorcycle",
    imgLink:
      "./showroom/YamahaFZ@2x.jpg",
  },
  {
    name: "Honda Navi",
    free: 225,
    excess: 2,
    price: 199,
    manufacturer: "Honda",
    model: "Navi",
    type:"Scooter",
    imgLink:
      "./showroom/HondaNavi@2x.jpg",
  },
  {
    name: "Honda DREAM NEO",
    free: 225,
    excess: 2,
    price: 199,
    manufacturer: "Honda",
    model: "Dream Neo",
    type:"Motorcycle",
    imgLink:
      "./showroom/HondaCD110@2x.jpg",
  },
  {
    name: "Honda Hornet",
    free: 288,
    excess: 2,
    price: 599,
    manufacturer: "Honda",
    model: "Hornet",
    type:"Motorcycle",
    imgLink:
      "./showroom/HondaHornet@2x.jpg",
  },
  {
    name: "Honda Activa",
    free: 225,
    excess: 2,
    price: 249,
    manufacturer: "Honda",
    model: "Activa",
    type:"Scooter",
    imgLink:
      "./showroom/HondaActiva4G@2x.jpg",
  },
  {
    name: "Honda Dio",
    free: 217,
    excess: 2,
    price: 289,
    manufacturer: "Honda",
    model: "Dio",
    type:"Scooter",
    imgLink:
      "./showroom/HondaDio@2x.jpg",
  },
  {
    name: "Honda Livo",
    free: 217,
    excess: 2,
    price: 289,
    manufacturer: "Honda",
    model: "Livo",
    type:"Motorcycle",
    imgLink:
      "./showroom/HondaLivo@2x.jpg",
  },
  {
    name: "Bajaj Pulsar 150",
    free: 205,
    excess: 2,
    price: 399,
    manufacturer: "Bajaj",
    model: "Pulsar",
    type:"Motorcycle",
    imgLink:
      "./showroom/BajajPulsar150@2x.jpg",
  },
  {
    name: "Bajaj Avenger 220 Cruise",
    free: 293,
    excess: 2.5,
    price: 549,
    manufacturer: "Bajaj",
    model: "Avenger 220 Cruise",
    type:"Motorcycle",
    imgLink:
      "./showroom/BajajAvengerCruise220@2x.jpg",
  },
  {
    name: "Bajaj Avenger 220 Street",
    free: 293,
    excess: 2.5,
    price: 549,
    manufacturer: "Bajaj",
    model: "Avenger 220 Street",
    type:"Motorcycle",
    imgLink:
      "./showroom/BajajAvengerStreet220@2x.jpg",
  },
  {
    name: "Royal Enfield 350 Classic",
    free: 274,
    excess: 3,
    price: 799,
    manufacturer: "Royal Enfield",
    model: "350 Classic",
    type:"Motorcycle",
    imgLink:
      "./showroom/RoyalEnfieldClassic350@2x.jpg",
  },
  {
    name: "Royal Enfield 350 Thunderbird",
    free: 272,
    excess: 3,
    price: 849,
    manufacturer: "Royal Enfield",
    model: "350 Thunderbird",
    type:"Motorcycle",
    imgLink:
      "./showroom/RoyalEnfieldThunderbird350@2x.jpg",
  },
  {
    name: "Bajaj Pulsar 180",
    free: 202,
    excess: 2,
    price: 449,
    manufacturer: "Bajaj",
    model: "Pulsar",
    type:"Motorcycle",
    imgLink:
      "./showroom/BajajPulsar180@2x.jpg",
  },
  {
    name: "Bajaj Pulsar NS 160",
    free: 71,
    excess: 2,
    price: 139,
    manufacturer: "Bajaj",
    model: "Pulsar",
    type:"Motorcycle",
    imgLink:
      "./showroom/BajajPulsarNS160@2x.jpg",
  },
  
  {
    name: "Bajaj Pulsar NS 200",
    free: 71,
    excess: 2,
    price: 139,
    manufacturer: "Bajaj",
    model: "Pulsar",
    type:"Motorcycle",
    imgLink:
      "./showroom/BajajPulsarNS220@2x.jpg",
  },
  {
    name: "Bajaj Pulsar 135 LS",
    free: 71,
    excess: 2,
    price: 139,
    manufacturer: "Bajaj",
    model: "Pulsar",
    type:"Motorcycle",
    imgLink:
      "./showroom/BajajPulsar135@2x.jpg",
  },
];

function bikes ()
{
  localStorage.setItem( 'bikes', JSON.stringify( arrOfBikes ) )
  let arr = JSON.parse( localStorage.getItem( 'bikes' ) )
  let parent = document.querySelector( '.bike-showcase' )
  parent.innerHTML =''
  arr.forEach( e =>
  {
    let parent = document.querySelector( '.bike-showcase' )
    let noclassdiv = document.createElement( 'div' )
    let bikeimgdiv = document.createElement( 'div' )
    let freenexcessdiv = document.createElement( 'div' )
    let pricenbooknowdiv = document.createElement( 'div' )
    let image = document.createElement( 'img' )
    let pname = document.createElement( 'p' )
    let pkilometer = document.createElement( 'p' )
    let pexcess = document.createElement( 'p' )
    let pprice = document.createElement( 'p' )
    let btn = document.createElement( 'button' )
    image.src = e.imgLink
    bikeimgdiv.append( image )
    bikeimgdiv.setAttribute( 'class', 'bike-img-cont' )
    pname.innerHTML = e.name
    pname.setAttribute( 'class', 'bike-name' )
    pkilometer.innerHTML = `Free ${ e.free } Kms`
    pkilometer.setAttribute( 'class', 'free-kilometers' )
    pexcess.innerHTML = `Excess ₹${ e.excess }/km`
    pexcess.setAttribute( 'class', 'excess' )
    freenexcessdiv.setAttribute( 'class', 'free-N-excess' )
    freenexcessdiv.append( pkilometer, pexcess )
    pprice.innerHTML = `₹${ e.price }`
    pprice.setAttribute( 'class', 'price' )
    btn.innerHTML = 'BOOK NOW'
    pricenbooknowdiv.setAttribute( 'class', 'price-N-bookNow' )
    pricenbooknowdiv.append( pprice, btn )
    noclassdiv.append( bikeimgdiv, pname, freenexcessdiv, pricenbooknowdiv )
    parent.append( noclassdiv )
  
  
  } );
}
bikes()



//manufucturer sorting
function manufacturer ()
{
  let abc = document.getElementById( "vehicle" )
  var checkboxes = abc.querySelectorAll( "input" )
  let j = 0;
  for ( var i = 0, n = checkboxes.length; i < n; i++ )
  {
    if ( checkboxes[ i ].checked == true )
    {
      j++;
    }
  }
  if ( j == 1 )
  {
    vehicle()
    return;
  }
  let model = document.getElementById( "model" )
  var checkboxes = model.querySelectorAll( "input" )
  let y = 0;
  for ( var i = 0, n = checkboxes.length; i < n; i++ )
  {
  if ( checkboxes[ i ].checked == true )
      y++;
  }
  if ( y != 0 )
  {
    return
  }
  let manufacturer = document.getElementById( "manufacturer" )
  var checkboxes = manufacturer.querySelectorAll( "input" )
  let x = 0;
  for ( var i = 0, n = checkboxes.length; i < n; i++ )
  {
    if ( checkboxes[ i ].checked == true )
        x++;
  }
  if ( x > 0 )
  {
    let parent = document.querySelector( '.bike-showcase' )
    parent.innerHTML =''
    for ( var i = 0, n = checkboxes.length; i < n; i++ )
    {
      
      if ( checkboxes[ i ].checked == true )
      {
        let arr = JSON.parse( localStorage.getItem( 'bikes' ) )
        arr.forEach( e =>
        {
          if ( checkboxes[ i ].name === e.manufacturer )
          {
            let parent = document.querySelector( '.bike-showcase' )
            let noclassdiv = document.createElement( 'div' )
            let bikeimgdiv = document.createElement( 'div' )
            let freenexcessdiv = document.createElement( 'div' )
            let pricenbooknowdiv = document.createElement( 'div' )
            let image = document.createElement( 'img' )
            let pname = document.createElement( 'p' )
            let pkilometer = document.createElement( 'p' )
            let pexcess = document.createElement( 'p' )
            let pprice = document.createElement( 'p' )
            let btn = document.createElement( 'button' )
            image.src = e.imgLink
            bikeimgdiv.append( image )
            bikeimgdiv.setAttribute( 'class', 'bike-img-cont' )
            pname.innerHTML = e.name
            pname.setAttribute( 'class', 'bike-name' )
            pkilometer.innerHTML = `Free ${ e.free } Kms`
            pkilometer.setAttribute( 'class', 'free-kilometers' )
            pexcess.innerHTML = `Excess ₹${ e.excess }/km`
            pexcess.setAttribute( 'class', 'excess' )
            freenexcessdiv.setAttribute( 'class', 'free-N-excess' )
            freenexcessdiv.append( pkilometer, pexcess )
            pprice.innerHTML = `₹${ e.price }`
            pprice.setAttribute( 'class', 'price' )
            btn.innerHTML = 'BOOK NOW'
            pricenbooknowdiv.setAttribute( 'class', 'price-N-bookNow' )
            pricenbooknowdiv.append( pprice, btn )
            noclassdiv.append( bikeimgdiv, pname, freenexcessdiv, pricenbooknowdiv )
            parent.append( noclassdiv )
          }
      
        } );
      }
    }
  }
  else
  {
    bikes()
  }

}



//vehicle sorting
function vehicle ( id )
{
  let model = document.getElementById( "model" )
  var checkboxes = model.querySelectorAll( "input" )
  let y = 0;
  for ( var i = 0, n = checkboxes.length; i < n; i++ )
  {
  if ( checkboxes[ i ].checked == true )
      y++;
  }
  if ( y != 0 )
  {
    return
  }
  let parent = document.querySelector( '.bike-showcase' )
  parent.innerHTML = ''
  let vehicletype = document.getElementById(id)
  let vehicle = document.getElementById( "vehicle" )
  var checkboxes = vehicle.querySelectorAll( "input" )
  let x = 0;
  for ( var i = 0, n = checkboxes.length; i < n; i++ )
  {
    if ( checkboxes[ i ].checked == true )
    {
      x++;
      var category = checkboxes[i].name
    }
  }
  if ( x == 1 )
  { let vehicle = document.getElementById( "manufacturer" )
    var checkboxes = vehicle.querySelectorAll( "input" )
    let parent = document.querySelector( '.bike-showcase' )
    parent.innerHTML = ''
    let x = 0;
    for ( var i = 0, n = checkboxes.length; i < n; i++ )
    {
      if ( checkboxes[ i ].checked == true )
      {
        x++;
      }
    }
    
    if ( x == 0 )
    {
      localStorage.setItem( 'bikes', JSON.stringify( arrOfBikes ) )
      let arr = JSON.parse( localStorage.getItem( 'bikes' ) )
      let parent = document.querySelector( '.bike-showcase' )
      arr.forEach( e =>
      {
        if ( e.type === category)
        {
          let parent = document.querySelector( '.bike-showcase' )
          let noclassdiv = document.createElement( 'div' )
          let bikeimgdiv = document.createElement( 'div' )
          let freenexcessdiv = document.createElement( 'div' )
          let pricenbooknowdiv = document.createElement( 'div' )
          let image = document.createElement( 'img' )
          let pname = document.createElement( 'p' )
          let pkilometer = document.createElement( 'p' )
          let pexcess = document.createElement( 'p' )
          let pprice = document.createElement( 'p' )
          let btn = document.createElement( 'button' )
          image.src = e.imgLink
          bikeimgdiv.append( image )
          bikeimgdiv.setAttribute( 'class', 'bike-img-cont' )
          pname.innerHTML = e.name
          pname.setAttribute( 'class', 'bike-name' )
          pkilometer.innerHTML = `Free ${ e.free } Kms`
          pkilometer.setAttribute( 'class', 'free-kilometers' )
          pexcess.innerHTML = `Excess ₹${ e.excess }/km`
          pexcess.setAttribute( 'class', 'excess' )
          freenexcessdiv.setAttribute( 'class', 'free-N-excess' )
          freenexcessdiv.append( pkilometer, pexcess )
          pprice.innerHTML = `₹${ e.price }`
          pprice.setAttribute( 'class', 'price' )
          btn.innerHTML = 'BOOK NOW'
          pricenbooknowdiv.setAttribute( 'class', 'price-N-bookNow' )
          pricenbooknowdiv.append( pprice, btn )
          noclassdiv.append( bikeimgdiv, pname, freenexcessdiv, pricenbooknowdiv )
          parent.append( noclassdiv )
        }
      
      
      } );
      return;
    }
    for ( var i = 0, n = checkboxes.length; i < n; i++ )
    {

      
      if ( checkboxes[ i ].checked == true )
      {
        let arr = JSON.parse( localStorage.getItem( 'bikes' ) )
        arr.forEach( e =>
        {
          if ( checkboxes[ i ].name === e.manufacturer && e.type === category )
          {
            let parent = document.querySelector( '.bike-showcase' )
            let noclassdiv = document.createElement( 'div' )
            let bikeimgdiv = document.createElement( 'div' )
            let freenexcessdiv = document.createElement( 'div' )
            let pricenbooknowdiv = document.createElement( 'div' )
            let image = document.createElement( 'img' )
            let pname = document.createElement( 'p' )
            let pkilometer = document.createElement( 'p' )
            let pexcess = document.createElement( 'p' )
            let pprice = document.createElement( 'p' )
            let btn = document.createElement( 'button' )
            image.src = e.imgLink
            bikeimgdiv.append( image )
            bikeimgdiv.setAttribute( 'class', 'bike-img-cont' )
            pname.innerHTML = e.name
            pname.setAttribute( 'class', 'bike-name' )
            pkilometer.innerHTML = `Free ${ e.free } Kms`
            pkilometer.setAttribute( 'class', 'free-kilometers' )
            pexcess.innerHTML = `Excess ₹${ e.excess }/km`
            pexcess.setAttribute( 'class', 'excess' )
            freenexcessdiv.setAttribute( 'class', 'free-N-excess' )
            freenexcessdiv.append( pkilometer, pexcess )
            pprice.innerHTML = `₹${ e.price }`
            pprice.setAttribute( 'class', 'price' )
            btn.innerHTML = 'BOOK NOW'
            pricenbooknowdiv.setAttribute( 'class', 'price-N-bookNow' )
            pricenbooknowdiv.append( pprice, btn )
            noclassdiv.append( bikeimgdiv, pname, freenexcessdiv, pricenbooknowdiv )
            parent.append( noclassdiv )
          }
      
        } );
      }
    }
  }
  
  else
  {
    manufacturer()
  }
}






// model sorting
function model ()
{
  let model = document.getElementById( "model" )
  var checkboxes = model.querySelectorAll( "input" )
  let x = 0;
  for ( var i = 0, n = checkboxes.length; i < n; i++ )
  {
    if ( checkboxes[ i ].checked == true )
        x++;
  }
  if ( x > 0 )
  {
    let parent = document.querySelector( '.bike-showcase' )
    parent.innerHTML =''
    for ( var i = 0, n = checkboxes.length; i < n; i++ )
    {
      
      if ( checkboxes[ i ].checked == true )
      {
        let arr = JSON.parse( localStorage.getItem( 'bikes' ) )
        arr.forEach( e =>
        {
          if ( checkboxes[ i ].name === e.model )
          {
            let parent = document.querySelector( '.bike-showcase' )
            let noclassdiv = document.createElement( 'div' )
            let bikeimgdiv = document.createElement( 'div' )
            let freenexcessdiv = document.createElement( 'div' )
            let pricenbooknowdiv = document.createElement( 'div' )
            let image = document.createElement( 'img' )
            let pname = document.createElement( 'p' )
            let pkilometer = document.createElement( 'p' )
            let pexcess = document.createElement( 'p' )
            let pprice = document.createElement( 'p' )
            let btn = document.createElement( 'button' )
            image.src = e.imgLink
            bikeimgdiv.append( image )
            bikeimgdiv.setAttribute( 'class', 'bike-img-cont' )
            pname.innerHTML = e.name
            pname.setAttribute( 'class', 'bike-name' )
            pkilometer.innerHTML = `Free ${ e.free } Kms`
            pkilometer.setAttribute( 'class', 'free-kilometers' )
            pexcess.innerHTML = `Excess ₹${ e.excess }/km`
            pexcess.setAttribute( 'class', 'excess' )
            freenexcessdiv.setAttribute( 'class', 'free-N-excess' )
            freenexcessdiv.append( pkilometer, pexcess )
            pprice.innerHTML = `₹${ e.price }`
            pprice.setAttribute( 'class', 'price' )
            btn.innerHTML = 'BOOK NOW'
            pricenbooknowdiv.setAttribute( 'class', 'price-N-bookNow' )
            pricenbooknowdiv.append( pprice, btn )
            noclassdiv.append( bikeimgdiv, pname, freenexcessdiv, pricenbooknowdiv )
            parent.append( noclassdiv )
          }
      
        } );
      }
    }
  }
  else
  {
    vehicle();
  }

}



//clearing all sorting
function clearall ()
{

  var checkboxes = document.querySelectorAll( "input" )
  
  for ( var i = 0, n = checkboxes.length; i < n; i++ )
  {
    checkboxes[ i ].checked = false;
  }
  bikes();
}
