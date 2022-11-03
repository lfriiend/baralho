import { useEffect, useState } from 'react';
import style from './style.module.scss';
import Deck from '../../assets/img/deck.png'
import api from '../../lib/api';

export default function Jogo({ OnSaveUser }: any) {


    const [cards, setCards] = useState<any[]>([]);
    useEffect(() => {
        getCards();
    }, []);

    /* Método para acrescentar a potuação de 0 a 10 aleatóriamente para cada carta (Usado dentro de getCards e addCard) */
    const powerAtk = (): number => {
        const min = Math.ceil(0);
        const max = Math.floor(10);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /** Método para gerar um número aleatório de 1 a 9 (Usado dentro do getIdRandom)*/
    const getRandomIdInt = (): number => {
        const min = Math.ceil(1);
        const max = Math.floor(9);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /** Método para gerar um id aleatório */
    const getIdRandom = (): string => {
        return "xy" + getRandomIdInt().toString() + "-" + getRandomIdInt().toString();
    }

    /** Método para acrescentar as 5 cartas na tela */
    const getCards = async () => {
        const newCards = [];
        for (let index = 0; index < 5; index++) {
            const card = await api(getIdRandom())
            newCards.push(
                <div className={style.carta}>
                    <span>{powerAtk()}</span>
                    <img src={card.images.small} alt="" />
                </div>
            )
        }
        setCards(newCards);
    }

    /** Método para comprar cartas até chegar no máximo 8 */
    const addCard = async (id: any) => {
        const card = await api(id)
        const newCards = [];

        if (cards.length < 8) {
            cards.forEach(card => {
                newCards.push(card);
            })
            newCards.push(
                <div className={style.carta}>
                    <span>{powerAtk()}</span>
                    <img src={card.images.small} alt="" />
                </div>)
            setCards(newCards);
        } else {
            alert('Não é possível comprar mais cartas. Embaralhe-as!')
        }
    }

    return (
        <div className={style.container}>
            <div className={style.game}>
                <div className={style.user}>

                    <span>{OnSaveUser}</span>

                </div>
                <div className={style.cartas}>
                    {cards}
                </div>
                <div className={style.deck}>
                    <button onClick={() => addCard(getIdRandom())}>Comprar</button>
                    <button onClick={() => getCards()}>Embaralhar</button>
                    <img src={Deck} alt="Imagem do deck" />
                </div>
            </div>
        </div>
    )
}