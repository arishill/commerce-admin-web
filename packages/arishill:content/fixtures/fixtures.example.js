// definitions
Fixtures = (_.isUndefined(Fixtures)) ? {} : Fixtures;
Fixtures.content = (_.isUndefined(Fixtures.content)) ? [] : Fixtures.content;

// set timestamps

/* NAVIGATION
.................................................*/
Fixtures.content['example'] = [
  {
    'key': 'home',
    'title': 'Home',
    'fields': [
      {
        type: 'aristotle__content__fields_repeatable',
        fields: [
          {
            type: 'text',
            default: null,
            label: 'Enter Text'
          },
          {
            type: 'image',
            ratio: { height: 456, width: 234 },
            default: null,
            label: 'Enter Image'
          }
        ]
      },
      {
        type: 'aristotle__content__fields_textarea',
        label: 'Description',
        default: null
      },
      {
        type: 'aristotle__content__fields_dropdown',
        label: 'Select Dropdown',
        default: null,
        options: [
          {
            label: 'One',
            name: 'one',
            value: 1
          },
          {
            label: 'Two',
            name: 'two',
            value: 2
          }
        ]
      },
      {
        type: 'aristotle__content__fields_image_multi',
        options: {
          size: 'large',
          label: 'Enter Multiple Images',
          name: 'coursework',
          height: 123,
          width: 123,
          fit: 'crop',
          default: null
        }
      },
      {
        type: 'aristotle__content__fields_image_multi',
        options: {
          size: 'large',
          label: 'Enter Multiple Images',
          name: 'ballwork',
          height: 345,
          width: 250,
          fit: 'crop',
          default: null
        }
      },
      {
        type: 'text',
        options: {
          default: null,
          label: 'Enter Text'
        }
      },
      {
        type: 'aristotle__content__fields_datepicker',
        label: 'Pick a date',
        format: 'MM/DD/YYYY',
        default: null,
      },
      {
        type: 'aristotle__content__fields_checkbox',
        label: 'Checkbox',
        name: '',
        default: ''
      },
      {
        type: 'aristotle__content__fields_checkbox_field',
        field: {
          type: 'text',
          label: 'Key',
          default: null
        }
      }
    ]
  },
  {
    'key': 'about',
    'title': 'About',
    'fields': [
      {
        type: 'aristotle__content__fields_textarea',
        label: 'Description',
        default: null
      },
      {
        type: 'aristotle__content__fields_dropdown',
        label: 'Select Dropdown',
        default: null,
        options: [
          {
            label: 'One',
            name: 'one',
            value: 1
          },
          {
            label: 'Two',
            name: 'two',
            value: 2
          }
        ]
      },
      {
        type: 'aristotle__content__fields_image_multi',
        options: {
          size: 'large',
          label: 'Enter Multiple Images',
          name: 'ballwork',
          height: 345,
          width: 250,
          fit: 'crop',
          default: null
        }
      },
      {
        type: 'aristotle__content__fields_checkbox',
        label: 'Checkbox',
        name: '',
        default: ''
      }
    ]
  },
];