function init() {


    const section_element = document.querySelector('.shopping_list_items');
    const input_field = document.querySelector('input');
    const submit_button = document.querySelector('button');
    const remove_button = document.getElementById('remove');
    const ul_element = document.createElement('ul');

    submit_button.addEventListener('click', add_list_item);
    remove_button.addEventListener('click', remove_all_list_items);


    function add_list_item() {
        const li_element = document.createElement('li');


        let li_checkbox = document.createElement('input')
        li_checkbox.type = 'checkbox';

        let li_delete_button = document.createElement('button')
        li_delete_button.innerText = 'X'

        section_element.appendChild(ul_element);
        li_element.innerText = input_field.value;
        ul_element.appendChild(li_element);
        li_element.prepend(li_checkbox)
        li_element.appendChild(li_delete_button)

        li_delete_button.addEventListener('click', () => {
            li_element.parentNode.removeChild(li_element)
        });
    };

    function remove_all_list_items() {
        while (ul_element.firstChild) {
            ul_element.removeChild(ul_element.firstChild);
        };
    };
};

init();
