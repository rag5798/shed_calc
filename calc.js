//PRICES BASED OF SECTION
//*************************************************************************************************************
const shed_price = {
    "8x8": 2999,
    "8x10": 3109,
    "8x12": 3209,
    "8x16": 3919,
    "10x10": 3899,
    "10x12": 4029,
    "10x16": 4699,
    "10x20": 5459,
    "10x24": 6079,
    "12x12": 4999,
    "12x16": 5569,
    "12x20": 6299,
    "12x24": 7069,
    "12x28": 7869,
    "12x32": 8979,
    "12x36": 10369,
    "12x40": 11899,
    "14x20": 7699,
    "14x24": 8499,
    "14x28": 9499,
    "14x30": 10099,
    "14x32": 10619,
    "14x36": 12049,
    "14x40": 13749
}

const shed_garage = {
    "10x10": 4669,
    "10x12": 4789,
    "10x16": 5469,
    "10x20": 6239,
    "10x24": 6869,
    "12x12": 5799,
    "12x16": 6379,
    "12x20": 7119,
    "12x24": 7899,
    "12x28": 8719,
    "12x32": 9839,
    "12x36": 11239,
    "12x40": 12779,
    "14x20": 8519,
    "14x24": 9339,
    "14x28": 9499,
    "14x30": 10959,
    "14x32": 11479,
    "14x36": 12929,
    "14x40": 14639
}

const barn_price = {
    "8x8": 3499,
    "8x10": 3659,
    "8x12": 3809,
    "8x16": 4429,
    "10x10": 4099,
    "10x12": 4259,
    "10x16": 5099,
    "10x20": 5779,
    "10x24": 6499,
    "12x12": 4999,
    "12x16": 5869,
    "12x20": 6639,
    "12x24": 7449,
    "12x28": 8289,
    "12x32": 9459,
    "12x36": 10919,
    "12x40": 12529,
    "14x20": 8279,
    "14x24": 9139,
    "14x28": 10219,
    "14x30": 10859,
    "14x32": 11419,
    "14x36": 12959,
    "14x40": 14789
}

const barn_garage = {
    "10x10": 4869,
    "10x12": 5019,
    "10x16": 5869,
    "10x20": 6559,
    "10x24": 7289,
    "12x12": 6069,
    "12x16": 6679,
    "12x20": 7459,
    "12x24": 8279,
    "12x28": 9139,
    "12x32": 10319,
    "12x36": 11789,
    "12x40": 13409,
    "14x20": 9199,
    "14x24": 9999,
    "14x28": 11169,
    "14x30": 11739,
    "14x32": 12299,
    "14x36": 13859,
    "14x40": 15699
}

const victorian_price = {
    "10x12": 5379,
    "10x16": 6129,
    "10x20": 6969,
    "10x24": 7659,
    "12x12": 6779,
    "12x16": 7089,
    "12x20": 7899,
    "12x24": 8759,
    "12x28": 9649,
    "12x32": 10879,
    "12x36": 12429,
    "12x40": 14129
}

const garden_price = {
    "10x12": 5379,
    "10x16": 6129,
    "10x20": 6969,
    "10x24": 7659,
    "12x12": 6779,
    "12x16": 7089,
    "12x20": 7899,
    "12x24": 8759,
    "12x28": 9649,
    "12x32": 10879,
    "12x36": 12429,
    "12x40": 14129
}

const single_pane_window_price = {
    "18x27": 95,
    "21x27": 110,
    "24x36":120,
    "30x36": 150,
    "18_octagon":100,
    "10x60": 120,
    "transwin": 120,
    "flowerbox": 30,
    "shutter": 30
}

const double_pane_window_price = {
    "24x36":195,
    "36x36": 260,
    "36x48": 290,
    "48x36": 290,
    "48x48": 340,
    "60x42": 360,
    "double_flowerbox": 30,
    "double_shutter": 30
}

const fiberglass_door_price = {
    "6_fiber": 350,
    "9_fiber": 395,
    "15_fiber": 490,
    "60x68_fiber": 695
}

const roll_up_door_price = {
    "8x7_roll": 725,
    "9x7_roll": 755,
    "10x7_roll": 890,
    "color": 80
}

const wood_door_price = {
    "36_wood": 100,
    "5_wood": 200,
    "6_wood": 200,
    "8_wood": 300
}

const porch_price = {
    "4": 400,
    "6": 500,
    "8": 600,
}

//Side Porch Price
const side_porch = 600

//20 per Liniar Foot
const railing_price = 20

