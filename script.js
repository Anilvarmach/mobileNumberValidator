let access_key = '44af7d62deee05d87ffce853c2c6616f';
    
// LOAD COUNTRY DATA
fetch(`http://apilayer.net/api/countries?access_key=${access_key}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        for (let i in data) {
            var dropdown_item = document.createElement("option");
              dropdown_item.setAttribute('value',`${[i]}`)
              dropdown_item.innerText = `${data[i].country_name}(${i})`;
              dropdown.append(dropdown_item);
          }
    }).catch((err) => {console.log(err)})
let dropdown = document.querySelector("#country");

// LOAD MOBILE VALIDATION DATA
function validate() {
    var countryCode = document.getElementById('country').selectedOptions[0].value;
    var number = document.getElementById('phonenumber').value;
    fetch(`http://apilayer.net/api/validate?access_key=${access_key}&number=${number}&country_code=${countryCode}&format=1`)
    .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.valid == false) {
                alert("Invalid Phone Number")
            } else if (data.valid == true) {
                valid.innerHTML = data.valid;
            }
            number1.textContent = data.number;
            localFormat.innerHTML = data.local_format;
            internationalFormat.innerHTML = data.international_format;
            countryPrefix.innerHTML = data.country_prefix;
            countryCode1.textContent = data.country_code;
            countryName.innerHTML = data.country_name;
            location1.innerHTML = data.location;
            carrier.innerHTML = data.carrier;
            lineType.innerHTML = data.line_type;

        }).catch((err) => { console.log(err) })
}

let valid = document.querySelector('#valid');
let number1 = document.querySelector('#number');
let localFormat = document.querySelector('#local-format');
let internationalFormat = document.querySelector('#international-format');
let countryPrefix = document.querySelector('#country-prefix');
let countryCode1 = document.querySelector('#country-code');
let countryName = document.querySelector('#country-name');
let location1 = document.querySelector('#location');
let carrier = document.querySelector('#carrier');
let lineType = document.querySelector('#line-type');