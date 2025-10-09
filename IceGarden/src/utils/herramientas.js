import imgMediano  from '../assets/ordenar/imgMediano.png';
import imgGrande   from '../assets/ordenar/imgGrande.png';
import imgGarden   from '../assets/ordenar/imgGarden.png';
import imgSmoothie from '../assets/ordenar/imgSmoothie.png';
import imgLitro    from '../assets/ordenar/imgLitro.png';

import MedianoSVG from '../assets/ordenar/icons/MedianoSVG'; // ? PRESENTACIONES
import GrandeSVG from '../assets/ordenar/icons/GrandeSVG';
import GardenSVG from '../assets/ordenar/icons/GardenSVG';
import LitroSVG from '../assets/ordenar/icons/LitroSVG';
import SmoothieSVG from '../assets/ordenar/icons/SmoothieSVG';

import FresaSVG  from '../assets/ordenar/icons/toppings/FresaSVG';// ? TOPPINGS
import KiwiSVG   from '../assets/ordenar/icons/toppings/KiwiSVG';
import MangoSVG  from '../assets/ordenar/icons/toppings/MangoSVG';
import PiñaSVG   from '../assets/ordenar/icons/toppings/PiñaSVG';
import SandiaSVG from '../assets/ordenar/icons/toppings/SandiaSVG';
import MoraSVG   from '../assets/ordenar/icons/toppings/MoraSVG'; 

export const recipientes = [
    {
        'categoria': 'Clasicos',
        'opciones': [
            {tamaño: 'Mediano', topMax: 5, freeTop: 0, precio: 8900, descripcion: 'Relaxed cup de helado de yogurt, decoralo con tus garden fruits',            img: imgMediano, icon: MedianoSVG},
            {tamaño: 'Grande',  topMax: 5, freeTop: 0, precio: 9600, descripcion: 'Relaxed cup de helado de yogurt más grande, decoralo con tus garden fruits', img: imgGrande,  icon: GrandeSVG},
            {tamaño: 'Garden',  topMax: 6, freeTop: 3, precio: 17000, descripcion: 'La maxima exprecion, el legado y la imagen de la marca el IceGarden',       img: imgGarden,  icon: GardenSVG},
            {tamaño: 'Litro',   topMax: 8, freeTop: 0, precio: 39500, descripcion: 'La definicion absoluta de que no hay limites para ti, limites con L',       img: imgLitro,   icon: LitroSVG}
        ]
    },
    {
        'categoria': 'Experiencias',
        'opciones': [
            {tamaño: 'Smoothie', topMax: 3, freeTop: 3, precio: 14600, descripcion: 'Un elixir icy, te gusta probar cosas nuevas y estas te sorprenderan', img: imgSmoothie, icon: SmoothieSVG},
            {tamaño: 'IceBerg',  topMax: 2, freeTop: 2, precio: 17600, descripcion: ''},
            {tamaño: 'Artic',    topMax: 2, freeTop: 2, precio: 19600, descripcion: ''}
        ]
    },
    {
        'categoria': 'Retos',
        'opciones': [
            {tamaño: 'Iconic',    topMax: 1, freeTop: 0, precio: 16900, descripcion: ''},
            {tamaño: 'Piscracho', topMax: 0, freeTop: 0, precio: 20000, descripcion: ''},
            {tamaño: 'Dubai',     topMax: 0, freeTop: 0, precio: 22000, descripcion: ''}
        ]
    }
];

export const toppings = [
    {
        'categoria': 'clasicos',
        'opciones': {
            'frutas': [
                {name: 'fresas',     precio: 2000, icon: FresaSVG},
                {name: 'mango',      precio: 2000, icon: MangoSVG},
                {name: 'piña',       precio: 2000, icon: PiñaSVG},
                {name: 'sandia',     precio: 2000, icon: SandiaSVG},
                {name: 'kiwi',       precio: 2000, icon: KiwiSVG},
                {name: 'mora',       precio: 2000, icon: MoraSVG},
                {name: 'maracuya',   precio: 2000},
                {name: 'guanabana',  precio: 2000},
                {name: 'lulo',       precio: 2000},
            ],
            'dulces': [
                {name: 'zucaritas',    precio: 2000},
                {name: 'oreo',         precio: 2000},
                {name: 'chocochips',   precio: 2000},
                {name: 'nerds',        precio: 2000},
                {name: 'gomitas',      precio: 2000},
                {name: 'barquillos',   precio: 2000},
                {name: 'marshmallow',  precio: 2000},
                {name: 'minichips',    precio: 2000},
                {name: 'brownie',      precio: 2000},
                {name: 'barquillos',   precio: 2000},

            ],
            'otros': [
                {name: 'milo',     precio: 2000},
                {name: 'mani',     precio: 2000},
                {name: 'granola',  precio: 2000},
                {name: 'arequipe', precio: 2000},
                {name: 'manjar',   precio: 2000}
            ]
        }
    },
    {
        'categoria': 'premium',
        'opciones': {
            'frutas': [
                {name: 'cereza', precio: 2900},
                {name: 'arandanos', precio: 2900},
                {name: 'durazno', precio: 2900},
                {name: 'lyche', precio: 2900},
                {name: 'caviar', precio: 2900}
            ],
            'dulces': [
                {name: 'M&Ms', precio: 2900},
                {name: 'Brownie', precio: 2900},
                {name: 'Nutella', precio: 2900},
            ],
            'otros': [
                {name: 'cacahuate', precio: 2900},
                {name: 'chococobertura', precio: 2900},
                {name: 'cookiecobertura', precio: 2900},
                {name: 'almendras', precio: 2900},
                {name: 'nueces', precio:2900}
            ]
        }
    }
]