//Metal Must be 2
const ramp_price = {
    "metal_ramp": 450,
    "wood_ramp": 225
}

const work_bench_price = {
    "8x_": 120,
    "10x_": 120,
    "12x_": 150,
    "14x_": 150
}

const loft_price = {
    "8x_": 100,
    "10x_": 100,
    "12x_": 150,
    "14x_": 150
}

const overhang_price = 300;

//Sold in sets, 40 per set
const arched_garden_vents = 40;

//20% fee, takes the current price plus 20%
const build_on_site = 0.20;

//7% fee, takes the current price plus 7%
const silvertech_wall_roof = 0.07;

//30% fee, takes the current price plus 30%
const vinly_siding = 0.30;
const metal_siding = 0.30;

//5% fee, takes the current price plus 5%
const desinger_shingle_roof = 0.05;

//20 per linear foot
const interior_wall = 20;

//20% fee, takes the current price plus 20%
const exterior_wall = 0.20;


let previous_single_pane_input = {
    "18x27": 0,
    "21x27": 0,
    "24x36": 0,
    "30x36": 0,
    "18_octagon": 0,
    "10x60": 0,
    "transwin": 0,
    "flowerbox": 0,
    "shutter": 0
};

let previous_double_pane_input = {
    "24x36": 0,
    "36x36": 0,
    "36x48": 0,
    "48x36": 0,
    "48x48": 0,
    "60x42": 0,
    "double_flowerbox": 0,
    "double_shutter": 0
}

let previous_fiberglass_input = {
    "6_fiber": 0,
    "9_fiber": 0,
    "15_fiber": 0,
    "60x68_fiber": 0
}

let previous_wood_input = {
    "36_wood": 0,
    "5_wood": 0,
    "6_wood": 0,
    "8_wood": 0,
}

let previous_roll_input = {
    "8x7_roll": 0,
    "9x7_roll": 0,
    "10x7_roll": 0
}

let previous_porch = ""

let previous_wood_ramp = 0
//*************************************************************************************************************

//unhides things when needed
function unhide(element){
    element.classList.remove('hide');
}

//hides things when needed
function hide(element){
    element.classList.add('hide');
}

//ROOF OPTIONS
function roof_options(){
    const roof_type = document.getElementById('roof');
    const size = document.getElementById('size');
    const garage_box = document.getElementById('garage')
    garage_box.checked = false;
    if (roof_type.value == "victorian" || roof_type.value == "garden_studio"){
        document.getElementById('8x').remove();
        document.getElementById('10x10').remove();
    }else{
        if (!document.getElementById('8x')){
            const eight_by = document.createElement('optgroup');
            eight_by.label = "8 X _";
            eight_by.innerHTML = "<option value=\"8x8\">8 X 8</option><option value=\"8x10\">8 X 10</option><option value=\"8x12\">8 X 12</option><option value=\"8x16\">8 X 16</option>";
            size.insertBefore(eight_by, size.children[1]);
        }

        if (!document.getElementById('10x10')){
            const ten_by = document.getElementById('10x');
            const ten_by_ten = document.createElement('option');
            ten_by_ten.value = "10x10";
            ten_by_ten.id = "10x10";
            ten_by_ten.text = "10 X 10";
            ten_by.prepend(ten_by_ten);
        }
    }
}

document.getElementById('roof').addEventListener('change', roof_options);
//END OF ROOF OPTIONS

//SIZE OPTIONS
function size_options(){
    const roof_type = document.getElementById('roof');
    const size = document.getElementById('size');
    const price = document.getElementById('price');
    const garage_box = document.getElementById('garage')
    garage_box.checked = false;
    if (roof_type.value == 'none' || size.value == 'none'){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        roof_error = document.getElementById('roof_error')
        if (roof_error.innerHTML === ''){
            roof_error.innerHTML += "<p>Please Choose a Roof Type and Size</p>";
        }
        setTimeout(function (){
            roof_error.innerHTML = "";
        }, 5000)
    }else if (roof_type.value == "shed"){
        price.textContent = `${shed_price[size.value]}`;
    }else if (roof_type.value == "barn"){
        price.textContent = `${barn_price[size.value]}`;
    }else if (roof_type.value == "victorian"){
        price.textContent = `${victorian_price[size.value]}`;
    }else if (roof_type.value == "garden_studio"){
        price.textContent = `${garden_price[size.value]}`;
    }

    if (['shed', 'barn'].includes(roof_type.value) && size.value.slice(0, 2) !== '8x'){
        if (document.getElementById('garage_label').classList.contains('hide')){
            document.getElementById('garage_label').classList.remove('hide');
            document.getElementById('garage').classList.remove('hide');
        } 
    }else{
        if (!document.getElementById('garage_label').classList.contains('hide')){
            document.getElementById('garage_label').classList.add('hide');
            document.getElementById('garage').classList.add('hide');
        }
    }
}

