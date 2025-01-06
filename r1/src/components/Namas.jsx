import Langai from "./Langai"
export default function Namas({ numeris, spalva, kiekis, rand }) {


    return (
        <>
            <h2 style={{
                color: spalva,
            }}>
                Namas {numeris} aukstas</h2>
            <Langai kiekis={kiekis} rand={rand} />
        </>
    )
}


