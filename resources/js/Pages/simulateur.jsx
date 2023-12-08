import React, {useEffect, useState} from 'react';
import { Link, Head } from '@inertiajs/react';
import NavBar from '@/Components/NavBar';

//const SimulateurPage = () => { 
export default function SimulateurPage({ auth, laravelVersion, phpVersion}){
    const [step, setStep] = useState(0);
    const [km, setKm] = useState(0);
    const [nbVols, setNbVols] = useState(0);
    const [nombreDouches, setNombreDouches] = useState('1.5');
    const [dureeDouche, setDureeDouche] = useState(0);
    const [eauChaude, setEauChaude] = useState(false);
    const [nbMails, setNbMails] = useState(0);
    const [emissionVoiture, setEmissionVoiture] = useState(0);
    const [emissionAvion, setEmissionAvion] = useState(0);
    const [emissionDouche, setEmissionDouche] = useState(0);
    const [emissionMail, setEmissionMail] = useState(0);
    const [emissionTotale, setEmissionTotale] = useState(0);
    const [progress, setProgress] = useState(0);
    const nombreTotalPages = 5;
    const ProgressBar = ({ progress }) => (
        <div className="border border-gray-300 w-3/4 mx-auto bg-white">
          <div className="bg-blue-200 h-8" style={{ width: `${progress}%` }}>
            <span className="text-white text-sm pl-2">{progress}%</span>
          </div>
        </div>
    );


    const handleNextClick = () => {
    if (progress < 100) {
        setProgress(progress + 25);
      }
      if (step < nombreTotalPages - 1) { // Vérifiez si ce n'est pas la dernière page
        setStep((prevStep) => prevStep + 1);
      }
    
    };

  const handleNbVolsChange = (event) => {
    const newNbVols = Number(event.target.value);
    setNbVols(newNbVols);
  };

  const handleNombreDouchesChange = (event) => {
    let valeurNombreDouches = 0;
    switch (event.target.value) {
      case '1-2':
        valeurNombreDouches = 1.5;
        break;
      case '2-4':
        valeurNombreDouches = 3;
        break;
      case '5-plus':
        valeurNombreDouches = 6;
        break;
      default:
        valeurNombreDouches = 0; // ou une valeur par défaut si nécessaire
    }
  
    setNombreDouches(valeurNombreDouches);
  };

  const handleDureeDoucheChange = (event) => {
    const dureeDouche = Number(event.target.value);
    setDureeDouche(dureeDouche);
  };

  const handleEauChaudeChange = (event) => {
    const eauChaude = event.target.checked;
    setEauChaude(eauChaude);
  };

  const handleNbMailsChange = (event) => {
    const nbMails = Number(event.target.value);
    setNbMails(nbMails);
  };

  const handleKmChange = (event) => {
    const newKm = Number(event.target.value);
    setKm(newKm);
  };

  
  useEffect(() => {
    const calcEmissionVoiture = Number(km) * 12 * 0.150;
    const calcEmissionAvion = Number(nbVols) * 0.285;
    let calcEmissionDouche = (Number(nombreDouches) * Number(dureeDouche)) * 0.003;
    if (eauChaude) {
      calcEmissionDouche *= 2;
    }
    const calcEmissionMail = Number(nbMails) * 0.0001;
    console.log('km:', km, 'nbVols:', nbVols, 'nombreDouches:', nombreDouches, 'dureeDouche:', dureeDouche, 'eauChaude:', eauChaude, 'nbMails:', nbMails);
  
    const nouvelleEmission = calcEmissionVoiture + calcEmissionAvion + calcEmissionDouche + calcEmissionMail;
    setEmissionTotale(Number(nouvelleEmission/1000));
  }, [km, nbVols, nombreDouches, dureeDouche, eauChaude, nbMails]);
  
  /*const handleEmission = () => {
    setEmissionVoiture((Number(km) * 52) * (0.150));
    setEmissionAvion(Number(nbVols) * 0.285); 
    setEmissionDouche((Number(nombreDouches) * Number(dureeDouche)) * (0.003));
    if (eauChaude) {
        emissionDouche *= 2;
    }
    setEmissionMail(Number(nbMails) * 0.0001);
    useEffect(() => {
        handleEmission();
      }, [km, nbVols, nombreDouches, dureeDouche, eauChaude, nbMails] );

    useEffect(() => { 
        const nouvelleEmission = emissionVoiture + emissionAvion + emissionDouche + emissionMail
        setEmissionTotale(nouvelleEmission);
        console.log(nouvelleEmission);
    }, [emissionVoiture, emissionAvion, emissionDouche, emissionMail] );
    }
    
    const handleEmission = () => {
        const calcEmissionVoiture = Number(km) * 52 * 0.150;
        const calcEmissionAvion = Number(nbVols) * 0.285;
        let calcEmissionDouche = (Number(nombreDouches) * Number(dureeDouche)) * 0.003;
        if (eauChaude) {
          calcEmissionDouche *= 2;
        }
        const calcEmissionMail = Number(nbMails) * 0.0001;
      
        setEmissionVoiture(calcEmissionVoiture);
        setEmissionAvion(calcEmissionAvion);
        setEmissionDouche(calcEmissionDouche);
        setEmissionMail(calcEmissionMail);
      };
      */
       


  const stepsContent = [
    <div>
        <h1 className="font-extrabold">Transport  &#128664;</h1>
        <h2>Combien de kilomètres parcourez vous par mois ?</h2>
        <input className="shadow-lg" type="range" min="0" max="10000" step="10" width="200px" value={km} onChange={handleKmChange} />
        <p>Nombre de kilomètres/mois : {km}</p>
    </div>,
    <div>
        <h1 className="font-extrabold">Vacances &#128745;</h1>
        <h2>Combien de fois prenez-vous l'avion par ans ? </h2>
        <input type="number" value={nbVols} onChange={handleNbVolsChange} />
    </div>,
    <div>
        <h1 className="font-extrabold">Douches &#128703;</h1>
        <h2>Combien de douches prenez-vous par semaine ? &#128703;</h2>
          <select name="nombreDosches" id="nombreDosches" onChange={handleNombreDouchesChange}>
            <option value="1-2">1 à 2 fois</option>
            <option value="2-4">2 à 4 fois</option>
            <option value="5-plus">5 fois et plus</option>
          </select>
          <h1>En moyenne, combien de minutes durent vos douches ? </h1>
          <input className="shadow-lg" type="range" min="0" max="60" step="5" width="200px" value={dureeDouche} onChange={handleDureeDoucheChange} />
          <p> {dureeDouche} minutes </p>
          <h1> Utilisez vous de l'eau chaude ?</h1>
          <p>Eau chaude &#128293;</p>
          <input type="checkbox" name="eauChaude" id="eauChaude" onChange={handleEauChaudeChange} />
    </div>,
    <div>
        <h1 className="font-extrabold" >Mail &#9993;</h1>
        <h2>Combien de mail contient votre boite mail ? </h2>
        <input className="shadow-lg" type="range" min="0" max="15000" step="100" width="200px" value={nbMails} onChange={handleNbMailsChange} /> 
        <p>Nombre de Mails dans votre boite de réception : {nbMails}</p>
    </div>,
    <div>
        <h1 className="font-extrabold">Résultat </h1>
        <p>Votre score est de : ...</p>
        <h2>{emissionTotale} tonnes de CO2/an</h2>
        <h3>
        {emissionTotale <= 4 ? (
          <p>Félicitations ! Vous adoptez les bons réflexes ! Continuez sur cette voie la &#129351;</p>
        ) : emissionTotale <=7 ? (
          <p>Vous avez des progrès à faire, mais vous êtes sur la bonne voie ! Continuez vos effort et n'hésitez pas à questionner EcoloGPT &#129352;</p>
        ) : (
          <p>Il faudra à l'avenir réfléchir davantage aux enjeux climatiques et aux conséquences de vos actes ! Consommez et vivez plus responsable pour un monde meilleur ! &#129353;</p>
        )}

        {/* Lien vers le quiz des bonnes pratiques */}
        <a href="https://www.assemblee-nationale.fr/13/evenements/bonnes-pratiques-environnementales.pdf">
        <button className="px-6 py-3 rounded-full bg-white p-2 fixed bottom-60 right-60 mr-4 text-lg hover:bg-blue-200" onClick={handleNextClick}>
            Je consulte les bonnes pratiques <span className="ml-2">&#10145;</span>
            </button>
        </a>
        </h3>
    </div>
];

    return(
    <>  
        <div className="grid grid-cols-1 text-center">
        <style>
        {`
          body {
            background-color: #a8d5ba; /* Couleur pastel-green */
          }
        `}
        </style>
        <Head title="simulateur"/>
        <NavBar/>
        <h1 className="font-extrabold mb-4">Simulateur d'empreinte carbone &#127757;</h1>
        <p className="text-gray-500 mb-4">Voici notre simulateur d'empreinte carbone qui vous permettra de connaitre votre émission de CO2 annuelle !</p>
        <div className="my-8">
            <ProgressBar progress={progress} />
            {stepsContent[step]}
            {step < nombreTotalPages - 1 &&(<button className="px-6 py-3 rounded-full bg-white p-2 fixed bottom-60 right-60 mr-4 text-lg active:bg-blue-200" onClick={handleNextClick}>
            Suivant <span className="ml-2">&#10145;</span>
            </button>)}
        </div>
        </div>
        
    </>
    );
};