document.getElementById('size').addEventListener('change', size_options);



function add_garage_price(){
    const garage_box = document.getElementById('garage')
    const roof_type = document.getElementById('roof');
    const size = document.getElementById('size');
    const price = document.getElementById('price');
    if (garage_box.checked){
        if (roof_type.value == 'barn'){
            price.textContent = `${parseInt(price.textContent) + (barn_garage[size.value] - barn_price[size.value])}` 
        }else{
            price.textContent = `${parseInt(price.textContent) + (shed_garage[size.value] - shed_price[size.value])}`
        }
    }else{
        if (roof_type.value == 'barn'){
            price.textContent = `${parseInt(price.textContent) - (barn_garage[size.value] - barn_price[size.value])}` 
        }else{
            price.textContent = `${parseInt(price.textContent) - (shed_garage[size.value] - shed_price[size.value])}`
        }
    }
}

document.getElementById('garage').addEventListener('change', add_garage_price);
//END OF SIZE OPTIONS

//WINDOW OPTIONS
function show_window_options(){
    const window_select = document.getElementById('window');
    const double_div = document.getElementById('double_pane');
    const single_div = document.getElementById('single_pane');
    if (window_select.value == 'none') {
        if (!single_div.classList.contains('hide')){
            single_div.classList.add('hide');
        }

        if (!double_div.classList.contains('hide')){
            double_div.classList.add('hide');
        }
    }else if (window_select.value == 'single'){
        if (single_div.classList.contains('hide')){
            single_div.classList.remove('hide');
        }

        if (!double_div.classList.contains('hide')){
            double_div.classList.add('hide');
        }
    }else if (window_select.value == 'double'){
        if (double_div.classList.contains('hide')){
            double_div.classList.remove('hide');
        }

        if (!single_div.classList.contains('hide')){
            single_div.classList.add('hide');
        }
    }else{
        single_div.classList.remove('hide');
        double_div.classList.remove('hide');
    }
}

document.getElementById('window').addEventListener('change', show_window_options);

function calc_single_pane(event) {
    event.preventDefault();
    const price = document.getElementById('price');
    let current_price = parseFloat(price.textContent);
    console.log("Initial price:", current_price);

    const allInputs = document.querySelectorAll('#single_form input');
    const inputsArray = Array.from(allInputs);

    Object.entries(previous_single_pane_input).forEach(([key, value]) => {
        if (Object.keys(single_pane_window_price).includes(key)) {
            const quantity_price = single_pane_window_price[key] * value;
            console.log(`Subtracting: ${quantity_price} for ${key}`);
            current_price -= quantity_price;
        }
    });

    inputsArray.forEach(node => {
        if (Object.keys(single_pane_window_price).includes(node.id)) {
            const quantity_price = single_pane_window_price[node.id] * (parseFloat(node.value) || 0);
            console.log(`Adding: ${quantity_price} for ${node.id}`);
            current_price += quantity_price;
        }
    });

    price.textContent = `${current_price}`;

    inputsArray.forEach(node => {
        if (Object.keys(previous_single_pane_input).includes(node.id)) {
            previous_single_pane_input[node.id] = parseFloat(node.value) || 0;
        }
    });
}

document.getElementById('single_form').addEventListener('submit', calc_single_pane);

function calc_double_pane(event){
    event.preventDefault();

    const price = document.getElementById('price');
    let current_price = parseFloat(price.textContent);
    console.log("Initial price:", current_price);

    const allInputs = document.querySelectorAll('#double_form input');
    const inputsArray = Array.from(allInputs);

    Object.entries(previous_double_pane_input).forEach(([key, value]) => {
        if (Object.keys(double_pane_window_price).includes(key)) {
            const quantity_price = double_pane_window_price[key] * value;
            console.log(`Subtracting: ${quantity_price} for ${key}`);
            current_price -= quantity_price;
        }
    });

    inputsArray.forEach(node => {
        if (Object.keys(double_pane_window_price).includes(node.id)) {
            const quantity_price = double_pane_window_price[node.id] * (parseFloat(node.value) || 0);
            console.log(`Adding: ${quantity_price} for ${node.id}`);
            current_price += quantity_price;
        }
    });

    price.textContent = `${current_price}`;

    inputsArray.forEach(node => {
        if (Object.keys(previous_double_pane_input).includes(node.id)) {
            previous_double_pane_input[node.id] = parseFloat(node.value) || 0;
        }
    });
}

