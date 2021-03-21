import React from 'react'

export const BrandSelectOption = ({ brand, setBrand}) => {

    const onBrandChange = (e) => {
        console.log(`Brand: ${e.target.value}`)
        setBrand(e.target.value)
    }
    
    return(
        <>
            <div className="select-container">
                <label htmlFor="brand">Favourite Sneaker Brand: </label>
                <select id="brand" value={brand} onChange={onBrandChange}>
                    <option disabled></option>
                    <option>Nike</option>
                    <option>Jordan</option>
                    <option>Adidas</option>
                    <option>Reebok</option>
                    <option>New Balance</option>
                    <option>Karhu</option>
                </select>
            </div>
        </>
    )
}