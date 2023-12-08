import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],


    theme: {
        extend: {
            fontSize: {
                lg: '1.125rem', // ajustez cette valeur selon vos besoins
              },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'pastel-green': '#a8d5ba',
                'light-pastel-yellow': '#f9f1a5',
            },

        },
    },
    //<div class="bg-pastel-green text-light-pastel-yellow"> ... </div>

    plugins: [forms],
};