document.getElementById('double_form').addEventListener('submit', calc_double_pane)
//END OF WINDOW OPTIONS

//DOOR OPTIONS
function show_door_options(){
    const door_select = document.getElementById('door');
    const fiberglass_div = document.getElementById('fiberglass_options');
    const wood_div = document.getElementById('wood_options');
    const roll_div = document.getElementById('roll_options');
    const color_box = document.getElementById('color');
    const price = document.getElementById('price');
    if (color_box.checked == true){
        price.textContent = `${parseInt(price.textContent) - roll_up_door_price['color']}`;
        color_box.checked = false;
    }
    if (door_select.value == 'none'){
        if (!fiberglass_div.classList.contains('hide')){
            fiberglass_div.classList.add('hide');
        }

        if (!wood_div.classList.contains('hide')){
            wood_div.classList.add('hide')
        }

        if (!roll_div.classList.contains('hide')){
            roll_div.classList.add('hide')
        }
    }else if (door_select.value == 'fiberglass'){
        fiberglass_div.classList.remove('hide')

        if (!wood_div.classList.contains('hide')){
            wood_div.classList.add('hide')
        }

        if (!roll_div.classList.contains('hide')){
            roll_div.classList.add('hide')
        }
    }else if (door_select.value == 'wood'){
        wood_div.classList.remove('hide')

        if (!fiberglass_div.classList.contains('hide')){
            fiberglass_div.classList.add('hide');
        }

        if (!roll_div.classList.contains('hide')){
            roll_div.classList.add('hide')
        }
    }else if (door_select.value == 'rollup'){
        roll_div.classList.remove('hide')

        if (!wood_div.classList.contains('hide')){
            wood_div.classList.add('hide')
        }

        if (!fiberglass_div.classList.contains('hide')){
            fiberglass_div.classList.add('hide');
        }
    }else{
        fiberglass_div.classList.remove('hide')
        wood_div.classList.remove('hide')
        roll_div.classList.remove('hide')
    }
}

document.getElementById('door').addEventListener('change', show_door_options)

function calc_fiberglass_price (event){
    event.preventDefault();

    const price = document.getElementById('price');
    let current_price = parseFloat(price.textContent);
    console.log("Initial price:", current_price);

    const allInputs = document.querySelectorAll('#fiberglass_form input');
    const inputsArray = Array.from(allInputs);

    Object.entries(previous_fiberglass_input).forEach(([key, value]) => {
        if (Object.keys(fiberglass_door_price).includes(key)) {
            const quantity_price = fiberglass_door_price[key] * value;
            console.log(`Subtracting: ${quantity_price} for ${key}`);
            current_price -= quantity_price;
        }
    });

    inputsArray.forEach(node => {
        if (Object.keys(fiberglass_door_price).includes(node.id)) {
            const quantity_price = fiberglass_door_price[node.id] * (parseFloat(node.value) || 0);
            console.log(`Adding: ${quantity_price} for ${node.id}`);
            current_price += quantity_price;
        }
    });

    price.textContent = `${current_price}`;

    inputsArray.forEach(node => {
        if (Object.keys(previous_fiberglass_input).includes(node.id)) {
            previous_fiberglass_input[node.id] = parseFloat(node.value) || 0;
        }
    });
}

document.getElementById('fiberglass_form').addEventListener('submit', calc_fiberglass_price)

function calc_wood_price (event){
    event.preventDefault();

    const price = document.getElementById('price');
    let current_price = parseFloat(price.textContent);
    console.log("Initial price:", current_price);

    const allInputs = document.querySelectorAll('#wood_form input');
    const inputsArray = Array.from(allInputs);

    Object.entries(previous_wood_input).forEach(([key, value]) => {
        if (Object.keys(wood_door_price).includes(key)) {
            const quantity_price = wood_door_price[key] * value;
            console.log(`Subtracting: ${quantity_price} for ${key}`);
            current_price -= quantity_price;
        }
    });

    inputsArray.forEach(node => {
        if (Object.keys(wood_door_price).includes(node.id)) {
            const quantity_price = wood_door_price[node.id] * (parseFloat(node.value) || 0);
            console.log(`Adding: ${quantity_price} for ${node.id}`);
            current_price += quantity_price;
        }
    });

    price.textContent = `${current_price}`;

    inputsArray.forEach(node => {
        if (Object.keys(previous_wood_input).includes(node.id)) {
            previous_wood_input[node.id] = parseFloat(node.value) || 0;
        }
    });
}

