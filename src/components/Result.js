import React from "react";
import Pet1, { Pet } from './pet';

const Results = ({ pets }) => {
    return (
        <div className="search">
            {pets.length === 0 ? <hi>No Pet Found</hi> : (
                pets.map(pet => {
                    console.log(pet);
                    return <Pet animal={pet.type}
                        key={pet.id}
                        name={pet.name}
                        breed={pet.breeds.primary}
                        media={pet.photos}
                        location={`${pet.contact.address.city}, ${pet.contact.address.state}`} i
                        d={pet.id}
                    />
                })
            )}
        </div>
    )
    
}

export default Results;