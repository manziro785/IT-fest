import React from 'react';
import './CoruselModule.css';

function Grid() {
    return (
        <div className="grid-container">
            <div className="grid-item item1"><img src="./src/assets/corusel/consert.svg" alt="Image 1" /><div className="overlay">2000+ участников</div></div>
            <div className="grid-item item2"><img src="./src/assets/corusel/scene.svg" alt="Image 2" /><div className="overlay">100+ стартапов</div></div>
            <div className="grid-item item3"><img src="./src/assets/corusel/expo.svg" alt="Image 3" /><div className="overlay">50+ компаний</div></div>
            <div className="grid-item item4"><img src="./src/assets/corusel/speaker.svg" alt="Image 4" /><div className="overlay">Приглашённые эксперты</div></div>
            <div className="grid-item item5"><img src="./src/assets/corusel/cyber.svg" alt="Image 5" /><div className="overlay">Турниры по киберспорту</div></div>
            <div className="grid-item item6"><img src="./src/assets/corusel/sovet.svg" alt="Image 6" /><div className="overlay">Лучшие бизнес решения</div></div>
            <div className="grid-item item7"><img src="./src/assets/corusel/place.svg" alt="Image 7" /><div className="overlay">Участвовать</div></div>
        </div>
    );
}

export default Grid;