document.getElementById('wood_form').addEventListener('submit', calc_wood_price)

function calc_roll_price (event){
    event.preventDefault();

    const price = document.getElementById('price');
    let current_price = parseFloat(price.textContent);
    console.log("Initial price:", current_price);

    const allInputs = document.querySelectorAll('#roll_form input');
    const inputsArray = Array.from(allInputs);

    Object.entries(previous_roll_input).forEach(([key, value]) => {
        if (Object.keys(roll_up_door_price).includes(key)) {
            const quantity_price = roll_up_door_price[key] * value;
            console.log(`Subtracting: ${quantity_price} for ${key}`);
            current_price -= quantity_price;
        }
    });

    inputsArray.forEach(node => {
        if (Object.keys(roll_up_door_price).includes(node.id)) {
            const quantity_price = roll_up_door_price[node.id] * (parseFloat(node.value) || 0);
            console.log(`Adding: ${quantity_price} for ${node.id}`);
            current_price += quantity_price;
        }
    });

    price.textContent = `${current_price}`;

    inputsArray.forEach(node => {
        if (Object.keys(previous_roll_input).includes(node.id)) {
            previous_roll_input[node.id] = parseFloat(node.value) || 0;
        }
    });
}

document.getElementById('roll_form').addEventListener('submit', calc_roll_price);

function add_color_price(){
    const color_box = document.getElementById('color');
    const price = document.getElementById('price');
    let current_price = parseInt(price.textContent.trim()) || 0;
    if (color_box.checked == true){
        price.textContent = `${current_price + roll_up_door_price['color']}`;
    }else{
        price.textContent = `${current_price - roll_up_door_price['color']}`;
    }
}

document.getElementById('color').addEventListener('change', add_color_price);
//END OF DOOR OPTIONS

//PORCH OPTIONS
function add_porch_price(){
    const price = document.getElementById('price');
    const porch_select = document.getElementById('porch_size')
    if (porch_select.value == 'none'){
        if (previous_porch !== "" && previous_porch !== "none"){
            price.textContent = `${parseInt(price.textContent) - porch_price[previous_porch]}`;
        }
    }else{
        if (previous_porch !== "" && previous_porch !== "none"){
            price.textContent = `${parseInt(price.textContent) - porch_price[previous_porch]}`;
        }
        price.textContent = `${parseInt(price.textContent) + porch_price[porch_select.value]}`;
    }
    previous_porch = porch_select.value
}

document.getElementById('porch_size').addEventListener('change', add_porch_price);

function add_side_price(){
    const price = document.getElementById('price');
    const side_porch_box = document.getElementById('side_porch');
    if (side_porch_box.checked == true){
        price.textContent = `${parseInt(price.textContent) + side_porch}`;
    }else{
        price.textContent = `${parseInt(price.textContent) - side_porch}`;
    }
}

document.getElementById('side_porch').addEventListener('change', add_side_price)

function add_main_railing_price(){
    const price = document.getElementById('price');
    const main_railing_box = document.getElementById('main_railing');
    const porch_select = document.getElementById('porch_size');
    const size = document.getElementById('size');
    const width = size.value.slice(0,2);
    if (!parseInt(width)){
        width = size.value.slice(0, 1);
    }
    const linear_ft = (2 * parseInt(porch_select.value)) + parseInt(width);
    console.log(linear_ft)
    if (main_railing_box.checked == true){
        price.textContent = `${parseInt(price.textContent) + (linear_ft * railing_price)}`;
    }else{
        price.textContent = `${parseInt(price.textContent) - (linear_ft * railing_price)}`;
    }
}

document.getElementById('main_railing').addEventListener('change', add_main_railing_price)

//Assuming the Side Porch is 4 out from the house and 8 feet paralell to the house
function add_side_railing_price(){
    const price = document.getElementById('price');
    const side_railing_box = document.getElementById('side_railing');
    const linear_ft = (2 * 4) + 8;
    console.log(linear_ft)
    if (side_railing_box.checked == true){
        price.textContent = `${parseInt(price.textContent) + (linear_ft * railing_price)}`;
    }else{
        price.textContent = `${parseInt(price.textContent) - (linear_ft * railing_price)}`;
    }
}

