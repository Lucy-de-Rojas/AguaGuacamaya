import { Dispatch } from "react";

interface Props {
        sortBy: string;
        setSortBy: React.Dispatch<React.SetStateAction<string>>;
}


const SortByComponent = ({sortBy, setSortBy}:Props) :React.JSX.Element => {

        function handleChange() {
                let selected = (document.querySelector('#sortBy') as HTMLInputElement).value;

               setSortBy(selected);



        }






        return (<div>
                <p>Sort by:</p>
                <select name="sortBy" id="sortBy" onChange={handleChange}>
                        <option value="price/item">price/item</option>

                        <option value="stock value">stock value</option>

                        <option value="quantity">quantity</option>

                        <option value="a-z">A-Z</option>


                </select>





        </div>);
}


export default SortByComponent;