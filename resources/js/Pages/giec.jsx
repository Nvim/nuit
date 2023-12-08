
import React from 'react';
import { Link, Head } from '@inertiajs/react';
import NavBar from '@/Components/NavBar';

const GIECReport = () => {
    return (
    <>
        <Head title="giec"/>
            <NavBar/>
        <div style={{ marginRight: '40px', marginLeft: '40px'}}>
            <br />
            <style>
            {`
                body {
                background-color: #a8d5ba; /* Couleur pastel-green */
            }
            `}
            </style>
            
            <h1 className="font-extrabold mb-4" >C'est quoi le Giec ? &#129299;</h1>
            <p>Tu as peut-être déjà entendu parler du GIEC. C'est un acronyme qui signifie Groupe d'experts intergouvernemental sur l'évolution du climat. C'est un groupe de scientifiques du monde entier qui étudient le climat de la Terre. Les scientifiques du GIEC ont découvert que le climat de la Terre change. La température de la Terre augmente, et les événements météorologiques extrêmes, comme les sécheresses, les inondations et les tempêtes, deviennent plus fréquents.Le GIEC pense que ces changements sont causés par les activités humaines, comme la combustion des combustibles fossiles, qui libèrent des gaz à effet de serre dans l'atmosphère. Ces gaz piégeant la chaleur, ils font augmenter la température de la Terre.</p>
            <p>Pour lutter contre le changement climatique, il faut réduire les émissions de gaz à effet de serre. Les gouvernements du monde entier se sont engagés à réduire leurs émissions de gaz à effet de serre.</p>
           <br/>
            <h2 className="font-extrabold mb-4">Voici une listes de quelques mesures mises en place : </h2>
            <ul>
                <li>Les États-Unis ont annoncé qu'ils investiraient 2 000 milliards de dollars dans les énergies renouvelables et l'efficacité énergétique.</li>
                <li>L'Union européenne a adopté un plan visant à réduire ses émissions de gaz à effet de serre de 55 % d'ici 2030.</li>
                <li>La Chine a annoncé qu'elle atteindrait la neutralité carbone d'ici 2060.</li>
            </ul>
            <p>Ces mesures sont importantes, mais elles ne suffiront pas à elles seules à lutter contre le changement climatique. Il faut aussi que les individus prennent des mesures pour réduire leur impact sur l'environnement.</p>
            <br />
            <h2 className="font-extrabold mb-4">Que pouvez-vous faire ?</h2>
            <ul>
                <li>Éteindre les lumières et les appareils électriques lorsque tu ne les utilises pas.</li>
                <li>Recycler et composter.</li>
                <li>Choisir des produits locaux et durables.</li>
                <li>Limiter tes déplacements en voiture.</li>
            </ul>
            <p className="font-extrabold mb-4">Ensemble, nous pouvons faire une différence !</p>
            <a href="https://www.ecologie.gouv.fr/sites/default/files/20250_4pages-GIEC-2.pdf" download="Rapport_GIEC.pdf">
                <button className="px-6 py-3 rounded-full bg-white p-2 fixed bottom-10  mr-4 text-lg active:bg-blue-200">
                Telecharger le rapport du GIEC <span className="ml-2">&#x2935;</span>
                </button>
            </a>
        </div>
    </>
    );
}

export default GIECReport;