document.getElementById('side_railing').addEventListener('change', add_side_railing_price)
//END OF PORCH OPTIONS
//Adding state to each railing would allow for smoother price adjustments, hiding railing elements until they can be properly processed

//RAMP OPTIONS
function add_metal_ramp_price(){
    const price = document.getElementById('price');
    const metal_ramp_box = document.getElementById('metal_ramp');
    if (metal_ramp_box.checked == true){
        price.textContent = `${parseInt(price.textContent) + ramp_price[metal_ramp_box.id]}`;
    }else{
        price.textContent = `${parseInt(price.textContent) - ramp_price[metal_ramp_box.id]}`;
    }
}

document.getElementById('metal_ramp').addEventListener('change', add_metal_ramp_price);

function add_wood_ramp_price(event){
    event.preventDefault();
    const price = document.getElementById('price');
    const wood_input = document.getElementById('wood_ramp');
    const wood_value = parseInt(wood_input.value) || 0;

    if (previous_wood_ramp == 0){
        price.textContent = parseInt(price.textContent) + (ramp_price['wood_ramp'] * wood_value);
    }else{
        price.textContent = parseInt(price.textContent) - (ramp_price['wood_ramp'] * previous_wood_ramp);
        price.textContent = parseInt(price.textContent) + (ramp_price['wood_ramp'] * wood_value);
    }
    previous_wood_ramp = wood_input.value
}

document.getElementById('wood_ramp_form').addEventListener('submit', add_wood_ramp_price);
//END OF RAMP OPTIONS

//EXTRA OPTIONS
function pattern_match(string){
    const regex = /^\d+x$/;
    return regex.test(string);
}

function add_workbench_price(){
    const price = document.getElementById('price');
    const workbench_box = document.getElementById('workbench');
    const size = document.getElementById('size');
    const roof_type = document.getElementById('roof');
    let size_abr = size.value.slice(0,2)
    if (!pattern_match(size_abr)){
      size_abr =  size.value.slice(0,3)
    }
    size_abr += '_'

    if (roof_type.value == 'none' || size.value == 'none'){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        roof_error = document.getElementById('roof_error')
        if (roof_error.innerHTML === ''){
            roof_error.innerHTML += "<p>Please Choose a Roof Type and Size</p>";
        }
        workbench_box.checked = false;
        setTimeout(function (){
            roof_error.innerHTML = "";
        }, 5000)
    }else{
        if (workbench_box.checked == true){
            price.textContent = parseInt(price.textContent) + work_bench_price[size_abr];
        }else{
            price.textContent = parseInt(price.textContent) - work_bench_price[size_abr];
        }
    }
}

document.getElementById('workbench').addEventListener('change', add_workbench_price)

function add_loft_price(){
    const price = document.getElementById('price');
    const loft_box = document.getElementById('loft');
    const size = document.getElementById('size');
    const roof_type = document.getElementById('roof');
    let size_abr = size.value.slice(0,2)
    if (!pattern_match(size_abr)){
      size_abr =  size.value.slice(0,3)
    }
    size_abr += '_'

    if (roof_type.value == 'none' || size.value == 'none'){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        roof_error = document.getElementById('roof_error')
        if (roof_error.innerHTML === ''){
            roof_error.innerHTML += "<p>Please Choose a Roof Type and Size</p>";
        }
        loft_box.checked = false;
        setTimeout(function (){
            roof_error.innerHTML = "";
        }, 5000)
    }else{
        if (loft_box.checked == true){
            price.textContent = parseInt(price.textContent) + loft_price[size_abr];
        }else{
            price.textContent = parseInt(price.textContent) - loft_price[size_abr];
        }
    }

}

document.getElementById('loft').addEventListener('change', add_loft_price)
//END OF EXTRA OPTIONS

/* Finds the total price of the shed
    if (roof_type.value == 'none' || size.value == 'none'){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        roof_error = document.getElementById('roof_error')
        if (roof_error.innerHTML === ''){
            roof_error.innerHTML += "<p>Please Choose a Roof Type and Size</p>";
        }
        workbench_box.checked = false;
        setTimeout(function (){
            roof_error.innerHTML = "";
        }, 5000)
    }else if (roof_type.value == "shed"){
        total_shed_price = shed_price[size.value];
    }else if (roof_type.value == "barn"){
        total_shed_price = barn_price[size.value];
    }else if (roof_type.value == "victorian"){
        total_shed_price = victorian_price[size.value];
    }else if (roof_type.value == "garden_studio"){
        total_shed_price = garden_price[size.value]; 
*/