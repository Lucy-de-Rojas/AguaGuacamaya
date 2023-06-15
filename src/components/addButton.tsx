
import styles from '@/styles/AddButton.module.scss';


const AddButton = () => {

        function handleClick() {
                let addToStock = document.querySelector('.AddToStock_wrapper__aPuPd');
                console.clear();

                console.log(addToStock);
                (addToStock as HTMLElement).style.left = '0';


        }


        return (<button className={styles.button} onClick={handleClick}>+</button>);
}


export default AddButton;