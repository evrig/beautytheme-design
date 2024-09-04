const { spacing } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    theme: {
        container: {
            center: true
        },
        extend: {
            colors: {
                'pearl': '#ECDEC1',
                'floralwhite': '#FCF7EE',
                'copper': '#A36638',
                gray: {
                    'erieb': '#222222',
                    'dim': '#666666',
                }
            },
            spacing: {
                '3.5': '14px',
                '3.75': '15px',
                '4.5': '18px',
                '12.5': '50px',
                '32.5': '130px',
                '42.5': '170px'
            },
            width: {
                '180pxc' : 'calc(100% - 180px)',
                '24.5%': '24.5%',
                '32.5%': '32.5%',
                '35%': '35%',
                '30%': '30%',
            },
            maxWidth: ({ theme }) => ({
                ...theme('spacing'),
            }),
            minHeight: ({ theme }) => ({
                ...theme('spacing'),
            }),
            content: {
                'blank': '""',
            },
            fontSize: {
              'f0': '0px',
              'f32': '32px',
              'f40': '40px'
            },
            boxShadow: {
                '4xl': '1px 1px 4px #ECDEC1',
            },
            backgroundImage: {
                'caret-down' : "url('../images/caret-down.svg')",
            },
        },
    }
}
