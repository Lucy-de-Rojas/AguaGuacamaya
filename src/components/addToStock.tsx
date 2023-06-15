
import styles from '../styles/AddToStock.module.scss';
import {useState, useEffect} from 'react';

interface outcomeInterface {
        name:string;
        pcsPerPack: number;
        volume: number;
        still: boolean;
        stock: number;
        pricePerPack: number;
        description: string;

}





const AddToStock = () => {








         function handlecancel():void {
                let addToStock = document.querySelector('.AddToStock_wrapper__aPuPd');
                (addToStock as HTMLElement).style.left = '-110%';


        }

        function handleSave (event:React.SyntheticEvent) {
                // event.preventDefault();

                let name = (document.querySelector('#name') as HTMLInputElement).value;

                let pcsPerPack = (document.querySelector('#pcsperpack') as HTMLInputElement).value;

                let volume = (document.querySelector('#volume') as HTMLInputElement).value;


                let stillWater = (document.querySelector('#still') as HTMLInputElement).checked;


                let stock = (document.querySelector('#stock') as HTMLInputElement).value;


                let pricePerPack = (document.querySelector('#priceperpack') as HTMLInputElement).value;


                let description = (document.querySelector('#description') as HTMLInputElement).value;


                // outcome: 🟥
                let outcome:outcomeInterface = {
                        name:name,
                        pcsPerPack: parseInt(pcsPerPack),
                        volume:parseInt(volume),
                        still:stillWater,
                        stock: parseInt(stock),
                        pricePerPack: parseFloat(pricePerPack),
                        description: description,
                                }


                console.log(outcome);





        }





        return (<div className={styles.wrapper}>

<h1>
        aguguacamaya
        <span className={styles.blue}>/</span>
        <span className={styles.white}>stock</span>
        </h1>

<form>

        {/* name: */}
        <input type='text' placeholder='Name' id="name" className={styles.name} required />



        {/* pcs/pack + volume:  */}
        <div>
            <input type="number" name="pcsperpack" id="pcsperpack" className={styles.pcsperpack} placeholder='pcs/pack' step='1' required />


             <input type="number" name="volume" id="volume" className={styles.volume} placeholder='volume' required step='100'/>
        </div>



        {/* still / sparkling radios: */}
        <div>
                <label htmlFor="still">Still</label>
                <input type="radio" className={styles.waterType} id="still" value='still' name='waterType' /></div>

<div>
                <label htmlFor="sparkling">Sparkling</label>
                <input type="radio" className={styles.waterType} id="sparkling" value='sparkling' name='waterType'/>


        </div>



        {/* stock + price/pack:  */}
        <div>
                <input type="number" name="stock" id="stock" className={styles.stock} placeholder='stock' step='1' required />

                <input type="number" name="priceperpack" id="priceperpack" placeholder='price/pack' className={styles.priceperpack} required step='0.01'/>

        </div>



        {/* description: */}
        <input type="text" name="description" id="description" className={styles.description} placeholder='description' required/>



        {/* cancel / save:: */}
        <div>
        <button onClick={handlecancel} type='reset'>Cancel</button>
        <input type='submit' onClick={handleSave} value='Save'/>

        </div>


</form>

















        </div>);}
export default AddToStock;